import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Item, Text, Menu, View, ViewBox} from './style';

export default function More() {
	const navigate = useNavigation();
	return (
		<Container>
			<Menu>Menu</Menu>
			<View>
				<ViewBox>
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
				</ViewBox>
				<ViewBox>
					<Item 
						style={style.boxShadow}
						onPress={() => navigate.navigate('category')}>
						<Icon
							name="category"
							size={24}
							color="#666666"
						/>
						<Text>Categorias</Text>
					</Item>
					<Item style={style.boxShadow}>
						<Icon
							name="supervised-user-circle"
							size={24}
							color="#666666"
						/>
						<Text>Perfil</Text>
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
