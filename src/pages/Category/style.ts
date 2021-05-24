import styled, {css} from 'styled-components/native';

interface IsIncomeProps {
	selected: boolean | undefined;
	colorBg?: string;
}

export const Container = styled.View<IsIncomeProps>`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: ${({selected}) => (selected ? '#207868' : '#F44236')};
`;

export const BoxOptions = styled.View`
	align-items: center;
	flex-direction: row;
	height: 69px;
	width: 327px;
	background-color: #e8e9ef;
	border-radius: 35px;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const IconTextIncome = styled.Text<IsIncomeProps>`
	font-family: 'Poppins-Bold';
	margin-right: 5px;
	color: #aaa;

	${({selected}) =>
		selected &&
		css`
			color: #fff;
		`}
`;

export const TextBoldExpense = styled.Text<IsIncomeProps>`
	font-family: 'Poppins-Bold';
	margin-right: 5px;
	color: #aaa;

	${({selected}) =>
		selected === false &&
		css`
			color: #fff;
		`}
`;

export const BtnOptionIncome = styled.TouchableOpacity<IsIncomeProps>`
	width: 162px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 35px;
	height: 69px;
	${({selected}) =>
		selected &&
		css`
			background-color: #1d6c5e;
		`}
`;

export const BtnOptionExpense = styled.TouchableOpacity<IsIncomeProps>`
	width: 165px;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 35px;
	height: 69px;
	background-color: #e8e9ef;

	${({selected}) =>
		selected === false &&
		css`
			background-color: #dc3b31;
		`}
`;

export const TextValue = styled.Text`
	font-weight: 200;
	color: #f55e53;
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	padding: 0px 20px;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
`;

export const CardInvoice = styled.View`
	width: 100%;
	flex-direction: column;
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
	flex-direction: column;
	justify-content: center;
`;

export const ItemTextDescription = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;

export const RowHr = styled.View`
	border-width: 0.5px;
	border-color: #d7d7d7;
	width: 100%;
`;

export const BtnNewCategory = styled.TouchableOpacity<IsIncomeProps>`
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 50px;

	background-color: #1d6c5e;

	${({selected}) =>
		selected === false &&
		css`
			background-color: #dc3b31;
		`}
`;
export const ContainerBtnNewItem = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
`;
export const BtnNewCard = styled.TouchableOpacity<IsIncomeProps>`
	height: 45px;
	width: 324px;

	flex-direction: row;
	align-items: center;
	justify-content: center;

	background-color: #fff;
	border-radius: 15px;
	margin-bottom: 25px;

	border: 1px solid #207868;
	background-color: #207868;

	${({selected}) =>
		selected === false &&
		css`
			background-color: #f44236;
			border: 1px solid #f44236;
		`}
`;
export const TextAdd = styled.Text`
	color: #fff;
	font-family: 'Poppins-Bold';
	font-size: 16px;
	margin-left: 10px;
`;
