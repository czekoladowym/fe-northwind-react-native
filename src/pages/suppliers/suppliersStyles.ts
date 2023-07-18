import styled from 'styled-components/native';

interface IProps {
	isOpen: boolean;
}

export const MainContent = styled.ScrollView<IProps>`
	padding: 24px;
	height: 100%;
	width: 100%;
	margin-left: ${({ isOpen }) => (isOpen ? '240px' : '0')};
`;
export const MainCard = styled.View`
	border-width: 1px;
	border-radius: 4px;
	border-color: rgb(243 244 246);
	background-color: rgb(255 255 255);
`;
export const CardHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-color: rgb(243 244 246);
`;

export const HeaderTitle = styled.Text`
	font-size: 16px;
	padding: 12px 16px;
	font-weight: 700;
	font-family: 'SegoeUI';
`;
export const RedoImg = styled.View`
	padding: 12px 16px;
`;
export const CardContent = styled.View`
width: 100%;
border-bottom-width: 3px;
	border-color: rgb(243 244 246);
`

export const ImageField = styled.View`
	padding: 12px 16px;
	width: 100%;
`;
export const PropField = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-color: rgb(243 244 246);
	padding: 12px 16px;

`
export const PropTitle = styled.Text`
	padding-right: 12px;
	text-align: left;
	font-weight: 600;
	font-family: 'SegoeUI';  
	font-size: 16px;
	
`;

export const PropLink = styled(PropTitle)`
    color: rgb(37 99 235);
		padding-right: 0;
`
export const PropContent = styled(PropTitle)`
		padding-right: 0;

`
