import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Dimensions } from 'react-native';
import { HeadTitle, HeadTitleField, SubTitle } from './customDrawerStyles';
import { MenuLabel } from '@components/sidebar/sidebarStyles';
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const CustomDrawer = (props: any) => {
	const screenHeight =
		Dimensions.get('window').height + StatusBarManager.HEIGHT;
	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				backgroundColor: 'rgb(31 41 55)',
				height: '100%',
				overflow: 'hidden',
			}}
		>
			<HeadTitleField>
				<HeadTitle>Northwind</HeadTitle>
				<SubTitle>Traders</SubTitle>
			</HeadTitleField>
			<MenuLabel>general</MenuLabel>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;
