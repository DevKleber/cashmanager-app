import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	height: 100%;
	/* width: 100%;
	align-items: center;
	flex-direction: column; */
	background-color: #f7c325;
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;

	padding: 90px 25px 204px 25px;
	margin-top: 50px;

	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
	background-color: #fff;
`;

export const BtnNewCard = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	width: 100%;
	flex-direction: row;
	justify-content: center;
	background-color: #F7C325;
	color: #2a004f;
	border-radius: 10px;
	margin-top: 10px;
	padding: 15px;

	background-color: #f7c325;
	color: #2a004f;
	border-radius: 10px;
	font-size: 15px;
`;

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
`;
