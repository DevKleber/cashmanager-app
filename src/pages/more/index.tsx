import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Item, Text, Menu, View} from './style';

export default function More() {
	const navigate = useNavigation();
	return (
		<Container>
			<Menu>Menu</Menu>
			<View>
				<Item
					style={style.boxShadow}
					onPress={() => navigate.navigate('account')}>
					<Icon
						name="account-balance-wallet"
						size={24}
						color="#666666"
					/>
					<Text>Account</Text>
				</Item>
				<Item
					style={style.boxShadow}
					onPress={() => navigate.navigate('credit')}>
					<Icon name="credit-card" size={24} color="#666666" />
					<Text>Credit card</Text>
				</Item>
				<Item style={style.boxShadow}>
					<Icon
						name="supervised-user-circle"
						size={24}
						color="#666666"
					/>
					<Text>Perfil</Text>
				</Item>
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
