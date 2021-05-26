import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Item, Text, View, ViewBox} from './style';
import {StatusBar} from 'react-native';
import {useAuth} from './../../hooks/Auth';

export function More() {
	const {signOut} = useAuth();

	useEffect(() => {
		StatusBar.setBarStyle('light-content');
		StatusBar.setBackgroundColor('#407c93');
	}, []);

	const navigate = useNavigation();
	return (
		<Container>
			<View>
				<ViewBox>
					<Item
						style={style.boxShadow}
						onPress={() => navigate.navigate('account')}>
						<Icon
							name="account-balance-wallet"
							size={34}
							color="#fff"
						/>
						<Text>Contas</Text>
					</Item>
					<Item
						style={style.boxShadow}
						onPress={() => navigate.navigate('credit')}>
						<Icon name="credit-card" size={34} color="#fff" />
						<Text>Cartão de crédito</Text>
					</Item>
				</ViewBox>
				<ViewBox>
					<Item
						style={style.boxShadow}
						onPress={() => navigate.navigate('category')}>
						<Icon name="category" size={34} color="#fff" />
						<Text>Categorias</Text>
					</Item>
					<Item style={style.boxShadow} onPress={() => signOut()}>
						<Icon
							name="logout"
							size={34}
							color="#fff"
						/>
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
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 2,
	},
};
