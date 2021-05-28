import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #F7C325;
`;

export const Card = styled.TouchableOpacity`
	width: 100%;
	flex-direction: column;
	padding: 15px 20px;
	background-color: #fff;
	border-radius: 15px;
	margin-bottom: 20px;
	border: 1px solid #DADADA;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	flex-direction: row;
`;

export const Content = styled.View`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 20px;
`;

export const TextValue = styled.Text`
	font-weight: 200;
	color: #f55e53;
	font-family: 'Poppins-Regular';
`;

export const TextLighter = styled.Text`
	color: #666666;
	font-weight: 200;
	font-family: 'Poppins-Regular';
`;

export const Text = styled.Text`
	color: #666666;
	font-family: 'Poppins-Bold';
	font-size: 18px;
`;

export const TextAdd = styled.Text`
	color: #666666;
	font-family: 'Poppins-Bold';
	font-size: 17px;
	margin-left: 10px;
`;

export const Title = styled.Text`
	margin-left: 10px;
	font-size: 16px;
	color: #666666;
	font-family: 'Poppins-Bold';
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	flex: 1;
	padding: 70px 25px;
	margin-top: 20px;
	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
	margin-top: 30px;
`;

export const BtnNewCard = styled.TouchableOpacity`
	padding: 10px 15px;
	flex-direction: row;
	align-items: center;
	background-color: #ffffff;
	border-radius: 15px;
	margin-bottom: 20px;
	border: 1px solid #ececec;
`;

export const Actions = styled.View`
	flex: 1;
	flex-direction: row-reverse;
	align-items: flex-end;
`;

export const ContentTotal = styled.View`
	width: 100%;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	padding: 0px 25px;
`;

export const TitleTotal = styled.Text`
	font-size: 23px;
	font-family: 'Poppins-Bold';
	color: #666666;
`;

export const ValueTotal = styled.Text`
	font-size: 35px;
	font-family: 'Poppins-Bold';
	color: #666666;
	margin-top: -15px;
`;
