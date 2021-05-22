import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {CreditCard} from './services';
import {Image} from 'react-native';
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

	async function creditCards() {
		const cards = await getCreditCards();
		setCreditCard(cards);
	}

	async function deleteCreditCard(item: CreditCard) {
		const cards = await deleteCard(item.id);
		creditCard.splice(creditCard.indexOf(item), 1);
		const copyCreditCard = [...creditCard];

		setCreditCard(copyCreditCard);
	}

	useEffect(() => {
		creditCards();
	}, []);

	return (
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
									name="delete"
									size={15}
									onPress={() => deleteCreditCard(item)}
								/>
								<IconText
									name="edit"
									size={15}
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
					onPress={() => navigate.navigate('CreditCardInsert')}>
					<IconText name="add-circle" color="#666666" />
					<TextAdd>Adicionar novo cartão</TextAdd>
				</BtnNewCard>
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
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 4,
	},
};
