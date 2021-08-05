import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	align-items: center;
	flex-direction: row;
	width: 100%;
	background-color: #e8e9ef;
	border-radius: 10px;
	margin: 10px 0px;
	height: 50px;
`;
export const BoxIcon = styled.View`
	width: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.TextInput`
	flex: 1;
	color: #666360;
`;

export const TextPreFixer = styled.Text`
	font-size: 18px;
	font-family: 'Poppins-Bold';
	color: #989898;
`;
