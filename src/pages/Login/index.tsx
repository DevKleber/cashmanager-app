import React, {useState} from 'react';
import {
	Image,
	View,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	TextInput,
	Alert,
	StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Icon} from '../../components/elements/Icon';
import {InputText} from '../../components/elements/Input';
import {LoginIn} from './services';

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
	const [login, setLogin] = useState<string>('');
	const [senha, setSenha] = useState<string>('');

	function loginIn() {
		LoginIn({login, senha});
		console.log(login);
	}
	function handleLogin() {
		LoginIn({login, senha});

		// chamar o context user e mudar o status para logado.
		//assim o arquivo rota irá importar o caminho certo.
		navigate.navigate('Dashboard');
	}

	return (
		<>
			<KeyboardAvoidingView
				style={{flex: 1}}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				enabled>
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{flex: 1}}>
					<Container>
						<Image
							source={require('./../../assets/img/logotype.png')}
						/>
						<Title> Faça seu login</Title>
						<Content>
							<InputText
								icon={'email'}
								placeholder={'Email'}
								value={login}
								setState={setLogin}
							/>
							<InputText
								icon={'lock'}
								placeholder={'Senha'}
								value={senha}
								setState={setSenha}
							/>
							<BtnLogar>
								<TextBtnLogar onPress={handleLogin}>
									Entrar
								</TextBtnLogar>
							</BtnLogar>
							<ForgotPass>
								<TextForgotPass>
									Esqueci minha senha
								</TextForgotPass>
							</ForgotPass>
						</Content>
						<BtnNewAcount>
							<Icon
								name={'exit-to-app'}
								color={'#00EB84'}
								size={18}
							/>
							<TextBtnNewAcount onPress={loginIn}>
								Esqueci minha senha
							</TextBtnNewAcount>
						</BtnNewAcount>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>
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
