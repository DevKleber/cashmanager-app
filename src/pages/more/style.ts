import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #407c93;
`;

export const View = styled.View`
	width: 100%;
	flex: 1;

	justify-content: center;

	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;

	padding: 0px 25px 0px 25px;
	margin-top: 100px;
`;
export const NameUser = styled.Text`
	text-align: center;
	font-family: 'Poppins-Bold';
	font-size: 24px;
	color: #407c93;
`;
export const EmailUser = styled.Text`
	text-align: center;
	font-family: 'Poppins-Regular';
	font-size: 14px;
	color: #407c93;
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
	height: 130px;
	background-color: #407c93;
	border-radius: 25px;
	margin: 10px;
`;

export const Text = styled.Text`
	color: #fff;
	font-family: 'Poppins-Regular';
`;
