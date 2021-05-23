import styled, { css } from 'styled-components/native';

interface IsIncomeProps {
	selected: boolean | undefined;
	colorBg?: string
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
	margin-bottom: 70px;
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
	;

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
	margin-bottom: 20px;

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

export const BoxDate = styled.View`
	width: 100%;
	flex-direction: row;
	margin-bottom: 10px;


`;

export const BtnYesterday = styled.TouchableOpacity<IsIncomeProps>`
	background-color: ${({selected, colorBg})=>(selected ? colorBg : '#fff')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 91px;
	border-radius: 50px;
	height: 33px;
	margin-right: 10px;
`;

export const BtnToday = styled.TouchableOpacity<IsIncomeProps>`
	background-color: ${({selected, colorBg})=>(selected ? colorBg : '#fff')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
	width: 70px;
`;

export const BtnInform = styled.TouchableOpacity<IsIncomeProps>`
	background-color: ${({selected, colorBg})=>(selected ? colorBg : '#fff')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
`;

export const BoxCardAccount = styled.View`
	width: 100%;
	flex-direction: row;
	margin-bottom: 15px;


`;

export const BtnCreditCard = styled.TouchableOpacity<IsIncomeProps>`
	background-color: ${({selected, colorBg})=>(!selected ? colorBg : '#E8E9EE')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 175px;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
`;

export const BtnAccount = styled.TouchableOpacity<IsIncomeProps>`
	background-color: ${({selected, colorBg})=>(selected ? colorBg : '#E8E9EE')};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-radius: 50px;
	height: 33px;
	margin-right: 6px;
`;

export const BoxPorcent = styled.View`
	width: 100%;
	height: 11px;
	background-color: #E8E9EE;
	border-radius: 4px;
	margin-bottom: 3px;

	
`;

export const BoxPorcentText = styled.View`
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Porcent = styled.View<IsIncomeProps>`
	width: 80%;
	height: 11px;
	background-color: ${({selected}) => (selected ? '#00d377' : '#E62E4D' )};
	border-radius: 4px;
`;
export const TextPorcent = styled.Text`
`;

export const CheckBox = styled.View<IsIncomeProps>`
	width: 71px;
	border-radius: 16px;
	height: 26px;
	background-color: ${({selected}) => (selected ? '#00d377' : '#E62E4D')};
	justify-content: center;
	padding: 0px 1px ;
`;

export const Check = styled.TouchableOpacity`
	width: 24px;
	height: 24px;
	border-radius: 12px;
	background-color: #fff;
`;