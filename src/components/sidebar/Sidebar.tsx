import { Ionicons } from '@expo/vector-icons';
import {
	HeadTitleField,
	MenuItem,
	MenuLabel,
	SidebarField,
	SubTitle,
	HeadTitle,
	ItemName,
} from './sidebarStyles';
import Badge from '@components/common/components/icons//Badge';
import DisplaySettings from '@components/common/components/icons/DisplaySettings';
import Cart from '@components/common/components/icons/Cart';
import Group from '@components/common/components/icons/Group';
import Search from '@components/common/components/icons/Search';
import Inventory from '@components/common/components/icons/Inventory';
import ShoppingCart from '@components/common/components/icons/ShoppingCart';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
	isOpen: boolean;
	navigation?: any;
}

const Sidebar = ({ isOpen, navigation }: IProps) => {
	return (
		<SidebarField isOpen={isOpen}>
			<HeadTitleField>
				<HeadTitle>Northwind</HeadTitle>
				<SubTitle>Traders</SubTitle>
			</HeadTitleField>
			<MenuLabel>general</MenuLabel>
			<MenuItem>
				<Ionicons name="home-sharp" size={24} color="#d1d5db" />
				<TouchableOpacity onPress={() => navigation?.navigate('Home')}>
					<ItemName>Home</ItemName>
				</TouchableOpacity>
			</MenuItem>
			<MenuItem>
				<DisplaySettings />
				<ItemName>Dashboard</ItemName>
			</MenuItem>
			<MenuLabel>backoffice</MenuLabel>
			<TouchableOpacity onPress={() => navigation?.navigate('Suppliers')}>
				<MenuItem>
					<Inventory />
					<ItemName>Suppliers</ItemName>
				</MenuItem>
			</TouchableOpacity>
			<MenuItem>
				<Cart />
				<ItemName>Products</ItemName>
			</MenuItem>
			<MenuItem>
				<ShoppingCart />
				<ItemName>Orders</ItemName>
			</MenuItem>
			<TouchableOpacity onPress={() => navigation.navigate('Employees')}>
				<MenuItem>
					<Badge />
					<ItemName>Employees</ItemName>
				</MenuItem>
			</TouchableOpacity>
			<MenuItem>
				<Group />
				<ItemName>Customers</ItemName>
			</MenuItem>
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<MenuItem>
					<Search />
					<ItemName>Search</ItemName>
				</MenuItem>
			</TouchableOpacity>
		</SidebarField>
	);
};

export default Sidebar;
