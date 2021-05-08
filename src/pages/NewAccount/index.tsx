import React, {useState} from 'react';
import {Image} from 'react-native';
import {Icon} from '../../components/elements/Icon';
import {InputText} from '../../components/elements/Input';
import {CreateAccount} from './services';
import {useNavigation} from '@react-navigation/native';

import {
	BtnLogar,
	Container,
	Content,
	Title,
	TextBtnLogar,
	BtnBackToLogin,
	TextBtnNewAcount,
} from './style';

export function NewAccount() {
	const navigate = useNavigation();
	const [login, setLogin] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [senha, setSenha] = useState<string>('');

	function loginIn() {
		navigate.navigate('SignIn');
	}

	function createNewAccount() {
		
	}

	return (
		<Container>
			<Image source={require('./../../assets/img/logotype.png')} />
			<Title>Crie sua conta</Title>
			<Content>
				<InputText
					icon={'person'}
					placeholder={'Nome'}
					value={name}
					setState={setName}
				/>
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
				<BtnLogar onPress={createNewAccount}>
					<TextBtnLogar>Entrar</TextBtnLogar>
				</BtnLogar>
			</Content>
			<BtnBackToLogin  onPress={loginIn}>
				<Icon name={'arrow-left'} color={'#00EB84'} size={18} />
				<TextBtnNewAcount>
					Voltar para o login
				</TextBtnNewAcount>
			</BtnBackToLogin>
		</Container>
	);
}
