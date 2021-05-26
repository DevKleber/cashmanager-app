import React, {useState} from 'react';
import {
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
	ActivityIndicator,
} from 'react-native';
import {IconText} from '../../components/elements/Icon';
import {InputText} from '../../components/elements/Input';
import {useNavigation} from '@react-navigation/native';

import {
	BtnLogar,
	Container,
	Content,
	Title,
	TextBtnLogar,
	BtnBackToLogin,
	TextBtnNewAcount,
	Logo,
} from './style';
import {useAuth} from '../../hooks/Auth';

export function NewAccount() {
	const navigate = useNavigation();
	const {createNewAccount} = useAuth();
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [loader, setLoader] = useState<boolean>(false);
	const [password, setPassword] = useState<string>('');

	function loginIn() {
		navigate.navigate('SignIn');
	}

	async function createAccount() {
		setLoader(true);
		const status = await createNewAccount({email, password, name});
		if (!status) {
			setLoader(false);
		}
	}

	return (
		<>
			<KeyboardAvoidingView
				style={{flex: 1}}
				keyboardVerticalOffset={100}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				enabled
				>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Container>
						<Logo
							source={require('./../../assets/img/logotype.png')}
						/>
						<Title>Crie sua conta</Title>
						<Content>
							<InputText
								icon="person"
								autoCapitalize="words"
								placeholder="Nome"
								value={name}
								backgroundColor="#fff"
								outline={true}
								onChangeText={setName}
							/>
							<InputText
								icon="email"
								placeholder="Email"
								value={email}
								autoCapitalize="none"
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
								onSubmitEditing={() => {
									createAccount();
								}}
							/>
							<BtnLogar onPress={createAccount}>
								<TextBtnLogar>Entrar</TextBtnLogar>
								{loader && <ActivityIndicator size="small" color="#fff" />}
							</BtnLogar>
						</Content>
					</Container>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<BtnBackToLogin onPress={loginIn}>
				<IconText name={'arrow-left'} color={'#00EB84'} size={18} />
				<TextBtnNewAcount>Voltar para o login</TextBtnNewAcount>
			</BtnBackToLogin>
		</>
	);
}
