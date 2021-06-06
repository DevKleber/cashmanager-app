import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	/* flex: 1; */

	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;

	margin-top: 50px;
`;

export const ModalContainer = styled.View`
	flex: 1;
	width: 100%;

	background: #fff;
	margin-top: 5px;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;

	/* padding: 100px 25px 0px 25px; */
`;
export const BodyModal = styled.View``;

export const ContainerModal = styled.View`
	/* padding: 5px; */
	width: 100%;
	flex-direction: column;
	/* background: orange; */
`;

export const ItemList = styled.View`
	padding: 25px;

	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 85px;
`;
export const ItemListDetail = styled.View`
	/* padding: 25px; */

	flex-direction: row;
	align-items: center;
	justify-content: center;
	/* background: orange; */
	min-height: 55px;

	border-bottom-width: 0.8px;
	border-color: #d7d7d7;
`;

export const ItemIcon = styled.View`
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
	background-color: #f3f6fb;
	border-radius: 80px;
	margin-right: 10px;
`;

export const ContainerTotalParcelas = styled.View`
	width: 60px;
	padding-right: 5px;
	/* height: 100%; */
	align-items: center;
	justify-content: center;
`;
export const TotalParcelasLabel = styled.Text``;

export const ItemContent = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

export const ItemPrice = styled.View`
	/* flex-direction: row; */
	/* width: 65px; */
	/* align-items: center;
	justify-content: center; */
`;
export const ButtonDelete = styled.TouchableOpacity`
	width: 65px;
	height: 65px;
	border-radius: 32.5px;
	align-items: center;
	justify-content: center;
	background: #f3f6fb;
`;

export const TextItemPrice = styled.Text`
	align-items: center;
	justify-content: center;
	font-family: 'Poppins-Bold';
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
