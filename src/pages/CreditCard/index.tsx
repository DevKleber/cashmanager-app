import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {CreditCard} from './services';
import {Alert, Image, RefreshControl, StatusBar} from 'react-native';
import {IconText} from '../../components/elements/Icon';

import {getCreditCards, deleteCard} from './services';
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
	BtnNewCard,
	TextAdd,
	Actions,
} from './style';

export function CreditCardList() {
	const navigate = useNavigation();
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [creditCard, setCreditCard] = useState<CreditCard[]>([]);
	async function creditCards() {
		const cards = await getCreditCards();
		setCreditCard(cards);
	}

	async function deleteCreditCard(item: CreditCard) {
		Alert.alert(`Deseja remover?`, `${item.name}`, [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Sim, remover',
				onPress: async () => {
					const cards = await deleteCard(item.id);
					creditCard.splice(creditCard.indexOf(item), 1);
					const copyCreditCard = [...creditCard];
					setCreditCard(copyCreditCard);
				},
			},
		]);
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
		creditCards();
	}

	useEffect(() => {
		return navigate.addListener('focus', () => loadData());
	}, [refreshing]);

	return (
		<>
			<Container>
				<ContentScrollView
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}>
					{creditCard.map((item: any, index: number) => (
						<Card
							style={style.boxShadow}
							key={index}
							onPress={() =>
								navigate.navigate('CreditCardDetail', item)
							}>
							<Header>
								<Image
									source={require('./../../assets/img/card.png')}
								/>
								<Title>{item.name}</Title>
								<Actions>
									<IconText
										name="delete"
										color="#666360"
										onPress={() => deleteCreditCard(item)}
									/>
									<IconText
										name="edit"
										onPress={() =>
											navigate.navigate(
												'CreditCardUpdate',
												item,
											)
										}
									/>
								</Actions>
							</Header>
							<Content>
								<Text>
									Valor da fatura:{' '}
									<TextValue>
										R$ {item.total ? item.total : 0}
									</TextValue>
								</Text>
								<Text>
									Fecha:{' '}
									<TextLighter>
										{item.closing_day}
									</TextLighter>
								</Text>
								<Text>
									Vencimento:{' '}
									<TextLighter>{item.due_day}</TextLighter>
								</Text>
							</Content>
						</Card>
					))}
					<BtnNewCard
						style={style.boxShadow}
						onPress={() => navigate.navigate('CreditCardInsert')}>
						{/* onPress={() => (navigate.navigate('CreditCardInsert'))}> */}
						<IconText name="add-circle" color="#666666" />
						<TextAdd>Adicionar novo cart??o</TextAdd>
					</BtnNewCard>
				</ContentScrollView>
			</Container>
		</>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 4,
	},
};
