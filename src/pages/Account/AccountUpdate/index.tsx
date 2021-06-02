import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {getAccountById, update} from '../services';
import {InputText} from '../../../components/elements/Input';
import {
	Container,
	ContentScrollView,
	TextBtnNewCard,
	BtnNewCard,
} from './style';
import {StatusBar} from 'react-native';

export function AccountUpdate() {
	const navigate = useNavigation();
	const router = useRoute();

	const [id, setId] = useState<number>(0);
	const [description, setDescription] = useState<string>('');
	const [banking, setBanking] = useState<string>('');
	const [currentBalance, setCurrentBalance] = useState<string>('');

	async function updateAccount() {
		const dados = await update({
			description,
			banking,
			current_balance: currentBalance,
			id,
		});
		navigate.navigate('AccountList');
	}

	async function getAccount() {
		const {id}: any = router.params;
		const dados = await getAccountById(id);

		setDescription(dados.description);
		setBanking(dados.banking);
		setCurrentBalance(dados.current_balance);
		setId(dados.id);
	}

	useEffect(() => {
		StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#F7C325');
		getAccount();
	}, []);

	return (
		<Container>
			<ContentScrollView>
				<InputText
					icon="account-balance-wallet"
					placeholder="Nome"
					value={description}
					onChangeText={setDescription}
					autoCorrect={false}
					backgroundColor="#E8E9EF"
				/>
				<InputText
					icon="account-balance"
					placeholder="Banco"
					value={banking}
					onChangeText={setBanking}
					autoCorrect={false}
					backgroundColor="#E8E9EF"
				/>
				<InputText
					icon="attach-money"
					placeholder="Valor"
					value={currentBalance}
					onChangeText={setCurrentBalance}
					autoCorrect={false}
					keyboardType="numeric"
					backgroundColor="#E8E9EF"
				/>
				<BtnNewCard onPress={updateAccount}>
					<TextBtnNewCard>Alterar conta</TextBtnNewCard>
				</BtnNewCard>
			</ContentScrollView>
		</Container>
	);
}
