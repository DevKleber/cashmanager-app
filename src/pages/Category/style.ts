import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 25px;
`;

export const TextValue = styled.Text`
    font-weight: 200;
    color: #F55E53;
`;

export const ContentScrollView = styled.ScrollView`
    width: 100%;
    margin: 20px 0px;
`;

export const CardInvoice = styled.View`
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 0px 20px;
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
    background-color: #F3F6FB;
    border-radius: 80px;
    margin-right: 10px;
`;

export const ItemContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const ItemTextTitle = styled.Text`
    color: #989898;
    font-family: 'Poppins-Regular';
`;

export const ItemTextDescription = styled.Text`
    font-family: 'Poppins-Bold';
    color: #989898;
`;

export const RowHr = styled.View`
    border-width: 0.5px;
    border-color: #D7D7D7;
    width: 100%;
`;

export const BtnNewCategory = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    justify-content: center;
	align-items: center;
	background-color: #989898;
	border-radius: 50px;
`;