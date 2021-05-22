import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save } from '../services';
import { InputText } from '../../../components/elements/Input';
import {
    Container,
    ContentScrollView,
    TextBtnNewCard,
    BtnNewCard,
    BoxOptions,
    BtnOptionExpense,
    BtnOptionIncome,
    IconTextIncome,
    TextBoldExpense
} from './style';
import { IconText } from '../../../components/elements/Icon';

export function CategoryInsert() {
    const navigate = useNavigation();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isIncome, setIsIncome] = useState<boolean>();
    const [value, setValue] = useState<string>('');
    const [idAccount, setIdAccount] = useState<any>({});
    const [idCreditCard, setIdCreditCard] = useState<string>('');
    const [isPaid, setIsPaid] = useState<any>();
    const [installment, setInstallment] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [idCategory, setIdCategory] = useState<string>('');
    
    async function saveAccount() {
        const dados = await save({ 
            description,
            value,
            name,
            installment,
            is_income: isIncome,
            due_date: dueDate, 
            id_account: idAccount, 
            id_creditcard: idCreditCard, 
            is_paid: isPaid, 
            id_category: idCategory 
        }).then(() => {
            clearForm();
            navigate.navigate('transacoes');
        });
    }

    const options:any = [
        {label: 'Entrada', value: true},
        {label: 'Saída', value: false},
    ]

    async function clearForm() {
        setDescription('');
        setValue('');
        setName('');
        setInstallment('');
        setIsIncome(undefined);
        setDueDate('');
        setIdAccount('');
        setIdCreditCard('');
        setIsPaid('');
        setIdCategory('');
    }

  
    function clearSelecteds() {
        setIsPaid(false);
    }

    useEffect(() => { 
    }, []);

    return (
        <Container>
            <ContentScrollView>
                <BoxOptions>
                    <BtnOptionIncome onPress={() => (setIsIncome(true), clearSelecteds())} selected={isIncome}>
                        <IconTextIncome selected={isIncome}>Entrada</IconTextIncome>
                        <IconText name='arrow-circle-up' color={isIncome ? '#fff' : '#00eb84'}/>
                    </BtnOptionIncome>
                    <BtnOptionExpense onPress={() => setIsIncome(false)} selected={isIncome}>
                        <TextBoldExpense selected={isIncome}>Saida</TextBoldExpense>
                        <IconText name='arrow-circle-down' color={isIncome !== false ? '#E62E4D' : '#fff'}/>
                    </BtnOptionExpense>

                </BoxOptions>
                <InputText
                    icon="account-balance-wallet"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                />
                
                <BtnNewCard onPress={saveAccount}>
                    <TextBtnNewCard>Lançar</TextBtnNewCard>
                </BtnNewCard>
            </ContentScrollView>
        </Container>
    )
};