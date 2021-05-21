import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { save } from '../services';
import { InputText } from '../../../components/elements/Input';
import { AccountProps, getAccounts } from '../../Account/services';
import { Select } from '../../../components/elements/Select';
import { CreditCard, getCreditCards } from '../../CreditCard/services';
import {
    Container,
    ContentScrollView,
    TextBtnNewCard,
    BtnNewCard,
    BoxOptions,
    BtnOptionExpense,
    BtnOptionIncome,
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
    const [accounts, setAccounts] = useState<AccountProps[]>([]);
    const [creditCard, setCreditCard] = useState<CreditCard[]>([]);
    const [isPaid, setIsPaid] = useState<any>();
    const [installment, setInstallment] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [categories, setCategories] = useState<any[]>([]);
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
                        <Text>Entrada</Text>
                        <IconText name='arrow-downward' color='green'/>
                    </BtnOptionIncome>
                    <BtnOptionExpense onPress={() => setIsIncome(false)} selected={isIncome}>
                        <Text>Saida</Text>
                        <IconText name='arrow-upward' color='orange'/>
                    </BtnOptionExpense>

                </BoxOptions>
                <InputText
                    icon="account-balance-wallet"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                />
                <InputText
                    icon="account-balance"
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    autoCorrect={false}
                    keyboardType="numeric"

                />

                <Select 
                     icon="category"
                     onChange={setIdCategory}
                     options={categories}
                     fields={{label: 'name', value: 'id'}}
                     placeholder='Selecionar categorias'
                     isTree={true}
                />
                
                <BtnNewCard onPress={saveAccount}>
                    <TextBtnNewCard>Lançar</TextBtnNewCard>
                </BtnNewCard>
            </ContentScrollView>
        </Container>
    )
};