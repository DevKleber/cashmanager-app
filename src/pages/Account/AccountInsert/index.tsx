import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {save} from '../services';
import {InputText} from '../../../components/elements/Input';
import {
	Container,
	ContentScrollView,
	TextBtnNewCard,
	BtnNewCard,
} from './style';
import {ActivityIndicator} from 'react-native';

export function AccountInsert() {
	const navigate = useNavigation();

	const [description, setDescription] = useState<string>('');
	const [banking, setBanking] = useState<string>('');
	const [currentBalance, setCurrentBalance] = useState<string>('');
	const [loader, setLoader] = useState<boolean>(false);

	async function saveAccount() {
		setLoader(true);
		const dados = await save({
			description,
			banking,
			current_balance: currentBalance,
		});
		if (!dados) {
			setLoader(false);
			return;
		}
		navigate.navigate('AccountList');
	}

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
					keyboardType="numeric"
					backgroundColor="#E8E9EF"
				/>
				<InputText
					icon="payments"
					placeholder="Saldo ex: 10.00"
					value={currentBalance}
					onChangeText={setCurrentBalance}
					autoCorrect={false}
					keyboardType="numeric"
					backgroundColor="#E8E9EF"
				/>
				<BtnNewCard onPress={saveAccount}>
					<TextBtnNewCard>Salvar conta</TextBtnNewCard>
					{loader && <ActivityIndicator size="small" color="#fff" />}
				</BtnNewCard>
			</ContentScrollView>
		</Container>
	);
}
