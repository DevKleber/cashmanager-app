import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save, optionsParcel, optionsIsPaid, getCategories} from '../services';
import { InputText } from '../../../components/elements/Input';
import { AccountProps, getAccounts } from '../../Account/services';
import { Select } from '../../../components/elements/Select';
import { CreditCard, getCreditCards } from '../../CreditCard/services';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Container,
    ContentScrollView,
    TextBtnNewCard,
    BtnNewCard,
    BoxOptions,
    BtnOptionExpense,
    BtnOptionIncome,
    IconTextIncome,
    TextBoldExpense,
    BoxIsPaidOut,
    ContentIcon,
    ContentCheckBox,
    BoxCardAccount,
    BtnCreditCard,
    BtnAccount
} from './style';
import { IconText } from '../../../components/elements/Icon';
import { Platform, StatusBar, Text, View } from 'react-native';

export function TransactionInsert() {
    const navigate = useNavigation();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isIncome, setIsIncome] = useState<boolean>(true);
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

    const [date, setDate] = useState(new Date(new Date().getTime()));
    const [show, setShow] = useState(false);

    const onChange = (event:any, selectedDate:any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showDatepicker = () => {
        setShow(true);
    };

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
        // setIsIncome(true);
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

    function alterBackgroundColor(bgIsIncome: boolean) {
        let color:string = "#E62E4D";
        let title: string = "#fff";

        if (bgIsIncome) {
            title = "#666666";
            color = "#00eb84";
        }

        navigate.setOptions({
            headerShown: true,
			headerStyle: {
				backgroundColor: color, 
				borderColor: color, 
				shadowColor: 'transparent'
			},
			headerTitleStyle: {
				color: title,
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
			},
			headerTintColor: title
        });
        StatusBar.setBackgroundColor(color); 
    }

    useEffect(() => { 
        StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#00eb84');
        listCategories();
        listAccounts();
        creditCards();
    }, []);

    return (
        <Container selected={isIncome}>
                <BoxOptions>
                    <BtnOptionIncome onPress={() => (setIsIncome(true), clearSelecteds(), alterBackgroundColor(true))} selected={isIncome}>
                        <IconTextIncome selected={isIncome}>Entrada</IconTextIncome>
                        <IconText name='arrow-circle-up' color={isIncome ? '#fff' : '#a7e9d1'} size={26}/>
                    </BtnOptionIncome>
                    <BtnOptionExpense onPress={() => (setIsIncome(false), clearSelecteds(), alterBackgroundColor(false))} selected={isIncome}>
                        <TextBoldExpense selected={isIncome}>Saída</TextBoldExpense>
                        <IconText name='arrow-circle-down' color={isIncome !== false ? '#e8d1d9' : '#fff'} size={26}/>
                    </BtnOptionExpense>
                </BoxOptions>
            <ContentScrollView>


                {/* <View>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                </View> */}
                {/* {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )} */}

                <BoxIsPaidOut>
                    <ContentIcon>
                        <IconText name="add-task" />
                        <Text style={{marginLeft: 10}}>Pago</Text>
                    </ContentIcon>
                    <ContentCheckBox>
                        <IconText name="add-task" />
                    </ContentCheckBox>
                </BoxIsPaidOut>
                <BoxCardAccount>
                    <BtnCreditCard>
                        <IconText name="credit-card" color="#fff" />
                        <Text style={{color: '#fff', marginLeft: 5}}>Cartão de credito</Text>
                    </BtnCreditCard>
                    <BtnAccount>
                        <IconText name="account-balance-wallet" color="#fff" />
                        <Text style={{color: '#fff', marginLeft: 5}}>Conta</Text>
                    </BtnAccount>
                </BoxCardAccount>
                
                <InputText
                    icon="account-balance-wallet"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                    backgroundColor="#fff"
                    outline={true}
                />
                <InputText
                    icon="account-balance"
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    autoCorrect={false}
                    keyboardType="numeric"
                    backgroundColor="#fff"
                    outline={true}

                />
                <InputText
                    icon="attach-money"
                    placeholder="Valor"
                    value={value}
                    onChangeText={setValue}
                    autoCorrect={false}
                    keyboardType="numeric"
                    backgroundColor="#fff"
                    outline={true}

                />

                <InputText
                    icon="event"
                    placeholder="Data de pagamento"
                    value={dueDate}
                    onChangeText={setDueDate}
                    autoCorrect={false}
                    backgroundColor="#fff"
                    outline={true}

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