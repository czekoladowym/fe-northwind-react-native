import styled from "styled-components/native";

interface IProps {
  isOpen: boolean
}

export const HeaderField = styled.View<IProps>`
background-color: white;
height: 56px;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
overflow: hidden;
margin-left: ${({ isOpen }) => (isOpen ? '240px' : '0')};
transition-timing-function: margin-left cubic-bezier(.4,0,.2,1);
transition-duration: margin-left .15s;
border-bottom-width: 1px;
border-color: rgb(243 244 246);
`
export const IconField = styled.View`
padding: 8px 12px;
height: 56px;
width: 48px;
display: flex;
align-items: center;
justify-content: center;
`