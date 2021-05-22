import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #f0f2f5;

	.btnSelected {
		background-color: black;
	}
`;

export const BoxOptions = styled.View`
	align-items: center;
	flex-direction: row;
	height: 100px;
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
`;
interface IsIncomeProps {
	selected: boolean | undefined;
}

export const BtnOptionExpense = styled.TouchableOpacity<IsIncomeProps>`
	width: 47.5%;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	border-radius: 25px;
	padding: 15px;
	padding: 30px;
	background-color: #E8E9EF;
	border: 1px solid #E62E4D;

	${({selected}) =>
    selected === false &&
		css`
			background-color: #E62E4D;
    	`
	}
`;

export const BtnOptionIncome = styled.TouchableOpacity<IsIncomeProps>`
	width: 47.5%;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 25px;
	padding: 15px;
	padding: 30px;
	margin-right: 5%;
	background-color: #E8E9EF;
	border: 1px solid #00eb84;

	${({selected}) =>
    selected &&
		css`
			background-color: #00eb84;
    	`
	}
`;

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
`;



export const IconTextIncome = styled.Text<IsIncomeProps>`
	font-family: 'Poppins-Bold';
	margin-right: 5px;
	color: black;

	${({selected}) =>
    selected &&
		css`
			color: #fff;
    	`
	}

`;

export const TextBoldExpense = styled.Text<IsIncomeProps>`
	font-family: 'Poppins-Bold';
	margin-right: 5px;
	color: black;

	${({selected}) =>
    selected === false &&
		css`
			color: #fff;
    	`
	}

`;
