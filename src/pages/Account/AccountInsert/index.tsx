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

export function AccountInsert() {
    const navigate = useNavigation();

    const [description, setDescription] = useState<string>('');
    const [banking, setBanking] = useState<string>('');
    const [currentBalance, setCurrentBalance] = useState<string>('');

    async function saveAccount() {
        const dados = await save({description, banking, current_balance: currentBalance}).then(() => {
            navigate.navigate('AccountList')
        });
    }

    useEffect(() => {}, []);

    return (
        <Container>
            <ContentScrollView>
                <InputText
                    icon="account-balance-wallet"
                    placeholder="Nome"
                    value={description}
                    onChangeText={setDescription}
                    autoCorrect={false}
                />
                <InputText
                    icon="account-balance"
                    placeholder="Banco"
                    value={banking}
                    onChangeText={setBanking}
                    autoCorrect={false}
                    keyboardType="numeric"

                />
                <InputText
                    icon="attach-money"
                    placeholder="Valor"
                    value={currentBalance}
                    onChangeText={setCurrentBalance}
                    autoCorrect={false}
                    keyboardType="numeric"

                />
            <BtnNewCard onPress={saveAccount}>
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