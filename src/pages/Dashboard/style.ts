import styled from 'styled-components/native';

interface CardProps {
	background: string;
}

export const Wrapper = styled.SafeAreaView`
	flex: 1;
`;

export const Container = styled.ScrollView`
	background: #f0f2f5;
`;
export const Months = styled.View`
	height: 40px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	font-size: 16px;
`;
export const Button = styled.TouchableOpacity``;
export const MonthLabel = styled.Text`
	padding: 0 25px;
	font-family: 'Poppins-Regular';
`;

//Summary

export const Summary = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		alignItems: 'center',
		paddingLeft: 25,
	},
}))`
	height: 143px;
	margin-top: 30px;
`;

export const Card = styled.View<CardProps>`
	width: 289px;
	height: 141px;
	background: ${props => props.background};
	border-radius: 15px;
	margin-right: 25px;
`;

export const Header = styled.View`
	flex-direction: row;
	padding: 15px 25px;
	justify-content: space-between;
`;
export const Name = styled.Text`
	color: #fff;
	font-family: 'Poppins-Bold';
	font-size: 16px;
`;
export const Content = styled.View`
	justify-content: center;
	align-items: flex-end;
	padding: 15px 25px;
`;
export const Value = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: 32px;
	color: #fff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
