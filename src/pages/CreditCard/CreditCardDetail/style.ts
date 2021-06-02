import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #009788;
`;

export const HeaderDate = styled.View`
	align-items: center;
	justify-content: center;
	height: 60px;
	flex-direction: row;
`;

export const TextHeaderDate = styled.Text`
	padding: 0 25%;
	color: #fff;
	font-family: 'Poppins-Regular';
	font-size: 18px;
`;

export const Card = styled.View`
	width: 86%;
	margin-left: 7%;
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
`;

export const Title = styled.Text`
	margin-left: 10px;
	font-size: 16px;
	color: #666666;
	font-family: 'Poppins-Bold';
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	display: flex;
	flex: 1;
	/* padding: 0px 25px; */
	margin-top: 20px;
`;

export const CardInvoice = styled.View`
	width: 100%;
	min-height: 400px;
	flex-direction: column;
	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
`;

export const ItemList = styled.View`
	flex-direction: row;
	min-height: 85px;
`;

export const ItemIcon = styled.View`
	width: 50px;
	display: flex;
	justify-content: center;
`;

export const ItemContent = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

export const ItemPrice = styled.View`
	width: 65px;
	align-items: center;
	justify-content: center;
`;

export const TextItemPrice = styled.Text`
	align-items: center;
	justify-content: center;
	font-family: 'Poppins-Bold';
	color: #989898;
`;

export const TextPrePrice = styled.Text`
	font-family: 'Poppins-Bold';
	align-items: center;
	justify-content: center;
	color: #989898;
`;

export const ItemTextTitle = styled.Text`
	color: #989898;
	font-family: 'Poppins-Regular';
`;

export const ItemTextDescription = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;

export const DatePrice = styled.Text`
	font-size: 10px;
	color: #989898;
	font-family: 'Poppins-Regular';
`;

export const RowHr = styled.View`
	border-width: 0.5px;
	border-color: #d7d7d7;
	width: 100%;
`;

export const ViewMesage = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
