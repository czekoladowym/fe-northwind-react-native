import styled from 'styled-components/native';

interface IProps {
	isOpen: boolean;
}

export const MainContent = styled.View<IProps>`
	padding: 48px;
	height: 100%;
	width: 100%;
	background-color: rgb(249 250 251);
	margin-left: ${({ isOpen }) => (isOpen ? '240px' : '0')};
`;
export const Title = styled.Text`
	width: 100%;
	font-size: 22px;
	font-family: 'SegoeUI';
	line-height: 32px;
	font-weight: 400;
`;

export const SubTitle = styled.Text`
	width: 100%;
	font-size: 18px;
	line-height: 28px;
	color: #9ca3af;
	padding-top: 8px;
	font-family: 'SegoeUI';
`;
export const MainImage = styled.Image`
	width: 100%;
	height: 185px;
	object-fit: scale-down;
`;

export const MainText = styled.Text`
	font-size: 16px;
	font-family: 'SegoeUI';
	color: black;
`;
export const Link = styled.Text`
	color: rgb(37 99 235);
	font-size: 16px;
	font-family: 'SegoeUI';
	text-align: center;
`;

export const SubText = styled(MainText)`
	width: 100%;
	padding-top: 16px;
`;
