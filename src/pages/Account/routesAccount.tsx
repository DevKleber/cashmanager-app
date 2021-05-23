import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountList} from './index';
import {AccountUpdate} from './AccountUpdate';
import {AccountInsert} from './AccountInsert';
import {AccountDetail} from './AccountDetail';

const Stack = createStackNavigator();

export default function RoutesAccount() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: '#F7C325', 
					borderColor: '#F7C325', 
					shadowColor: 'transparent'
				},
				headerTitleStyle: {
					color: '#000',
					fontFamily: 'Poppins-Regular',
					fontSize: 16,
				},
				headerTintColor: '#000'
			}}>
			<Stack.Screen
				name="AccountList"
				component={AccountList}
				options={{title: 'Contas'}}
			/>
			<Stack.Screen
				name="AccountUpdate"
				component={AccountUpdate}
				options={{title: 'Alterar conta'}}
			/>
			<Stack.Screen
				name="AccountInsert"
				component={AccountInsert}
				options={{title: 'Nova conta'}}
			/>
			<Stack.Screen
				name="AccountDetail"
				component={AccountDetail}
				options={{title: 'Movimentações de conta'}}
			/>
		</Stack.Navigator>
	);
}
