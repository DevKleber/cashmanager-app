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
    const [description, setDescription] = useState<string>('');
    const [banking, setBanking] = useState<number>(0);
    const [currentBalance, setCurrentBalance] = useState<string>('');

    async function updateAccount() {
        const dados = await update({description, banking, current_balance: currentBalance, id});
        navigate.navigate('AccountList')
    }

    async function getAccount() {
        const { id }: any = router.params;
        const dados = await getAccountById(id);
        console.log(dados);
        setDescription(dados.description)
        setBanking(dados.banking)
        setCurrentBalance(dados.current_balance)
        setId(dados.id)
    }

    useEffect(() => {
        getAccount()
    }, []);

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