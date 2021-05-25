import styled, {css} from 'styled-components/native';

interface IsIncomeProps {
	selected: boolean | undefined;
}

export const Container = styled.View<IsIncomeProps>`
	flex: 1;
	width: 100%;
	align-items: center;
	background-color: ${({selected}) => (selected ? '#207868' : '#F44236')};
`;

export const ContentScrollView = styled.ScrollView`
	width: 100%;
	flex: 1;

	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;

	padding: 100px 25px 0px 25px;
	margin-top: 112px;
`;

export const ContainerIcon = styled.View`
	width: 97px;
	height: 50px;
	background: #e8e9ef;
	border-radius: 10px;
	margin-top: 15px;
	justify-content: center;
	align-items: center;
`;
export const ChosenIcon = styled.Text`
	color: #666666;
	font-size: 14px;
	font-family: 'Poppins-Regular';
`;

export const ContainerButton = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;
export const Btn = styled.TouchableOpacity<IsIncomeProps>`
	width: 324px;
	height: 45px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	border-radius: 15px;
	margin-top: 25px;
	background-color: ${({selected}) => (selected ? '#207868' : '#F44236')};
`;

export const TextBtn = styled.Text`
	font-size: 16px;
	margin-left: 10px;
	color: #fff;
	font-family: 'Poppins-Bold';
`;
