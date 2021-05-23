import styled from 'styled-components/native';

interface ChartProps {
	valor: number;
}

export const Balance = styled.View`
	flex-direction: row;
	height: 220px;
	width: 100%;
	background-color: #fff;
	border-radius: 20px;
	padding: 10px;
`;
export const Chart = styled.View`
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-around;
	width: 90px;
	height: 100%;
`;
export const Income = styled.View<ChartProps>`
	background-color: #00eb84;
	height: ${props => `${props.valor}%`};
	width: 40%;
	border-radius: 20px;
`;
export const Outcome = styled.View<ChartProps>`
	background-color: #e62e4d;
	height: ${props => `${props.valor}%`};
	width: 40%;
	border-radius: 20px;
`;

export const Info = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	padding: 5px 10px;
`;
export const Item = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	padding-top: 25px;
`;
export const Label = styled.Text`
	font-size: 18px;
	font-family: 'Poppins-Bold';
	color: #666666;
`;
export const ValueIncome = styled.Text`
	color: #00eb84;
	font-family: 'Poppins-Bold';
`;
export const ValueOutcome = styled.Text`
	color: #e62e4d;
	font-family: 'Poppins-Bold';
`;
export const Line = styled.View`
	margin: 5px;
	width: 100%;
	height: 1px;
	background-color: #f0f2f5;
`;
export const Value = styled.Text`
	color: #666666;
	font-family: 'Poppins-Bold';
`;
