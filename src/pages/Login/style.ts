import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #f5f6fc;
	padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
	margin-bottom: 16px;
`;
export const Logo = styled.Image``;
export const Title = styled.Text`
	margin-top: 30px;
	margin-bottom: 25px;
	font-size: 20px;
	color: #180a29;
	font-family: 'Poppins-Regular';
`;

export const Content = styled.View`
	width: 100%;

	align-items: center;
	flex-direction: column;
`;

export const BtnLogar = styled.TouchableOpacity`
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: #00eb84;
	color: #2a004f;
	border-radius: 10px;
	margin-top: 10px;
	padding: 15px;
	font-size: 15px;
`;

export const TextBtnLogar = styled.Text`
	font-size: 14px;
	margin-right: 10px;
	font-family: 'Poppins-Bold';
`;

export const TextBtnNewAcount = styled.Text`
	color: #00eb84;
	margin-left: 7px;
	font-family: 'Poppins-Regular';
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

export const BtnNewAcount = styled.TouchableOpacity`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;

	background-color: #2a004f;
	border-top-width: 1px;
	border-color: #2a004f;

	padding: 16px 0;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
