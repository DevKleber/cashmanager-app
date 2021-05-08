import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #F5F6FC;
`;

export const HeaderDate = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    flex-direction: row;
`;

export const TextHeaderDate = styled.Text`
    margin: 0px 20px;
    color:#666666;
`;

export const Card = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
`;



export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
`;

export const TextValue = styled.Text`
    font-weight: 200;
    color: #F55E53;
`;

export const TextLighter = styled.Text`
    color: #666666;
    font-weight: 200;
`;

export const Text = styled.Text`
    color: #666666;
    font-weight: bold;
`;

export const Title = styled.Text`
    display: flex;
    margin-left: 10px;
    font-size: 16px;
    color: #666666;
    font-weight: bold;
`;

export const ContentScrollView = styled.ScrollView`
    width: 100%;
    display: flex;
    flex: 1;
    padding: 0px 25px;
    margin-top: 20px;
`;

export const CardInvoice = styled.View`
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    padding: 25px 15px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
`;

export const ItemList = styled.View`
    display: flex;
    flex-direction: row;
`;

export const ItemIcon = styled.View`
    width: 50px;
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
`;

export const ItemContent = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid black; */
`;

export const ItemPrice = styled.View`
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
`;

export const ItemTextTitle = styled.Text`
    color: #989898;
`;

export const ItemTextDescription = styled.Text`
    font-weight: bold;
    color: #989898;
`;