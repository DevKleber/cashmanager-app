import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Icon } from '../../components/elements/Icon';
// import Logo from './../../../assets/img/masterCard.svg';
import { 
    Content, 
    Title, 
    Header, 
    Text, 
    TextValue, 
    TextLighter,
    Card,
    Container,
    ContentScrollView,
    HeaderDate,
    TextHeaderDate,
    CardInvoice,
    ItemList,
    ItemIcon,
    ItemContent,
    ItemPrice,
    ItemTextTitle,
    ItemTextDescription
} from './style';

export function CreditCardDetail() {
    const [creditCard, setCreditCard] = useState<any[]>([]);

    async function getCreditCards() {
        // const cards = await api.get('/credit-card');
        setCreditCard([1, 2, 7, 3, 4, 5])
    }

    useEffect(() => {
        getCreditCards();
    }, []);
    return (
        <Container>
             <HeaderDate>
                <Icon name={"arrow-left"} size={18} color={'#666666'}/>
                <TextHeaderDate>{"Abril"}</TextHeaderDate>
                <Icon name={"arrow-right"} size={18} color={'#666666'}/>
            </HeaderDate>
            <ContentScrollView>
                    <Card style={style.boxShadow} >
                        <Header>
                            {/* <Logo /> */}
                            <Title>Nubanck</Title>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ 365,25</TextValue></Text>
                            <Text>Fecha: <TextLighter>10</TextLighter></Text>
                            <Text>Vencimento: <TextLighter>15</TextLighter></Text>

                        </Content>
                    </Card>
                    <CardInvoice style={style.boxShadowInvoice}>
                        <ItemList>
                            <ItemIcon>
                            <Icon name={'home'}/>
                            </ItemIcon>
                            <ItemContent>
                                <ItemTextTitle>Vestuário</ItemTextTitle>
                                <ItemTextDescription>Shoptime Mkt Place Limitado</ItemTextDescription>
                            </ItemContent>
                            <ItemPrice>
                                {/* <Logo /> */}
                            </ItemPrice>

                        </ItemList>
                    </CardInvoice>

            </ContentScrollView>
        </Container>
    )
};

const style = {
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },

        elevation: 2,
    },
    boxShadowInvoice: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },

        elevation: 1,
    }
}