import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { getAccountById, update } from '../services';
import { InputText } from '../../../components/elements/Input';
import { 
    Container,
    ContentScrollView,
    TextBtnNewCard,
    BtnNewCard
} from './style';

export function AccountUpdate() {
    const navigate = useNavigation();
    const router = useRoute();

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [dueDay, setDueDay] = useState<string>('');
    const [closingDay, setClosingDay] = useState<string>('');

    async function updateAccount() {
        const dados = await update({name, due_day: dueDay, closing_day: closingDay, id});
        navigate.navigate('AccountList')
    }

    async function getAccount() {
        const { id }: any = router.params;
        const dados = await getAccountById(id);
        setName(dados.name)
        setDueDay(dados.due_day)
        setClosingDay(dados.closing_day)
        setId(dados.id)
    }

    useEffect(() => {
        getAccount()
    }, []);

    return (
        <Container>
            <ContentScrollView>
            <InputText
                icon="credit-card"
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                autoCorrect={false}
            />
            <InputText
                icon="event"
                placeholder="Dia do vencimento"
                value={dueDay}
                onChangeText={setDueDay}
                autoCorrect={false}
                keyboardType="numeric"

            />
            <InputText
                icon="event"
                placeholder="Dia do fechamento"
                value={closingDay}
                onChangeText={setClosingDay}
                autoCorrect={false}
                keyboardType="numeric"

            />
            <BtnNewCard onPress={updateAccount}>
                <TextBtnNewCard>Alterar</TextBtnNewCard>
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