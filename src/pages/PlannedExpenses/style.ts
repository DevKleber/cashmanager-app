import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background-color: #2C88D9;
`;

export const ContentTotal = styled.View`
	padding: 20px;
	background-color: #fff;
	border-radius: 15px;
`;

export const CategoriesView = styled.View``;

export const ViewContent = styled.View`
	width: 100%;
	flex: 1;
	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
	margin-top: 25px ;
`;

export const TextTotal = styled.Text`
	font-size: 30px;
	font-family: 'Poppins-Bold';
	color: #666666;
`;

export const ContentScrollView = styled.ScrollView`
	background-color: #fff;
	border-top-left-radius: 45px;
	border-top-right-radius: 45px;
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
	background-color: #e8e9ef;
	border-radius: 15px;
`;

export const Text = styled.Text`
	font-size: 14px;
	font-family: 'Poppins-Bold';
	margin-left: 10px;
	color: #989898;
`;

export const RowHr = styled.View`
	border-width: 0.5px;
	border-color: #d7d7d7;
`;

export const BarPorcent = styled.View`
	width: 100%;
	background-color: #e8e9ef;
	height: 11px;
	border-radius: 4px;
	margin-bottom: 30px;
`;

export const ViewPorcent = styled.View`
	position: absolute;
	width: 100px;
	bottom: 5px;
	justify-content: center;
`;

export const Porcent = styled.View`
	position: absolute;
	width: 90%;
	background-color: #2C88D9;
	height: 11px;
	border-radius: 4px;
`;

export const TextPercent = styled.Text`
	background-color: #e8e9ef;
	padding: 5px;
	font-family: 'Poppins-Bold';
	font-size: 18px;
	color: #666666;
`;
export const Input = styled.TextInput`
	width: 40px;
	background-color: #e8e9ef;
`;
