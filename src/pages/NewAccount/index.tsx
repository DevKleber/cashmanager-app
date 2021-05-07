import React, {useState} from 'react';
import {Image} from 'react-native';
import {Icon} from '../../components/elements/Icon';
import {InputText} from '../../components/elements/Input';
import {CreateAccount} from './services';

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
	const [login, setLogin] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [senha, setSenha] = useState<string>('');

	function loginIn() {
		CreateAccount({login, senha, name});
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
				<BtnLogar>
					<TextBtnLogar>Entrar</TextBtnLogar>
				</BtnLogar>
			</Content>
			<BtnBackToLogin>
				<Icon name={'arrow-left'} color={'#00EB84'} size={18} />
				<TextBtnNewAcount onPress={loginIn}>
					Voltar para o login
				</TextBtnNewAcount>
			</BtnBackToLogin>
		</Container>
	);
}
