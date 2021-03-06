import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {IconText} from './../../components/elements/Icon';
import {InputText} from './../../components/elements/Input';
import {RecoveryPassword} from './services';
import {
	BtnEnviar,
	Container,
	Content,
	Title,
	TextBtnEnviar,
	TextBtnBackToLogin,
	BtnNewAcount,
} from './style';

export function ForgotPassword() {
	const navigate = useNavigation();
	const [email, setEmail] = useState<string>('');

	function forgotPassword() {
		RecoveryPassword({email});
	}

	return (
		<Container>
			<Image source={require('./../../assets/img/logotype.png')} />
			<Title> Recuperar senha</Title>
			<Content>
				<InputText
					icon={'email'}
					placeholder={'Email'}
					value={email}
					setState={setEmail}
					backgroundColor="#fff"
					outline={true}
				/>
				<BtnEnviar>
					<TextBtnEnviar>Enviar</TextBtnEnviar>
				</BtnEnviar>
			</Content>
			<BtnNewAcount onPress={() => navigate.navigate('SignIn')}>
				<IconText name={'arrow-left'} color={'#00EB84'} size={18} />
				<TextBtnBackToLogin onPress={forgotPassword}>
					Voltar para o login
				</TextBtnBackToLogin>
			</BtnNewAcount>
		</Container>
	);
}
