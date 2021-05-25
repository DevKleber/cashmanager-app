import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {save} from '../services';
import {InputText} from '../../../components/elements/Input';
import {
	Container,
	ContentScrollView,
	TextBtn,
	Btn,
	ContainerButton,
	ContainerIcon,
	ChosenIcon,
} from './style';
import {IconText} from '../../../components/elements/Icon';
import {StatusBar} from 'react-native';

export function CategoryInsert() {
	const router = useRoute();
	const navigate = useNavigation();

	const {id, isIncome}: any = router.params;

	const [name, setName] = useState<string>('');

	async function saveAccount() {
		return;
		await save({}).then(() => {
			navigate.navigate('transacoes');
		});
	}
	function alterBackgroundColor(bgIsIncome: boolean) {
		const color: string = bgIsIncome ? '#207868' : '#F44236';

		navigate.setOptions({
			headerShown: true,
			headerStyle: {
				backgroundColor: color,
				borderColor: color,
				shadowColor: 'transparent',
			},
			headerTitleStyle: {
				color: '#fff',
				fontFamily: 'Poppins-Medium',
				fontSize: 16,
			},
			headerTintColor: '#fff',
		});
		StatusBar.setBackgroundColor(color);
	}
	useEffect(() => {
		alterBackgroundColor(isIncome);
	}, []);

	return (
		<Container selected={isIncome}>
			<ContentScrollView>
				<InputText
					icon="account-balance-wallet"
					placeholder="Nome"
					value={name}
					onChangeText={setName}
					autoCorrect={false}
					backgroundColor="#E8E9EF"
				/>
				<ContainerIcon>
					<ChosenIcon>Icone</ChosenIcon>
				</ContainerIcon>
				<ContainerButton>
					<Btn selected={isIncome} onPress={saveAccount}>
						<IconText
							size={30}
							name="add-circle"
							color={isIncome ? '#1D6C5E' : '#dc3b31'}
						/>
						<TextBtn>Cadastrar</TextBtn>
					</Btn>
				</ContainerButton>
			</ContentScrollView>
		</Container>
	);
}
