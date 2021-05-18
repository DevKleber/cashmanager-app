import styled from 'styled-components/native';

export const Container = styled.View`
	height: 68px;
	background: #f0f2f5;
	flex-direction: row;
	border-top-color: #dadada;
	border-top-width: 1px;
`;

export const TabItem = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
export const TabItemAdd = styled.TouchableOpacity`
	width: 65px;
	height: 65px;
	border-radius: 32.5px;
	margin-top: -18px;

	justify-content: center;
	align-items: center;
	background: #00eb84;
`;
export const Name = styled.Text`
	font-size: 10px;
	font-family: 'Poppins-Regular';
`;
