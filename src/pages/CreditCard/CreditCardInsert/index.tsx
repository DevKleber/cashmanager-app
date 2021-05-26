import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save } from '../services';
import { InputText } from '../../../components/elements/Input';
import { 
    Container,
    ContentScrollView,
    TextBtnNewCard,
    BtnNewCard
} from './style';
import { StatusBar } from 'react-native';

export function CreditCardInsert() {
    const navigate = useNavigation();

    const [name, setName] = useState<string>('');
    const [dueDay, setDueDay] = useState<string>('');
    const [closingDay, setClosingDay] = useState<string>('');

    async function saveCreditCard() {
        const dados = await save({name, due_day: dueDay, closing_day: closingDay});
        navigate.navigate('CreditCardList')
    }

    useEffect(() => {}, []);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#009788" />
            <ContentScrollView>
                <InputText
                    icon="credit-card"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                    backgroundColor="#E8E9EF"
                />
                <InputText
                    icon="event"
                    placeholder="Dia do vencimento"
                    value={dueDay}
                    onChangeText={setDueDay}
                    autoCorrect={false}
                    keyboardType="numeric"
                    backgroundColor="#E8E9EF"
                />
                <InputText
                    icon="event"
                    placeholder="Dia do fechamento"
                    value={closingDay}
                    onChangeText={setClosingDay}
                    autoCorrect={false}
                    keyboardType="numeric"
                    backgroundColor="#E8E9EF"

                />
                <BtnNewCard onPress={saveCreditCard}>
                    <TextBtnNewCard>Criar</TextBtnNewCard>
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