import React, {useEffect, useState} from 'react';
import {IconText} from '../../../components/elements/Icon';
import {format} from 'date-fns';
import {
	Content,
	Title,
	Header,
	Text,
	TextValue,
	Card,
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
} from './style';
import {Image, RefreshControl, StatusBar, View} from 'react-native';
import {getAccountById, AccountProps, Month, getMonths} from '../services';
import {useNavigation, useRoute} from '@react-navigation/core';
import {ViewMesage} from '../../CreditCard/CreditCardDetail/style';
import {BtnMonth} from '../../Transaction/style';

export function AccountDetail() {
	const navigate = useNavigation();
	const [months, setMonths] = useState<Month[]>(getMonths());
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [account, setAccount] = useState<AccountProps>({} as AccountProps);
	const router = useRoute();

	async function getAccounts() {
		const {id}: any = router.params;
		const dados = await getAccountById(id, month);
		setAccount(dados);
	}

	function formatDate(date: any) {
		return format(new Date(date), 'dd/MM');
	}

	async function setCurrentMonth() {
		if (month === 0) {
			const date = new Date();
			setMonth(date.getMonth());
		}
	}

	async function alterMonth(month: number) {
		return setMonth(month);
	}

	const wait = (timeout: number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	function loadData() {
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor('#F7C325');
		setCurrentMonth();
		getAccounts();
	}

	useEffect(() => {
		return navigate.addListener('focus', () => loadData());
	}, [refreshing, month]);
	return (
		<Container>
			<HeaderDate>
				<BtnMonth
					onPress={() => {
						alterMonth(month > 0 ? month - 1 : 0);
					}}>
					<IconText
						name="navigate-before"
						size={25}
						color="#666666"
					/>
				</BtnMonth>
				<TextHeaderDate>{months[month].month}</TextHeaderDate>
				<BtnMonth
					onPress={() => {
						alterMonth(month < 11 ? month + 1 : 11);
					}}>
					<IconText name="navigate-next" size={25} color="#666666" />
				</BtnMonth>
			</HeaderDate>
			<ContentScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}>
				<Card style={style.boxShadow}>
					<Header>
						<Image
							style={{width: 30, height: 30}}
							source={require('./../../../assets/img/purse.png')}
						/>
						<Title>{account.description}</Title>
					</Header>
					<Content>
						<Text>
							Saldo:
							<TextValue> R$ {account.current_balance}</TextValue>
						</Text>
					</Content>
				</Card>
				<CardInvoice>
					{account.items?.map((item: any, index: number) => (
						<View
							key={index}
							style={{paddingLeft: 20, paddingRight: 20}}>
							<ItemList>
								<ItemIcon>
									<IconText
										name={
											item.is_income
												? 'arrow-downward'
												: 'arrow-upward'
										}
										color={
											item.is_income
												? '#02cc74'
												: '#F55E53'
										}
									/>
								</ItemIcon>
								<ItemContent>
									<ItemTextTitle>{item.name}</ItemTextTitle>
									<ItemTextDescription>
										{item.description}
									</ItemTextDescription>
								</ItemContent>
								<ItemPrice>
									<TextPrePrice>R$</TextPrePrice>
									<TextItemPrice>{item.value}</TextItemPrice>
									<DatePrice>
										{formatDate(item.created_at)}
									</DatePrice>
								</ItemPrice>
							</ItemList>
							{account.items.length > index + 1 ? (
								<RowHr />
							) : null}
						</View>
					))}

					{account.items?.length == 0 ? (
						<ViewMesage>
							<Text>Essa conta não possui movimentações</Text>
						</ViewMesage>
					) : null}
				</CardInvoice>
			</ContentScrollView>
		</Container>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},

		elevation: 2,
	},
	boxShadowInvoice: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},

		elevation: 1,
	},
};
