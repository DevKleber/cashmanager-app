import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #F5F6FC;
	padding: 0px 25px;
`;

export const ContentTotal = styled.View`
    height: 100px;
    align-items: flex-start;
	justify-content: flex-end;
	flex-direction: column;
    background-color: #fff;
	padding: 0px 0px;
	
`;

export const TextTotal = styled.Text`
	font-size: 30px;
	font-weight: bold;
	color: #666666;
`;

export const ContentScrollView = styled.ScrollView`
    width: 100%;
	background-color: #fff;
    padding: 0px 25px;
	border-radius: 15px;
    margin: 20px 0px;
`;

export const Content = styled.View`
    width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
    padding: 0px 0px;
	height: 85px;
`;

export const ContentTitle = styled.View`
    width: 190px;
	flex-direction: row;
	align-items: center;
`;

export const ContentPercent = styled.View`
    width: 85px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #E8E9EF;
	border-radius: 15px;
`;

export const Text = styled.Text`
	font-size: 14px;
	font-weight: bold;
	margin-left: 10px;
    color: #989898;
`;

export const RowHr = styled.View`
    border-width: 0.5px;
    border-color: #D7D7D7;
`;

export const BarPorcent = styled.View`
	width: 100%;
	background-color: #E8E9EF;
	height: 11px;
	border-radius: 4px;
`;

export const ViewPorcent = styled.View`
	flex-direction: row-reverse;
	width: 100%;
`;

export const Porcent = styled.View`
	position: absolute;
	width: 90%;
	background-color: #00eb84;
	height: 11px;
	border-radius: 4px;
`;
export const TextPercent = styled.Text`
	background-color: #E8E9EF;
	padding: 5px;
	font-weight: bold;
	font-size: 18px;
	color: #666666;
`;
export const Input = styled.TextInput`
	width: 40px;
	background-color: #E8E9EF;
	
`;