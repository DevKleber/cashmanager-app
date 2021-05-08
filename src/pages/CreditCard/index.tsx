import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Icon } from '../../components/elements/Icon';
import Logo from './../../../assets/img/masterCard.svg';
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
} from './style';

export function CreditCard() {
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
            <ContentScrollView>
                {creditCard.map((item: any) => (
                    <Card style={style.boxShadow} key={item}>
                        <Header>
                            <Logo />
                            <Title>Nubanck</Title>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ 365,25</TextValue></Text>
                            <Text>Fecha: <TextLighter>10</TextLighter></Text>
                            <Text>Vencimento: <TextLighter>15</TextLighter></Text>

                        </Content>
                    </Card>
                ))}
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
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 2,
    }
}