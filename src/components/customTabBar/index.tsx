import React from 'react';
// import {Icon} from 'react-native-elements/dist/icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabItem, TabItemAdd, Name} from './styles';

export function CustomTabBar({stack, navigation}: any) {
	function handleGoTo(screenName: string) {
		navigation.navigate(screenName);
	}

	return (
		<Container>
			<TabItem onPress={() => handleGoTo('Home')}>
				<Icon name="home" size={33} color="#666666" />
				<Name>Início</Name>
			</TabItem>
			<TabItem onPress={() => handleGoTo('transacoes')}>
				<Icon name="receipt-long" size={33} color="#666666" />
				<Name>Transações</Name>
			</TabItem>
			<TabItemAdd
				style={style.boxShadow}
				onPress={() => handleGoTo('add')}>
				<Icon name="add" size={40} color="#fff" />
			</TabItemAdd>
			<TabItem onPress={() => handleGoTo('more')}>
				<Icon name="outlined-flag" size={33} color="#666666" />
				<Name>Planejamento</Name>
			</TabItem>
			<TabItem onPress={() => handleGoTo('more')}>
				<Icon name="more-horiz" size={33} color="#666666" />
				<Name>Mais</Name>
			</TabItem>
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
