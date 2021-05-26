import React, {useState} from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IconText} from '../../components/elements/Icon';
import {InputText} from '../../components/elements/Input';

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
import {useAuth} from './../../hooks/Auth';

export function Login() {
	const navigate = useNavigation();
	const {loginIn} = useAuth();

	const [email, setEmail] = useState<string>('admin');
	const [password, setPassword] = useState<string>('admin');

	async function handleLogin() {
		await loginIn({email, password});
	}

	return (
		<>
			<KeyboardAvoidingView
				style={{flex: 1}}
				keyboardVerticalOffset={100}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				enabled>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Container>
						<Image
							source={require('./../../assets/img/logotype.png')}
						/>
						<Title> Faça seu login</Title>
						<Content>
							<InputText
								icon="email"
								placeholder="Email"
								value={email}
								onChangeText={setEmail}
								autoCorrect={false}
								backgroundColor="#fff"
								outline={true}
								keyboardType="email-address"
							/>
							<InputText
								icon="lock"
								placeholder="Senha"
								value={password}
								onChangeText={setPassword}
								secureTextEntry
								backgroundColor="#fff"
								outline={true}
								returnKeyType="send"
								onSubmitEditing={() => {
									handleLogin();
								}}
							/>
							<BtnLogar onPress={handleLogin}>
								<TextBtnLogar>Entrar</TextBtnLogar>
							</BtnLogar>
							<ForgotPass>
								<TextForgotPass>
									Esqueci minha senha
								</TextForgotPass>
							</ForgotPass>
						</Content>
					</Container>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<BtnNewAcount onPress={() => navigate.navigate('SignUp')}>
				<IconText name={'exit-to-app'} color={'#00EB84'} size={18} />
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
