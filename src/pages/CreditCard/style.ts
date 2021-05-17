import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #f5f6fc;
`;

export const Card = styled.TouchableOpacity`
	width: 100%;
	flex-direction: column;
	padding: 15px 20px;
	background-color: #fff;
	border-radius: 15px;
	margin-bottom: 20px;
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
`;

export const TextLighter = styled.Text`
	color: #666666;
	font-weight: 200;
`;

export const Text = styled.Text`
	color: #666666;
	font-weight: bold;
`;

export const TextAdd = styled.Text`
	color: #666666;
	font-weight: bold;
	font-size: 17px;
	margin-left: 10px;
`;

export const Title = styled.Text`
	flex: 1;
	margin-left: 10px;
	font-size: 16px;
	color: #666666;
	font-weight: bold;
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	flex: 1;
	padding: 0px 25px;
	margin-top: 20px;
`;

export const BtnNewCard = styled.TouchableOpacity`
	padding: 10px 15px;
	flex-direction: row;
	align-items: center;
	background-color: #ffffff;
	border-radius: 15px;
	margin-bottom: 20px;
`;

export const Actions = styled.View`
	width: 50px;
	flex-direction: row-reverse;
	justify-content: space-around;
`;
