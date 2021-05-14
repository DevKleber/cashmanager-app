import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #F5F6FC;
`;

export const HeaderDate = styled.View`
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
    width: 100%;
    flex-direction: column;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
`;



export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    flex-direction: row;
`;

export const Content = styled.View`
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
    margin: 20px 0px;
`;

export const CardInvoice = styled.View`
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
`;

export const ItemList = styled.View`
    flex-direction: row;
    min-height: 85px;
`;

export const ItemIcon = styled.View`
    width: 50px;
    display: flex;
    justify-content: center;
`;

export const ItemContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const ItemPrice = styled.View`
    width: 65px;
    align-items: center;
    justify-content: center;
`;

export const TextItemPrice = styled.Text`
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #989898;
`;

export const TextPrePrice = styled.Text`
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: #989898;
`;

export const ItemTextTitle = styled.Text`
    color: #989898;
`;

export const ItemTextDescription = styled.Text`
    font-weight: bold;
    color: #989898;
`;

export const DatePrice = styled.Text`
    font-size: 10px;
    color: #989898;
`;

export const RowHr = styled.View`
    border-width: 0.5px;
    border-color: #D7D7D7;
    width: 100%;
    /* margin-left: 5%; */
`;