import styled from 'styled-components/native';

interface IProps {
	isOpen: boolean;
}

export const MainContent = styled.View<IProps>`
	padding: 24px;
	height: 100%;
	width: 100%;
	margin-left: ${({ isOpen }) => (isOpen ? '240px' : '0')};
`;

export const MainCard = styled.View`
	padding: 24px;
	border-width: 1px;
	border-radius: 4px;
	border-color: rgb(243 244 246);
	background-color: rgb(255 255 255);
`;
export const InputLabel = styled.Text`
	font-weight: 700;
	font-family: 'SegoeUI';
	font-size: 16px;
	margin-bottom: 8px;
`;

export const SearchHeader = styled.View`
	height: 40px;
	width: 100%;
	position: relative;
`;

export const SearchIcon = styled.View`
	position: absolute;
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.TextInput`
	border-radius: 4px;
	height: 40px;
	width: 50%;
	border-width: 1px;
	padding: 10px;
	border-color: rgb(156 163 175);
	padding: 8px 12px 8px 40px;
`;

export const CheckoutTitle = styled(InputLabel)`
	margin-top: 12px;
`;
export const CheckBoxes = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: flex-start;
	gap: 12px;
	margin-bottom: 12px;
`;
export const ResultTitle = styled(InputLabel)`
	font-size: 18px;
	margin: 0;
`;

export const ResultField = styled.View`
	width: 100%;
`;
export const NoResults = styled.Text`
	font-family: 'SegoeUI';
	font-size: 16px;
	margin-top: 24px;
`;
export const Name = styled.Text`
	font-family: 'SegoeUI';
	color: #0000ee;
`;

export const SubInfo = styled.Text`
	font-family: 'SegoeUI';
	color: #9ca3af;
	font-size: 14px;
`;
