import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #F5F6FC;
`;

export const ContentScrollView = styled.ScrollView`
    width: 100%;
    padding: 0px 25px;
    margin: 20px 0px;
`;

export const BtnNewCard = styled.TouchableOpacity`
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

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-weight: bold;
`;
