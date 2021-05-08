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
`;

export const Content = styled.View`
	/* flex: 1; */
	width: 100%;

	align-items: center;
	flex-direction: column;
`;

export const BtnLogar = styled.TouchableOpacity`
	width: 100%;

	align-items: center;
	flex-direction: column;
	background-color: #00eb84;
	color: #2a004f;
	border-radius: 10px;
	margin-top: 10px;
	padding: 15px;
	font-size: 15px;
`;

export const TextBtnLogar = styled.Text`
	font-size: 14px;
	font-weight: bold;
`;

export const TextBtnNewAcount = styled.Text`
	color: #00eb84;
	margin-left: 7px;
`;

export const BtnBackToLogin = styled.TouchableOpacity`
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
