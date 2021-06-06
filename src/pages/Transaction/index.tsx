import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { format } from 'date-fns';

import { IconText } from '../../components/elements/Icon';
import { getMonths } from '../Account/services';
import { Text, ViewMesage } from '../CreditCard/CreditCardDetail/style';
import { Sammary } from '../Dashboard/Sammary';
import { Month, getTransactions } from './services';
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
	BoxSammary,
	BtnMonth,
} from './style';
import { TransactionProps } from './types';

export function TransactionList(): JSX.Element {
	const navigate = useNavigation();

	const [months, setMonths] = useState<Month[]>(getMonths());
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);
	const [sammary, setSammary] = useState<any>({});

	function formatDate(date: any) {
		return format(new Date(date), 'dd/MM');
	}

	async function alterMonth(monthToChange: number) {
		return setMonth(monthToChange);
	}

	useEffect(() => {
		// Como usar useEffect => https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies

		function calcSammary(dados: TransactionProps[]) {
			let totalIncome = 0;
			let totalExpense = 0;

			dados.forEach(item => {
				if (item.is_income) {
					totalIncome += Number(item?.value);
				} else {
					totalExpense += Number(item?.value);
				}
			});

			const itemSammary = {
				income: String(totalIncome.toFixed(2)),
				expense: String(totalExpense.toFixed(2)),
				total: totalExpense + totalIncome,
			};

			setSammary(itemSammary);
		}

		async function setCurrentMonth() {
			if (month === 0) {
				const date = new Date();
				setMonth(date.getMonth());
			}
		}
		async function listTransactions() {
			const dados = await getTransactions(month);
			calcSammary(dados);
			setTransactions(dados);
		}

		async function loadData() {
			setCurrentMonth();
			listTransactions();
		}

		loadData();

		return navigate.addListener('focus', () => loadData());
	}, [month, navigate]);
	return (
		<Container>
			<HeaderDate>
				<BtnMonth
					onPress={() => {
						alterMonth(month > 0 ? month - 1 : 0);
					}}>
					<IconText name="navigate-before" size={20} />
				</BtnMonth>
				<TextHeaderDate>{months[month].month}</TextHeaderDate>
				<BtnMonth
					onPress={() => {
						alterMonth(month < 11 ? month + 1 : 11);
					}}>
					<IconText name="navigate-next" size={20} />
				</BtnMonth>
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
						value: sammary.income - sammary.expense,
					}}
					isTransaction
				/>
			</BoxSammary>
			<ContentScrollView>
				<CardInvoice>
					{transactions?.map((item: TransactionProps, index: number) => (
						<View key={item.id} style={{ paddingLeft: 20, paddingRight: 20 }}>
							<ItemList>
								<ItemIcon>
									<IconText name={item.icon} />
								</ItemIcon>
								<ItemContent>
									<ItemTextTitle>
										{item.name_parent}
										{' -> '}
										{item.name_category}
									</ItemTextTitle>
									<ItemTextDescription>{item.name}</ItemTextDescription>
								</ItemContent>
								<ItemPrice>
									<TextPrePrice isIncome={item.is_income}>R$</TextPrePrice>
									<TextItemPrice isIncome={item.is_income}>{item.value}</TextItemPrice>
									<DatePrice>{formatDate(item.due_date)}</DatePrice>
								</ItemPrice>
							</ItemList>
							{transactions.length > index + 1 ? <RowHr /> : null}
						</View>
					))}
					{transactions?.length === 0 ? (
						<ViewMesage>
							<Text>Não possui movimentações</Text>
						</ViewMesage>
					) : null}
				</CardInvoice>
			</ContentScrollView>
		</Container>
	);
}
