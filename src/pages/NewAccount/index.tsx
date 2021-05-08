import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Icon } from '../../components/elements/Icon';
import { InputText } from '../../components/elements/Input';
import { useNavigation } from '@react-navigation/native';

import {
	BtnLogar,
	Container,
	Content,
	Title,
	TextBtnLogar,
	BtnBackToLogin,
	TextBtnNewAcount,
} from './style';
import { useAuth } from '../../hooks/Auth';

export function NewAccount() {
	const navigate = useNavigation();
	const { createNewAccount } = useAuth();
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	function loginIn() {
		navigate.navigate('SignIn');
	}

	async function createAccount() {
		console.log({ email, password })
		await createNewAccount({ email, password  });
	}

	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				enabled>
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{ flex: 1 }}>
					<Container>
						<Image source={require('./../../assets/img/logotype.png')} />
						<Title>Crie sua conta</Title>
						<Content>
							<InputText
								icon='person'
								autoCapitalize="words"
								placeholder='Nome'
								value={name}
								onChangeText={setName}
							/>
							<InputText
								icon='email'
								placeholder='Email'
								value={email}
								autoCapitalize="none"
								onChangeText={setEmail}
								autoCorrect={false}
								keyboardType='email-address'
							/>
							<InputText
								icon='lock'
								placeholder='Senha'
								value={password}
								onChangeText={setPassword}
								secureTextEntry
								onSubmitEditing={() => {
									createAccount()
								}}
							/>
							<BtnLogar onPress={createAccount}>
								<TextBtnLogar>Entrar</TextBtnLogar>
							</BtnLogar>
						</Content>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>
			<BtnBackToLogin onPress={loginIn}>
				<Icon name={'arrow-left'} color={'#00EB84'} size={18} />
				<TextBtnNewAcount>
					Voltar para o login
				</TextBtnNewAcount>
			</BtnBackToLogin>
		</>
	);
}
