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
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const ViewBox = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const Item = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 40%;
	height: 120px;
	background-color: #fff;
	border-radius: 15px;
	margin: 10px
`;

export const Text = styled.Text`
	color: #666666;
	font-family: 'Poppins-Regular';
`;
