import React, {useEffect, useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {IconText} from '../../components/elements/Icon';
import {format} from 'date-fns';
import {TransactionProps, Month, getTransactions} from './services';
import {useNavigation} from '@react-navigation/core';
import {Sammary} from '../Dashboard/Sammary';
import {Text, ViewMesage} from '../CreditCard/CreditCardDetail/style';
import {getMonths} from '../Account/services';
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

export function TransactionList() {
	const navigate = useNavigation();
	const [months, setMonths] = useState<Month[]>(getMonths());
	const [month, setMonth] = useState<number>(0);
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);
	const [sammary, setSammary] = useState<any>({});
	const [refreshing, setRefreshing] = useState<boolean>(false);

	async function listTransactions() {
		const dados = await getTransactions(month);
		calcSammary(dados);
		setTransactions(dados);
	}

	function formatDate(date: any) {
		return format(new Date(date), 'dd/MM');
	}

	async function setCurrentMonth() {
		if (month == 0) {
			const date = new Date();
			setMonth(date.getMonth());
		}
	}

	async function alterMonth(month: number) {
		return setMonth(month);
	}

	function calcSammary(dados: any[]) {
		let totalIncome: number = 0;
		let totalExpense: number = 0;

		for (let item of dados) {
			if (item.is_income) {
				totalIncome += parseFloat(item?.value);
			} else {
				totalExpense += parseFloat(item?.value);
			}
		}

		const itemSammary = {
			income: String(totalIncome.toFixed(2)),
			expense: String(totalExpense.toFixed(2)),
			total: totalExpense + totalIncome,
		};

		setSammary(itemSammary);
	}

	const wait = (timeout: number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	function loadData() {
		setCurrentMonth();
		listTransactions();
	}

	useEffect(() => {
		loadData();

		return navigate.addListener('focus', () => loadData());
	}, [refreshing, month]);
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
					isTransaction={true}
				/>
			</BoxSammary>
			<ContentScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}>
				<CardInvoice>
					{transactions?.map((item: any, index: number) => (
						<View
							key={index}
							style={{paddingLeft: 20, paddingRight: 20}}>
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
									<ItemTextDescription>
										{item.name}
									</ItemTextDescription>
								</ItemContent>
								<ItemPrice>
									<TextPrePrice isIncome={item.is_income}>
										R$
									</TextPrePrice>
									<TextItemPrice isIncome={item.is_income}>
										{item.value}
									</TextItemPrice>
									<DatePrice>
										{formatDate(item.due_date)}
									</DatePrice>
								</ItemPrice>
							</ItemList>
							{transactions.length > index + 1 ? <RowHr /> : null}
						</View>
					))}
					{transactions?.length == 0 ? (
						<ViewMesage>
							<Text>Não possui movimentações</Text>
						</ViewMesage>
					) : null}
				</CardInvoice>
			</ContentScrollView>
		</Container>
	);
}
