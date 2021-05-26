import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {CreditCard} from './services';
import {Image, StatusBar} from 'react-native';
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

	const [creditCard, setCreditCard] = useState<CreditCard[]>([]);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	async function creditCards() {
		const cards = await getCreditCards();
		setCreditCard(cards);
	}

	async function deleteCreditCard(item: CreditCard) {
		if (!item?.isDelete) {
			const copyCreditCard:CreditCard[] = creditCard;
			copyCreditCard[creditCard.indexOf(item)].isDelete = true;
			setCreditCard([...copyCreditCard]);
			return;
		}

		const cards = await deleteCard(item.id);
		creditCard.splice(creditCard.indexOf(item), 1);
		const copyCreditCard = [...creditCard];
		setCreditCard(copyCreditCard);
	}

	useEffect(() => {
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor('#009788');
		creditCards();
	}, []);

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#009788" />
			<Container>
				<ContentScrollView>
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
										name={item?.isDelete ? "delete-forever" : "delete"}
										color={item?.isDelete ? "orange" : "#666360"}
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
									<TextValue>R$ {item.total}</TextValue>
								</Text>
								<Text>
									Fecha:{' '}
									<TextLighter>{item.closing_day}</TextLighter>
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
						onPress={() => (navigate.navigate('CreditCardInsert'))}>
						{/* onPress={() => (navigate.navigate('CreditCardInsert'))}> */}
						<IconText name="add-circle" color="#666666" />
						<TextAdd>Adicionar novo cartão</TextAdd>
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
