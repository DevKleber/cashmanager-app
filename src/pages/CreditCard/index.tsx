import React, { useEffect, useState } from 'react';
import { Icon } from '../../components/elements/Icon';
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
    BtnNewCard,
    TextAdd
} from './style';
import { Image } from 'react-native';
import { CreditCard } from './services';
import { getCreditCards } from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

export function CreditCardList() {
    const navigate = useNavigation();

    const [creditCard, setCreditCard] = useState<CreditCard[]>([]);

    async function creditCards() {
        const cards = await getCreditCards();
        setCreditCard(cards)
    }

    async function clearAllData() {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    }

    useEffect(() => {
        // clearAllData();
        creditCards();
    }, []);

    return (
        <Container>
            <ContentScrollView>
                {creditCard.map((item: any) => (
                    <Card style={style.boxShadow} key={item}  onPress={() => navigate.navigate('CreditCardDetail')}>
                        <Header>
                        <Image
							source={require('./../../assets/img/card.png')}
						/>
                            <Title>{item.name}</Title>
                        </Header>
                        <Content>
                            <Text>Valor da fatura: <TextValue>R$ {item.total}</TextValue></Text>
                            <Text>Fecha: <TextLighter>{item.closing_day}</TextLighter></Text>
                            <Text>Vencimento: <TextLighter>{item.due_day}</TextLighter></Text>
                        </Content>
                    </Card>
                ))}
                <BtnNewCard style={style.boxShadow} onPress={() => navigate.navigate('CreditCardInsert')}>
                    <Icon name="add-circle"/>
                    <TextAdd>Adicionar novo cartão</TextAdd>
                </BtnNewCard>
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