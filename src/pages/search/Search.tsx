import React, { useEffect, useState } from 'react';
import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';
import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from '@components/checkbox/CheckBox';
import { Text, View } from 'react-native';
import {
	CheckBoxes,
	CheckoutTitle,
	Input,
	InputLabel,
	MainCard,
	MainContent,
	Name,
	NoResults,
	ResultField,
	ResultTitle,
	SearchHeader,
	SearchIcon,
	SubInfo,
} from './searchStyles';
import axios from 'axios';
import { IResponse } from '@interfaces/searchInterfaces';
import SearchResult from './components/SearchResult';

const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [products, setProducts] = useState(true);
	const [customers, setCustomers] = useState(false);
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState<IResponse[]>([]);

	const handleSearch = () => {
		setLoading(true);
		const endpoint = `https://be-northwind.onrender.com/search?type=${
			products ? 'products' : 'customers'
		}&value=${searchValue}`;

		axios
			.get(endpoint)
			.then((response) => {
				setSearchResults(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const productsChoice = () => {
		setCustomers(false);
		setProducts(true);
	};

	const customersChoice = () => {
		setCustomers(true);
		setProducts(false);
	};

	useEffect(() => {
		if (searchValue !== '') {
			handleSearch();
		}
	}, [customers, products]);

	return (
		<>
			{/* <Header isOpen={isOpen} setOpen={() => setIsOpen(!isOpen)} /> */}
			<Sidebar isOpen={isOpen} />
			<MainContent isOpen={isOpen}>
				<MainCard>
					<InputLabel>Search Database</InputLabel>
					<SearchHeader>
						<SearchIcon>
							<MaterialIcons name="search" size={24} color="black" />
						</SearchIcon>
						<Input
							placeholder="Enter keyword..."
							value={searchValue}
							onChangeText={(text: string) => setSearchValue(text)}
							onSubmitEditing={handleSearch}
						/>
					</SearchHeader>
					<CheckoutTitle>Tables</CheckoutTitle>
					<CheckBoxes>
						<CheckBox
							onPress={productsChoice}
							title="Products"
							isChecked={products}
						/>
						<CheckBox
							onPress={customersChoice}
							title="Customers"
							isChecked={customers}
						/>
					</CheckBoxes>
					<ResultTitle>Search results</ResultTitle>
					<ResultField>
						{loading ? (
							<NoResults>Loading...</NoResults>
						) : searchResults.length === 0 ? (
							<NoResults>No results</NoResults>
						) : (
							<SearchResult searchResult={searchResults} type={products} />
						)}
					</ResultField>
				</MainCard>
			</MainContent>
		</>
	);
};

export default Search;
