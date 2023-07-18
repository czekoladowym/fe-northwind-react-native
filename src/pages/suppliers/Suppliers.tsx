import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import {
	CardContent,
	CardHeader,
	HeaderTitle,
	ImageField,
	MainCard,
	MainContent,
	PropContent,
	PropField,
	PropLink,
	PropTitle,
	RedoImg,
} from './suppliersStyles';
import { MaterialIcons } from '@expo/vector-icons';
import InitialImg from '@components/initialImage/InitialImg';
import { ISupplier, IResponse } from '@interfaces/supplierInterfaces';

import axios, { AxiosResponse } from 'axios';

const Suppliers = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [supplies, setSupplies] = useState<ISupplier[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getContent = async () => {
			setLoading(true);
			const res: AxiosResponse<IResponse> = await axios.get(
				'https://be-northwind.onrender.com/supplies'
			);
			setLoading(false);
			setSupplies(res.data.supplies);
		};
		getContent();
	}, []);
	return (
		<>
			{/* <Header isOpen={isOpen} setOpen={() => setIsOpen(!isOpen)} /> */}
			{/* <Sidebar isOpen={isOpen} /> */}
			<MainContent isOpen={isOpen}>
				<MainCard>
					<CardHeader>
						<HeaderTitle>Suppliers</HeaderTitle>
						<RedoImg>
							<MaterialIcons name="redo" size={24} color="black" />
						</RedoImg>
					</CardHeader>
					{supplies.map((supplie, i) => (
						<CardContent key={i}>
							<ImageField>
								<InitialImg fullName={supplie.contact} initials={false}/>
							</ImageField>
							<PropField>
								<PropTitle>Company</PropTitle>
								<PropLink>{supplie.company}</PropLink>
							</PropField>
							<PropField>
								<PropTitle>Contact</PropTitle>
								<PropContent>{supplie.contact}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>Title</PropTitle>
								<PropContent>{supplie.title}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>City</PropTitle>
								<PropContent>{supplie.city}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>Country</PropTitle>
								<PropContent>{supplie.country}</PropContent>
							</PropField>
						</CardContent>
					))}
				</MainCard>
			</MainContent>
		</>
	);
};

export default Suppliers;
