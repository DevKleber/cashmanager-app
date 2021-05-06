import React, { useState } from 'react';
import { Icon } from '../../elements/Icon';
import Logo from './../../../assets/img/masterCard.svg';
import { 
    Content, 
    Title, 
    Header, 
    Text, 
    TextValue, 
    TextLighter,
    Card,
    HeaderDate,
    TextHeaderDate,
    Container,
} from './style';

export function CreditCard() {

    return (
        <Container>
            <HeaderDate>
                <Icon name={"arrow-left"} size={18} color={'#666666'}/>
                <TextHeaderDate>{"Abril"}</TextHeaderDate>
                <Icon name={"arrow-right"} size={18} color={'#666666'}/>
            </HeaderDate>
            <Card style={style.boxShadow}>
                <Header>
                    {/* <Icon name={"exit-to-app"} size={18}/> */}
                    <Logo />
                    <Title>Nubanck</Title>
                </Header>
                <Content>
                    <Text>Valor da fatura: <TextValue>R$ 365,25</TextValue></Text>
                    <Text>Fecha: <TextLighter>10</TextLighter></Text>
                    <Text>Vencimento: <TextLighter>15</TextLighter></Text>

                </Content>
            </Card>
            <Card style={style.boxShadow}>
                <Header>
                    {/* <Icon name={"exit-to-app"} size={18}/> */}
                    <Logo />
                    <Title>Nubanck</Title>
                </Header>
                <Content>
                    <Text>Valor da fatura: <TextValue>R$ 365,25</TextValue></Text>
                    <Text>Fecha: <TextLighter>10</TextLighter></Text>
                    <Text>Vencimento: <TextLighter>15</TextLighter></Text>

                </Content>
            </Card>
            
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

        elevation: 24,
    }
}