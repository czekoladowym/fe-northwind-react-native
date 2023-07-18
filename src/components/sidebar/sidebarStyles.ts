import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
	isOpen: boolean;
}

export const SidebarField = styled(Animated.View)<IProps>`
	height: 100%;
	width: 240px;
	z-index: 10;
	background-color: rgb(31 41 55);
	position: absolute;
	left: 0;
	left: ${({ isOpen }) => (isOpen ? '0' : '-240')};
`;
export const HeadTitleField = styled.View`
	text-align: center;
	background-color: rgb(17 24 39);
	height: 56px;
	width: 100%;
	padding: 0 12px;
	flex-direction: row;
	align-items: center;
	line-height: 24px;
`;
export const HeadTitle = styled.Text`
	text-align: center;
	font-family: 'ArialMT-Black';
	font-size: 16px;
	color: #fff;
`;
export const SubTitle = styled.Text`
	font-size: 16px;
	color: #fff;
	margin-left: 4.5px;
	font-family: 'ArialMT';
	line-height: 24px;
`;
export const MenuLabel = styled.Text`
	padding: 12px;
	font-size: 12px;
	font-family: 'ArialMT';
	color: #9ca3af;
	text-transform: uppercase;
`;
export const MenuItem = styled.View`
	padding: 8px 12px;
	gap: 12px;
	width: 100%;
	flex-direction: row;
	align-items: center;
	text-align: center;
`;
export const ItemName = styled.Text`
	line-height: 24px;
	color: #d1d5db;
	font-family: 'ArialMT';
	font-size: 16px;
`;
