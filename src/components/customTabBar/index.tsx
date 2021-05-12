import React from 'react';
import {Icon} from 'react-native-elements/dist/icons/Icon';

import {Container, TabItem, Name} from './styles';

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
				<Icon name="transacoes" size={33} color="#666666" />
				<Name>Transações</Name>
			</TabItem>
			<TabItem onPress={() => handleGoTo('add')}>
				<Icon name="add" size={33} color="#666666" />
			</TabItem>
			<TabItem onPress={() => handleGoTo('more')}>
				<Icon name="more" size={33} color="#666666" />
				<Name>Planejamento</Name>
			</TabItem>
			<TabItem onPress={() => handleGoTo('more')}>
				<Icon name="more" size={33} color="#666666" />
				<Name>Mais</Name>
			</TabItem>
		</Container>
	);
}
