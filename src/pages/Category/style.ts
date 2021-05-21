import styled from 'styled-components/native';


interface TextPriceProps {
    isIncome: boolean;
}

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #f0f2f5;
`;

// export const HeaderDate = styled.View`
//     align-items: center;
//     justify-content: center;
//     height: 40px;
//     flex-direction: row;
// `;

// export const TextHeaderDate = styled.Text`
//     margin: 0px 20px;
//     font-family: 'Poppins-Regular';
//     color:#666666;
// `;

export const TextValue = styled.Text`
    font-weight: 200;
    color: #F55E53;
`;


export const ContentScrollView = styled.ScrollView`
    width: 100%;
    margin: 20px 0px;
`;

// export const BoxSammary = styled.View`
//     flex-direction: row;
// `;

export const CardInvoice = styled.View`
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
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

// export const ItemPrice = styled.View`
//     width: 65px;
//     align-items: center;
//     justify-content: center;
// `;

// export const TextItemPrice = styled.Text<TextPriceProps>`
//     align-items: center;
//     justify-content: center;
//     font-family: 'Poppins-Bold';
//     color: ${({isIncome}) =>(isIncome ? '#00EB84' : '#989898')};
// `;

// export const TextPrePrice = styled.Text<TextPriceProps>`
//     font-family: 'Poppins-Bold';
//     align-items: center;
//     justify-content: center;
//     color: ${({isIncome}) =>(isIncome ? '#00EB84' : '#989898')};
// `;

export const ItemTextTitle = styled.Text`
    color: #989898;
    font-family: 'Poppins-Regular';
`;

export const ItemTextDescription = styled.Text`
    font-family: 'Poppins-Bold';
    color: #989898;
`;

// export const DatePrice = styled.Text`
//     font-size: 10px;
//     color: #989898;
//     font-family: 'Poppins-Regular';
// `;

export const RowHr = styled.View`
    border-width: 0.5px;
    border-color: #D7D7D7;
    width: 100%;
`;

export const BtnNewCategory = styled.TouchableOpacity`
	align-items: center;
    justify-content: center;
`;