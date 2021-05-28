import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #F7C325;
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	padding: 0px 25px;
	margin-top: 20px;
	padding-top: 90px;
	margin-top: 110px;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
	background-color: #fff;
`;

export const BtnNewCard = styled.TouchableOpacity`
	width: 100%;
	align-items: center;
	flex-direction: row;
	background-color: #F7C325;
	color: #2a004f;
	border-radius: 10px;
	margin-top: 10px;
	padding: 15px;
	font-size: 15px;
`;

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
`;
