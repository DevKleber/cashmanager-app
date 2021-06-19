import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #009788;
`;

export const ContentScrollView = styled.View`
	width: 100%;
	padding: 0px 25px;
	flex: 1;
	justify-content: center;
	margin-top: 112px;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
	background-color: #fff;
`;

export const BtnNewCard = styled.TouchableOpacity`
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: #009788;
	border-radius: 15px;
	margin-top: 10px;
	padding: 15px;
	font-size: 15px;
`;

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
	color: #fff;
`;
