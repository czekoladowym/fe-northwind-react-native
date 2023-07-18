import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainField, Title } from './checkBoxStyles';

interface IProps {
	onPress: () => void;
	isChecked: boolean;
	title: string;
}

const CheckBox = ({ isChecked, onPress, title }: IProps) => {
	const iconName = isChecked ? 'record-circle' : 'circle-outline';

	return (
		<MainField>
			<Pressable onPress={onPress}>
				<MaterialCommunityIcons
					name={iconName}
					size={24}
					color={
						iconName == 'record-circle' ? 'rgb(59 130 246)' : 'rgb(209 213 219)'
					}
				/>
			</Pressable>
			<Title onPress={onPress}>
				{title}
			</Title>
		</MainField>
	);
};

export default CheckBox;


