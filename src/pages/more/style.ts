import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #f0f2f5;
	padding: 25px;
`;
export const Menu = styled.Text`
	font-size: 25px;
	font-family: 'Poppins-Regular';

	/* align-items: flex-start; */
`;
export const View = styled.View`
	flex: 1;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const Item = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100px;
	background-color: #fff;
	border-radius: 15px;
`;

export const Text = styled.Text`
	color: #666666;
	font-family: 'Poppins-Regular';
`;
