import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/home/Home';
import Employees from '../../pages/employees/Employees';
import Suppliers from '../../pages/suppliers/Suppliers';
import Search from '../../pages/search/Search';
import CustomDrawer from './customDrawer/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import Badge from '@components/common/components/icons/Badge';
import Inventory from '@components/common/components/icons/Inventory';
import SearchIcon from '@components/common/components/icons/Search';
import DisplaySettings from '@components/common/components/icons/DisplaySettings';
import Cart from '@components/common/components/icons/Cart';
import ShoppingCart from '@components/common/components/icons/ShoppingCart';
import Group from '@components/common/components/icons/Group';

const Drawer = createDrawerNavigator();

function Navigator() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				drawerLabelStyle: {
					marginLeft: -18,
					fontFamily: 'ArialMT',
					fontSize: 16,
					padding: 0,
				},
				drawerActiveBackgroundColor: 'rgb(55 65 81)',
				drawerActiveTintColor: '#fff',
				drawerInactiveTintColor: '#fff',
				drawerItemStyle: {
					marginLeft: 0,
					marginBottom: 0,
					marginRight: 0,
					borderRadius: 0,
				},
			}}
			
		>
			{/* screenOptions={{ headerShown: false }} */}
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{
					drawerIcon: () => (
						<Ionicons name="home-sharp" size={24} color="#d1d5db" />
					),
				}}
			/>
			<Drawer.Screen
				name="Dashboard"
				component={Employees}
				options={{
					drawerIcon: () => <DisplaySettings />,
				}}
			/>
			<Drawer.Screen
				name="Suppliers"
				component={Suppliers}
				options={{
					drawerIcon: () => <Inventory />,
				}}
			/>
			<Drawer.Screen
				name="Products"
				component={Employees}
				options={{
					drawerIcon: () => <Cart />,
				}}
			/>
			<Drawer.Screen
				name="Orders"
				component={Employees}
				options={{
					drawerIcon: () => <ShoppingCart />,
				}}
			/>
			<Drawer.Screen
				name="Employees"
				component={Employees}
				options={{
					drawerIcon: () => <Badge />,
				}}
			/>
			<Drawer.Screen
				name="Customers"
				component={Employees}
				options={{
					drawerIcon: () => <Group />,
				}}
			/>
			<Drawer.Screen
				name="Search"
				component={Search}
				options={{
					drawerIcon: () => <SearchIcon />,
				}}
			/>
		</Drawer.Navigator>
	);
}

export default Navigator;
