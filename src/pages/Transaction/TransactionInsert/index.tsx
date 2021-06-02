import { ActivityIndicator, Platform, RefreshControl, StatusBar, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { save, optionsParcel} from '../services';
import { InputText } from '../../../components/elements/Input';
import { AccountProps, getAccounts } from '../../Account/services';
import { Select } from '../../../components/elements/Select';
import { CreditCard, getCreditCards } from '../../CreditCard/services';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconText } from '../../../components/elements/Icon';
import { getPlannedExpenses } from '../../PlannedExpenses/services';
import { getCategories, getCategoryById } from '../../Category/services';
import NumberFormat from 'react-number-format';
import { getDashboardData } from '../../Dashboard/services';
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
    BtnAccount,
    BoxDate,
    BtnYesterday,
    BtnToday,
    BtnInform,
    BoxPorcent,
    Porcent,
    TextPorcent,
    BoxPorcentText,
    CheckBox,
    Check,
    ViewContainer,
    BoxInstallment
} from './style';

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
    const [isAccount, setIsAccount] = useState<boolean>(false);
    const [whatDate, setWhatDate] = useState<string>("today");
    const [colorBG, setColorBG] = useState<string>('#00d377');
	const [refreshing, setRefreshing] = useState<boolean>(false);
    
    const [date, setDate] = useState(new Date(new Date().getTime()));
    const [show, setShow] = useState(false);
	const [loader, setLoader] = useState<boolean>(false);
    const [valuePercent, setValuePercent] = useState<number>(0);
    

    const onChange = (event:any, selectedDate:any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showDatepicker = () => {
        setShow(true);
    };

    function setDateToday() {
        setDate(new Date(new Date().getTime()));
    }

    function setDateYesterday() {
        const today = new Date();
        const yesterday = new Date(today.getTime());
        yesterday.setDate(today.getDate() - 1);
        setDate(yesterday);
    }

    async function saveAccount() {
        setLoader(true);
        const dados = await save({ 
            description,
            value,
            name,
            installment,
            is_income: isIncome,
            due_date: date, 
            id_account: idAccount, 
            id_creditcard: idCreditCard, 
            is_paid: isPaid, 
            id_category: idCategory 
        });
        if (!dados) {
			setLoader(false);
            return;
        }
        clearForm().then(() => 
            navigate.navigate('transacoes')
        );
    }

    async function listAccounts() {
        const accountsItems = await getAccounts();
        setAccounts(accountsItems)
    }

    async function clearForm() {
        setLoader(false);
        setDescription('');
        setValue('');
        setName('');
        setInstallment('');
        setDueDate('');
        setIdAccount('');
        setIdCreditCard('');
        setIsPaid('');
        setIdCategory('');
    }

    async function listCategories(type: boolean) {
        const categoriesItems = await getCategories();

        if (type) {
            setCategories(categoriesItems.income);
        } else {
            setCategories(categoriesItems.outcome);
        }
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
        let colorBg:string  = "#cf2945";

        if (bgIsIncome) {
            title = "#666666";
            color = "#00EB84";
            colorBg = "#00d377";
        }

        setColorBG(colorBg);

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


    async function getPlannedExpensesItem(planejamento: any[], category: any) {
        console.log("category", category);
        if (planejamento.length > 0) {
            const planned = planejamento.filter((elem: any) => {
                return elem.id_category == category.id_category_parent;
            })[0];

            const total = planned?.total;
            const income = planned?.income;
    
            let value = (parseFloat(total ?? 0) * 100) / parseFloat(income ?? 0);

            value = isNaN(value) ? 0 : value;

            setValuePercent(Number(value.toFixed(2)) ?? 0)
            return;
        }

        setValuePercent(0)
    }

    async function handleCategory(item: any) {
        setIdCategory(item);
        if (item && !isIncome) {
            const dashboard = await getDashboardData();
            const category = await getCategoryById(item);

            await getPlannedExpensesItem(dashboard?.planejamento, category);
        } else {
            setValuePercent(0);
        }
    }

    const wait = (timeout:number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
        loadData(false);
		wait(2000).then(() => setRefreshing(false));
	}, []);

    function loadData(alterBackGround = true) {
        clearForm();
        setIdCategory('');
        setValuePercent(0);
        if (alterBackGround) {
            alterBackgroundColor(isIncome)
        }
        listCategories(isIncome);
        listAccounts();
        creditCards();
    }

    useEffect(() => {
        return navigate.addListener('focus', () => loadData());
    }, [refreshing]);

    return (
        <Container selected={isIncome}>
            <BoxOptions>
                <BtnOptionIncome onPress={() => (setIsIncome(true), clearSelecteds(), alterBackgroundColor(true), listCategories(true))} selected={isIncome}>
                    <IconTextIncome selected={isIncome}>Entrada</IconTextIncome>
                    <IconText name='arrow-circle-up' color={isIncome ? '#fff' : '#a7e9d1'} size={26}/>
                </BtnOptionIncome>
                <BtnOptionExpense onPress={() => (setIsIncome(false), clearSelecteds(), alterBackgroundColor(false), listCategories(false))} selected={isIncome}>
                    <TextBoldExpense selected={isIncome}>Saída</TextBoldExpense>
                    <IconText name='arrow-circle-down' color={isIncome !== false ? '#e8d1d9' : '#fff'} size={26}/>
                </BtnOptionExpense>
            </BoxOptions>
            <ViewContainer style={{width: '100%', paddingTop: 50}}>
                <ContentScrollView
                    refreshControl={
						<RefreshControl
						  refreshing={refreshing}
						  onRefresh={onRefresh}
						/>
					  }
                >

                    <BoxIsPaidOut>
                        <ContentIcon>
                            <IconText name="add-task" />
                            <Text style={{marginLeft: 10}}>Pago</Text>
                        </ContentIcon>
                        <ContentCheckBox >
                            <CheckBox selected={isIncome} style={{ backgroundColor:  isPaid ? colorBG :  "#ddd" }}>
                                <Check style={{marginLeft: isPaid ? 44 : 0}} onPress={() => setIsPaid(!isPaid)}></Check>
                            </CheckBox>
                        </ContentCheckBox>
                    </BoxIsPaidOut>

                    {!isIncome ? 
                        <BoxCardAccount>
                            <BtnCreditCard selected={isAccount} colorBg={colorBG} onPress={() => setIsAccount(false)}>
                                <IconText name="credit-card" color={ !isAccount ? '#fff' : '#666360'} />
                                <Text style={{color: !isAccount ? '#fff' : '#666360', marginLeft: 5}}>Cartão de credito</Text>
                            </BtnCreditCard>
                            <BtnAccount selected={isAccount} colorBg={colorBG} onPress={() => (setIsAccount(true))}>
                                <IconText name="account-balance-wallet" color={ isAccount ? '#fff' : '#666360'}/>
                                <Text style={{color:  isAccount ? '#fff' : '#666360', marginLeft: 5}}>Conta</Text>
                            </BtnAccount>
                        </BoxCardAccount> : null}


                    { isIncome || (!isIncome && isAccount) ? <Select 
                        icon="account-balance-wallet"
                        onChange={setIdAccount}
                        options={accounts}
                        fields={{label: 'description', value: 'id'}}
                        placeholder='Selecionar conta'
                    /> : null}

                    {!isIncome && !isAccount ? <Select 
                        icon="credit-card"
                        onChange={setIdCreditCard}
                        options={creditCard}
                        fields={{label: 'name', value: 'id'}}
                        placeholder='Selecionar cartão'
                    /> : null}

                    <InputText
                        icon="account-balance-wallet"
                        placeholder={isIncome ? "Entrada" : "Despesa"}
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
                        backgroundColor="#fff"
                        outline={true}
                    />
                    <Text  style={{color: '#666360', marginLeft: 10, fontSize: 15, marginBottom: 10}}>{isIncome ? 'Data do recebimento' : 'Data da despesa'}</Text>
                    <BoxDate>
                        <BtnYesterday selected={whatDate === 'yesterday'} colorBg={colorBG} onPress={() => (setWhatDate('yesterday'), setDateYesterday())}>
                            <IconText name="today" color={ whatDate === 'yesterday' ? '#fff' : '#666360'} />
                            <Text style={{color:  whatDate === 'yesterday' ? '#fff' : '#666360', marginLeft: 5}}>Ontem</Text>
                        </BtnYesterday>
                        <BtnToday selected={whatDate === 'today'} colorBg={colorBG} onPress={() => (setWhatDate('today'), setDateToday())}>
                            <IconText name="today" color={ whatDate === 'today' ? '#fff' : '#666360'} />
                            <Text style={{color: whatDate === 'today' ? '#fff' : '#666360', marginLeft: 5}}>Hoje</Text>
                        </BtnToday>
                        <BtnInform selected={whatDate === 'inform'} colorBg={colorBG} onPress={() => (setWhatDate('inform'), showDatepicker())}>
                            <IconText name="insert-invitation" color={ whatDate === 'inform' ? '#fff' : '#666360'}/>
                            <Text style={{color:  whatDate === 'inform'  ? '#fff' : '#666360', marginLeft: 5}}>{whatDate === 'inform' ? date.toLocaleDateString('pt-BR') : "Informar"}</Text>
                        </BtnInform>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                                textColor='#fff'
                                locale="pt-BR"
                            />
                        )}
                    </BoxDate> 
                    <Select 
                        icon="category"
                        onChange={handleCategory}
                        options={categories}
                        fields={{label: 'name', value: 'id'}}
                        placeholder='Selecionar categorias'
                        isTree={true}
                    />
                    {!isIncome && ( 
                        <>
                            <BoxPorcent >
                                <Porcent selected={isIncome} style={{width: valuePercent >= 100 ? '100%' :`${valuePercent}%`}}></Porcent>
                            </BoxPorcent>
                            <BoxPorcentText>
                                <TextPorcent>Planejamento {valuePercent}%</TextPorcent>
                            </BoxPorcentText>
                        </>
                    )}
                    <Select 
                        icon="repeat"
                        onChange={setInstallment}
                        options={optionsParcel}
                        fields={{label: 'label', value: 'value'}}
                        placeholder={isIncome ? 'Repetir' : 'Quantas parcelas'}
                    />

                    <InputText
                        icon="attach-money"
                        placeholder="Valor ex: 10.00"
                        value={value}
                        onChangeText={setValue}
                        autoCorrect={false}
                        keyboardType="numeric"
                        backgroundColor="#fff"
                        outline={true}

                    />
                    <BoxInstallment>
                        {(!isIncome && installment && value) ? 
                        <Text>{`${installment}x de `}
                            <NumberFormat
                                value={(Number(value) / Number(installment))}
                                prefix={'R$ '}
                                displayType={'text'}
                                thousandSeparator="."
                                decimalSeparator=","
                                renderText={value => <Text>{value}</Text>}
                            />
                        </Text> : null}
                    </BoxInstallment>
                    
                    <BtnNewCard onPress={saveAccount} style={{backgroundColor: isIncome ? '#00d377' : '#cf2945'}}>
                        <TextBtnNewCard>Lançar</TextBtnNewCard>
                        {loader && <ActivityIndicator size="small" color="#fff" />}

                    </BtnNewCard>
                </ContentScrollView>
            </ViewContainer>
        </Container>
    )
};