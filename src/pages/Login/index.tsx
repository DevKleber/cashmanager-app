import React, { useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/elements/Icon';
import { InputText } from '../../components/elements/Input';

import {
	BtnLogar,
	Container,
	Content,
	Title,
	TextBtnLogar,
	TextForgotPass,
	ForgotPass,
	BtnNewAcount,
	TextBtnNewAcount,
} from './style';
import { useAuth } from './../../hooks/Auth';


export function Login() {
	const navigate = useNavigation();
	const { loginIn } = useAuth();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function handleLogin() {
		console.log({ email, password })
		await loginIn({ email, password });
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
						<Image
							source={require('./../../assets/img/logotype.png')}
						/>
						<Title> Faça seu login</Title>
						<Content>
							<InputText
								icon='email'
								placeholder='Email'
								value={email}
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
								returnKeyType='send'
								onSubmitEditing={() => {
									handleLogin()
								}}
							/>
							<BtnLogar onPress={handleLogin}>
								<TextBtnLogar >
									Entrar
								</TextBtnLogar>
							</BtnLogar>
							<ForgotPass>
								<TextForgotPass>
									Esqueci minha senha
								</TextForgotPass>
							</ForgotPass>
						</Content>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>
			<BtnNewAcount onPress={() => navigate.navigate('SignUp')}>
				<Icon
					name={'exit-to-app'}
					color={'#00EB84'}
					size={18}
				/>
				<TextBtnNewAcount >
					Criar uma conta
				</TextBtnNewAcount>
			</BtnNewAcount>
		</>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: 200,
		height: 90,
		resizeMode: 'stretch',
	},
});
