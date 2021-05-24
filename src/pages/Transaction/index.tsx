import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { IconText } from '../../components/elements/Icon';
import { format } from 'date-fns'
import { TransactionProps, Month, getTransactions, getMonths } from './services';
import { useRoute } from '@react-navigation/core';
import { Sammary } from '../Dashboard/Sammary';
import { 
    Container,
    ContentScrollView,
    HeaderDate,
    TextHeaderDate,
    CardInvoice,
    ItemList,
    ItemIcon,
    ItemContent,
    ItemPrice,
    ItemTextTitle,
    TextItemPrice,
    TextPrePrice,
    DatePrice,
    ItemTextDescription,
    RowHr,
    BoxSammary
} from './style';

export function TransactionList() {
    const [months, setMonths] = useState<Month[]>(getMonths());
    const [month, setMonth] = useState<number>(0);
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    const [sammary, setSammary] = useState<any>({});
    
    const router = useRoute();

    async function listTransactions() {
        const dados = await getTransactions(month);
        calcSammary(dados);
        setTransactions(dados);
    }

    function formatDate(date: any) {
        return format(new Date(date), 'dd/MM')
    }

    async function setCurrentMonth() {
        const date = new Date();

        setMonth(date.getMonth());
    }

    async function alterMonth(month: number) {
        return setMonth(month);
    }

    function calcSammary(dados: any[]) {
        let totalIncome: number = 0;
        let totalExpense: number = 0;

        for (let item of dados) {
            console.log(item);
            if (item.is_income) {
                totalIncome += parseFloat(item.value);
            } else {
                totalExpense += parseFloat(item.value);
            }
        }

        const itemSammary = {
            income:  String(totalIncome),
            expense: String(totalExpense),
            total: (totalExpense + totalIncome)
        }

        setSammary(itemSammary);
    }

    useEffect(() => {
        setCurrentMonth();
        listTransactions();
    }, []);
    return (
        <Container>
             <HeaderDate>
                <IconText name="navigate-before" size={20} onPress={() => {alterMonth(month > 0 ? month - 1 : 0).then(() => listTransactions())}} />
                <TextHeaderDate>{months[month].month}</TextHeaderDate>
                <IconText name="navigate-next" size={20} onPress={() => {alterMonth(month < 11 ? month + 1 : 11).then(() => listTransactions())}}/>
            </HeaderDate>
            <BoxSammary>
                <Sammary
                    fisrtCard={{
						title: 'Entradas',
						value: Number(sammary.income),
					}}
					middleCard={{
						title: 'Saidas',
						value: Number(sammary.expense),
					}}
					lastCard={{
						title: 'Total',
						value: sammary.total,
					}}
                    isTransaction={true}
                />
            </BoxSammary>
            <ContentScrollView>
                    <CardInvoice style={style.boxShadowInvoice}>
                        {transactions?.map((item: any, index: number) =>(
                            <View key={index} style={{paddingLeft: 20, paddingRight: 20}}>
                                <ItemList >
                                    <ItemIcon>
                                        <IconText name={item.icon}/>
                                    </ItemIcon>
                                    <ItemContent>
                                        <ItemTextTitle>{item.name}</ItemTextTitle>
                                        <ItemTextDescription>{item.description}</ItemTextDescription>
                                    </ItemContent>
                                    <ItemPrice>
                                        <TextPrePrice isIncome={item.is_income}>R$</TextPrePrice>
                                        <TextItemPrice isIncome={item.is_income}>{item.value}</TextItemPrice>
                                        <DatePrice>{formatDate(item.created_at)}</DatePrice>
                                    </ItemPrice>
                                </ItemList>
                                {transactions.length > index + 1 ? <RowHr/> : null}
                            </View>
                        ))}
                    </CardInvoice>
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