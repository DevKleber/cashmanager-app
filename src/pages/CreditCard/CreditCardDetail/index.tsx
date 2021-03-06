import React, {useEffect, useState} from 'react';
import {IconText} from '../../../components/elements/Icon';
import {format} from 'date-fns';
import {Image, RefreshControl, StatusBar, View} from 'react-native';
import {getCreditCardById, CreditCard, Month} from '../services';
import {useNavigation, useRoute} from '@react-navigation/core';
import {BtnMonth} from '../../Transaction/style';
import {getMonths} from '../../Account/services';
import {
	Content,
	Title,
	Header,
	Text,
	TextValue,
	TextLighter,
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
	ViewMesage,
} from './style';

export function CreditCardDetail() {
	const [months, setMonths] = useState<Month[]>(getMonths());
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard);
	const router = useRoute();
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const navigate = useNavigation();

	async function getCreditCard() {
		const {id}: any = router.params;
		const dados = await getCreditCardById(id, month);
		setCreditCard(dados);
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

	const wait = (timeout: number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	function loadData() {
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor('#009788');
		setCurrentMonth();
		getCreditCard();
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
					<IconText name="navigate-before" size={25} color="#fff" />
				</BtnMonth>
				<TextHeaderDate>{months[month].month}</TextHeaderDate>
				<BtnMonth
					onPress={() => {
						alterMonth(month < 11 ? month + 1 : 11);
					}}>
					<IconText name="navigate-next" size={25} color="#fff" />
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
							source={require('./../../../assets/img/card.png')}
						/>
						<Title>{creditCard.name}</Title>
					</Header>
					<Content>
						<Text>
							Valor da fatura:{' '}
							<TextValue>R$ {creditCard.total}</TextValue>
						</Text>
						<Text>
							Fecha:{' '}
							<TextLighter>{creditCard.closing_day}</TextLighter>
						</Text>
						<Text>
							Vencimento:{' '}
							<TextLighter>{creditCard.due_day}</TextLighter>
						</Text>
					</Content>
				</Card>
				<CardInvoice>
					{creditCard.items?.map((item: any, index: number) => (
						<View
							key={index}
							style={{paddingLeft: 20, paddingRight: 20}}>
							<ItemList>
								<ItemIcon>
									<IconText name={item.icon} />
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
										{formatDate(item.due_date)}
									</DatePrice>
								</ItemPrice>
							</ItemList>
							{creditCard.items.length > index + 1 ? (
								<RowHr />
							) : null}
						</View>
					))}

					{creditCard.items?.length == 0 ? (
						<ViewMesage>
							<Text>Esse cart??o n??o possui movimenta????es</Text>
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
