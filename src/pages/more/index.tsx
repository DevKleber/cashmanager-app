import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '../../hooks/Auth';

import { Container, Item, Text, View, ViewBox, NameUser, EmailUser } from './style';

export function More(): JSX.Element {
	const { signOut, me } = useAuth();
	const navigate = useNavigation();

	function setColor() {
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor('#407c93');
	}

	useEffect(() => {
		return navigate.addListener('focus', () => setColor());
	}, []);

	return (
		<Container>
			<View>
				<NameUser>{me.name}</NameUser>
				<EmailUser>{me.email}</EmailUser>
				<ViewBox>
					<Item style={style.boxShadow} onPress={() => navigate.navigate('account')}>
						<Icon name="account-balance-wallet" size={34} color="#fff" />
						<Text>Contas</Text>
					</Item>
					<Item style={style.boxShadow} onPress={() => navigate.navigate('credit')}>
						<Icon name="credit-card" size={34} color="#fff" />
						<Text>Cartão de crédito</Text>
					</Item>
				</ViewBox>
				<ViewBox>
					<Item style={style.boxShadow} onPress={() => navigate.navigate('category')}>
						<Icon name="category" size={34} color="#fff" />
						<Text>Categorias</Text>
					</Item>
					<Item style={style.boxShadow} onPress={() => signOut()}>
						<Icon name="logout" size={34} color="#fff" />
						<Text>Sair</Text>
					</Item>
				</ViewBox>
			</View>
		</Container>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 2,
	},
};
