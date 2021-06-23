import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex: 1;
	align-items: center;
	padding-top: 14px;
	background-color: #f5f6fc;
`;

export const Title = styled.Text`
	margin-top: 30px;
	font-size: 20px;
	font-family: 'Poppins-Regular';
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 40px 40px;
`;

export const BtnEnviar = styled.TouchableOpacity`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #00eb84;
	color: #2a004f;
	border-radius: 10px;
	margin-top: 10px;
	padding: 15px;
	font-size: 15px;
`;

export const TextBtnEnviar = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
`;

export const TextForgotPass = styled.Text`
	font-family: 'Poppins-Regular';
`;

export const ForgotPass = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	margin-top: 20px;
`;
export const TextBtnBackToLogin = styled.Text`
	color: #00eb84;
	margin-left: 7px;
	font-family: 'Poppins-Regular';
`;

export const BtnNewAcount = styled.TouchableOpacity`
	width: 100%;
	background-color: #2a004f;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 16px 0px;
`;
