import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {getCreditCardById, update} from '../services';
import {InputText} from '../../../components/elements/Input';
import {
	Container,
	ContentScrollView,
	TextBtnNewCard,
	BtnNewCard,
} from './style';

export function CreditCardUpdate() {
	const navigate = useNavigation();
	const router = useRoute();

	const [id, setId] = useState<number>(0);
	const [name, setName] = useState<string>('');
	const [dueDay, setDueDay] = useState<string>('');
	const [closingDay, setClosingDay] = useState<string>('');

	async function updateCreditCard() {
		await update({
			name,
			due_day: dueDay,
			closing_day: closingDay,
			id,
		});
		navigate.navigate('CreditCardList');
	}

	async function getCreditCard() {
		const {id}: any = router.params;
		const dados = await getCreditCardById(id);
		setName(dados.name);
		setDueDay(dados.due_day);
		setClosingDay(dados.closing_day);
		setId(dados.id);
	}

	useEffect(() => {
		getCreditCard();
	}, []);

	return (
		<Container>
			<ContentScrollView>
				<InputText
					icon="credit-card"
					placeholder="Nome"
					value={name}
					onChangeText={setName}
					autoCorrect={false}
					backgroundColor="#E8E9EF"
				/>
				<InputText
					icon="event"
					placeholder="Dia do vencimento"
					value={dueDay}
					onChangeText={setDueDay}
					autoCorrect={false}
					keyboardType="numeric"
					backgroundColor="#E8E9EF"
				/>
				<InputText
					icon="event"
					placeholder="Dia do fechamento"
					value={closingDay}
					onChangeText={setClosingDay}
					autoCorrect={false}
					keyboardType="numeric"
					backgroundColor="#E8E9EF"
				/>
				<BtnNewCard onPress={updateCreditCard}>
					<TextBtnNewCard>Alterar</TextBtnNewCard>
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
