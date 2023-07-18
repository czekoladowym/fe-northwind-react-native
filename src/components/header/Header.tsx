import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { HeaderField, IconField } from './headerStyles';
import { useState } from 'react';

interface IProps {
  isOpen: boolean;
	setOpen: () => void
}

const Header = ({isOpen, setOpen}: IProps) => {
  const toggleSidebar = () => {
    setOpen();
  };
	return (
		<HeaderField isOpen={isOpen}>
			<TouchableOpacity onPress={() => toggleSidebar()}>
				<IconField>
					<Ionicons name="menu-sharp" size={24} color="black" />
				</IconField>
			</TouchableOpacity>
			<IconField>
				<Ionicons name="ellipsis-vertical" size={24} color="black" />
			</IconField>
		</HeaderField>
	);
};

export default Header;
