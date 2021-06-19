import React, { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
// import {Icon} from 'react-native-elements/dist/icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabItem, TabItemAdd, Name } from './styles';

export function CustomTabBar({ state, navigation }: any): any {
	const [keyboardStatus, setKeyboardStatus] = useState(Boolean);
	const difkeyboardDidShow = () => setKeyboardStatus(true);
	const difkeyboardDidHide = () => setKeyboardStatus(false);

	function handleGoTo(screenName: string) {
		navigation.navigate(screenName);
	}

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', difkeyboardDidShow);
		Keyboard.addListener('keyboardDidHide', difkeyboardDidHide);

		// cleanup function
		return () => {
			Keyboard.removeListener('keyboardDidShow', difkeyboardDidShow);
			Keyboard.removeListener('keyboardDidHide', difkeyboardDidHide);
		};
	}, []);

	return (
		!keyboardStatus && (
			<Container>
				<TabItem onPress={() => handleGoTo('Home')}>
					<Icon style={{ opacity: state.index === 0 ? 1 : 0.5 }} name="home" size={33} color="#666666" />
					<Name style={{ opacity: state.index === 0 ? 1 : 0.5 }}>Início</Name>
				</TabItem>

				<TabItem onPress={() => handleGoTo('transacoes')}>
					<Icon
						style={{ opacity: state.index === 1 ? 1 : 0.5 }}
						name="receipt-long"
						size={33}
						color="#666666"
					/>
					<Name style={{ opacity: state.index === 1 ? 1 : 0.5 }}>Transações</Name>
				</TabItem>

				<TabItemAdd style={style.boxShadow} onPress={() => handleGoTo('add')}>
					<Icon name="add" size={40} color="#fff" />
				</TabItemAdd>

				<TabItem onPress={() => handleGoTo('planned')}>
					<Icon
						style={{ opacity: state.index === 3 ? 1 : 0.5 }}
						name="outlined-flag"
						size={33}
						color="#666666"
					/>
					<Name style={{ opacity: state.index === 3 ? 1 : 0.5 }}>Planejamento</Name>
				</TabItem>

				<TabItem onPress={() => handleGoTo('more')}>
					<Icon style={{ opacity: state.index >= 4 ? 1 : 0.5 }} name="more-horiz" size={33} color="#666666" />
					<Name style={{ opacity: state.index >= 4 ? 1 : 0.5 }}>Mais</Name>
				</TabItem>
			</Container>
		)
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
