import React, { useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { IconText } from '../../components/elements/Icon';
import { InputText } from '../../components/elements/Input';
import { useAuth } from '../../hooks/Auth';

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

export function Login() {
	const navigate = useNavigation();
	const { loginIn } = useAuth();
	const [loader, setLoader] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function handleLogin() {
		setLoader(true);
		const status = await loginIn({ email, password });
		if (!status) {
			setLoader(false);
		}
	}

	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				keyboardVerticalOffset={100}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				enabled>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Container>
						<Image source={require('../../assets/img/logotype.png')} />
						<Title> Faça seu login</Title>
						<Content>
							<InputText
								icon="email"
								placeholder="Email"
								value={email}
								onChangeText={setEmail}
								autoCorrect={false}
								backgroundColor="#fff"
								outline
								keyboardType="email-address"
							/>
							<InputText
								icon="lock"
								placeholder="Senha"
								value={password}
								onChangeText={setPassword}
								secureTextEntry
								backgroundColor="#fff"
								outline
								returnKeyType="send"
								onSubmitEditing={() => {
									handleLogin();
								}}
							/>
							<BtnLogar onPress={handleLogin}>
								<TextBtnLogar>Entrar</TextBtnLogar>
								{loader && <ActivityIndicator size="small" color="#fff" />}
							</BtnLogar>
							<ForgotPass onPress={() => navigate.navigate('ForgotPassword')}>
								<TextForgotPass>Esqueci minha senha</TextForgotPass>
							</ForgotPass>
						</Content>
					</Container>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<BtnNewAcount onPress={() => navigate.navigate('SignUp')}>
				<IconText name="exit-to-app" color="#00EB84" size={18} />
				<TextBtnNewAcount>Criar uma conta</TextBtnNewAcount>
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
