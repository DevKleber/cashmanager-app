import styled, { css } from 'styled-components/native';

interface IsIncomeProps {
	selected: boolean | undefined;
}

export const Container = styled.View<IsIncomeProps>`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: ${({selected}) => selected ? "#00eb84" : "#E62E4D"};

	.btnSelected {
		background-color: black;
	}
`;

export const BoxOptions = styled.View`
	align-items: center;
	flex-direction: row;
	height: 69px;
	width: 327px;
	background-color: #E8E9EF;
	border-radius: 35px;

`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	padding: 0px 25px;
	padding-top: 25px;
	margin-top: 20px;
	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;

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

export const BtnOptionExpense = styled.TouchableOpacity<IsIncomeProps>`
	width: 165px;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 35px;
	height: 69px;
	background-color: #E8E9EF;

	${({selected}) =>
    selected === false &&
		css`
			background-color: #cf2945;
    	`
	}
`;

export const BtnOptionIncome = styled.TouchableOpacity<IsIncomeProps>`
	width: 162px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 35px;
	height: 69px;
	background-color: #E8E9EF;

	${({selected}) =>
    selected &&
		css`
			background-color: #00d377;
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
	color: #aaa;

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
	color: #aaa;

	${({selected}) =>
    selected === false &&
		css`
			color: #fff;
    	`
	}

`;

export const BoxCardCount = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;

`;

export const BoxIsPaidOut = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;

`;

export const ContentIcon = styled.View`
	width: 70%;
	flex-direction: row;
	align-items: center;
	margin-left: 20px;

`;

export const ContentCheckBox = styled.View`
	/* width: 80%; */
	flex-direction: row;
	align-items: center;

`;

export const BoxCardAccount = styled.View`
	width: 100%;
	flex-direction: row;


`;

export const BtnCreditCard = styled.TouchableOpacity`
	background-color: #CF2945;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 175px;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
`;

export const BtnAccount = styled.TouchableOpacity`
	background-color: #CF2945;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
`;