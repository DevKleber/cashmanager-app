import styled from 'styled-components/native';

export const List = styled.View`
	width: 100%;
	padding: 15px;
`;
export const Title = styled.Text`
	font-family: 'Poppins-Regular';
	color: #666666;
`;
export const ItemList = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 65px;
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

export const ItemContent = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

export const ItemTextDescription = styled.Text`
	flex: 1;
	font-family: 'Poppins-Bold';
	color: #989898;
`;
export const ContainerPorcentagem = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	width: 100px;
`;
export const Planejada = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;
export const Atual = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;
export const TextPlanejado = styled.Text`
	font-family: 'Poppins-Regular';
	color: #989898;
	font-size: 12px;
`;

export const RowHr = styled.View`
	border-width: 0.5px;
	border-color: #d7d7d7;
	width: 100%;
`;
