import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

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
	/* flex: 1; */
	/* width: 100%; */
	align-items: center;
	flex-direction: row;
	height: 100px;
	/* border: 1px solid black; */
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
	border-radius: 10px;
	padding: 15px;
	padding: 30px;
	background-color: #e8e9ef;

	${({selected}) => {
		if (selected === false) {
			return `
			  	background-color: #FFA50020;
				border: 1px solid orange;
			`;
		}

		return `
			background-color: #E8E9EF;
			border: none;
  		`;
	}}
`;

export const BtnOptionIncome = styled.TouchableOpacity<IsIncomeProps>`
	width: 47.5%;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 10px;
	padding: 15px;
	padding: 30px;
	margin-right: 5%;

	${({selected}) => {
		if (selected === true) {
			return `
			  	background-color: #00eb8419;
				border: 1px solid green;
			`;
		}

		return `
			background-color: #E8E9EF;
			border: none;
  		`;
	}}
`;

export const TextBtnNewCard = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
`;
