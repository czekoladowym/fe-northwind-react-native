import { IResponse } from '@interfaces/searchInterfaces';
import { View, Text } from 'react-native';
import { Name, SubInfo } from './searchResultStyles';

interface IProps {
	searchResult: IResponse[];
	type: boolean;
}

const SearchResult = ({ searchResult, type }: IProps) => {
	return (
		<View>
			{type ? (
				<>
					{searchResult.map((product, i) => (
						<View key={i} style={{ marginTop: 8 }}>
							<Name>{product?.productName}</Name>
							<SubInfo>{`#${i + 1}, Quantity Per Unit: ${product?.quantity}, Price: ${
								product?.price
							}, Stock: ${product?.unitsInStock}`}</SubInfo>
						</View>
					))}
				</>
			) : (
				<>
					{searchResult.map((resultItem, i) => (
						<View key={i} style={{ marginTop: 8 }}>
							<Name>{resultItem?.name}</Name>
							<SubInfo>{`#${i + 1}, Contact: ${resultItem?.contact}, Title: ${
								resultItem?.title
							}, Phone: ${resultItem?.phone}`}</SubInfo>
						</View>
					))}
				</>
			)}
		</View>
	);
};

export default SearchResult;
