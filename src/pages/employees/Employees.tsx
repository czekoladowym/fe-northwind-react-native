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
} from './employeesStyles';
import { MaterialIcons } from '@expo/vector-icons';
import InitialImg from '@components/initialImage/InitialImg';
import { IEmployee, IResponse } from '@interfaces/employeesInterfaces';

import axios, { AxiosResponse } from 'axios';

const Employees = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [employees, setEmployees] = useState<IEmployee[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getContent = async () => {
			setLoading(true);
			const res: AxiosResponse<IResponse> = await axios.get(
				'https://be-northwind.onrender.com/employees'
			);
			setLoading(false);
			setEmployees(res.data.employees);
		};
		getContent();
	}, []);
	return (
		<>
			{/* <Header isOpen={isOpen} setOpen={() => setIsOpen(!isOpen)} /> */}
			<Sidebar isOpen={isOpen} />
			<MainContent isOpen={isOpen}>
				<MainCard>
					<CardHeader>
						<HeaderTitle>Employees</HeaderTitle>
						<RedoImg>
							<MaterialIcons name="redo" size={24} color="black" />
						</RedoImg>
					</CardHeader>
					{employees.map((employee, i) => (
						<CardContent key={i}>
							<ImageField>
								<InitialImg
									fullName={employee.firstName + ' ' + employee.lastName}
									initials={true}
								/>
							</ImageField>
							<PropField>
								<PropTitle>Name</PropTitle>
								<PropLink>
									{employee.firstName + ' ' + employee.lastName}
								</PropLink>
							</PropField>
							<PropField>
								<PropTitle>Title</PropTitle>
								<PropContent>{employee.title}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>City</PropTitle>
								<PropContent>{employee.city}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>Phone</PropTitle>
								<PropContent>{employee.phone}</PropContent>
							</PropField>
							<PropField>
								<PropTitle>Country</PropTitle>
								<PropContent>{employee.country}</PropContent>
							</PropField>
						</CardContent>
					))}
				</MainCard>
			</MainContent>
		</>
	);
};

export default Employees;
