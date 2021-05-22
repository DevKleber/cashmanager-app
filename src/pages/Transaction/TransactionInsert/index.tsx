import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save, optionsParcel, optionsIsPaid, getCategories} from '../services';
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
    IconTextIncome,
    TextBoldExpense
} from './style';
import { IconText } from '../../../components/elements/Icon';

export function TransactionInsert() {
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

    async function listAccounts() {
        const accountsItems = await getAccounts();
        setAccounts(accountsItems)
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

    async function listCategories() {
        const categoriesItems = await getCategories();
        setCategories(categoriesItems)
    }

    async function creditCards() {
        const cards = await getCreditCards();
        setCreditCard(cards)
    }
    function clearSelecteds() {
        setIsPaid(false);
    }

    useEffect(() => { 
        listCategories();
        listAccounts();
        creditCards();
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
                <InputText
                    icon="account-balance"
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    autoCorrect={false}
                    keyboardType="numeric"

                />
                <InputText
                    icon="attach-money"
                    placeholder="Valor"
                    value={value}
                    onChangeText={setValue}
                    autoCorrect={false}
                    keyboardType="numeric"

                />

                <InputText
                    icon="event"
                    placeholder="Data de pagamento"
                    value={dueDate}
                    onChangeText={setDueDate}
                    autoCorrect={false}

                />
                <Select 
                     icon="account-balance-wallet"
                     onChange={setIdAccount}
                     options={accounts}
                     fields={{label: 'description', value: 'id'}}
                     placeholder='Selecionar conta'
                />

                {isIncome === false ? <Select 
                     icon="credit-card"
                     onChange={setIdCreditCard}
                     options={creditCard}
                     fields={{label: 'name', value: 'id'}}
                     placeholder='Selecionar cartão'
                /> : null}

               <Select 
                     icon="point-of-sale"
                     onChange={setIsPaid}
                     options={optionsIsPaid}
                     fields={{label: 'label', value: 'value'}}
                     placeholder='Status do pagamento'
                />

                
                <Select 
                     icon="repeat"
                     onChange={setInstallment}
                     options={optionsParcel}
                     fields={{label: 'label', value: 'value'}}
                     placeholder='Repetir transação'
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