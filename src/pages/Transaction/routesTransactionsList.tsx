import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionList} from '.';

const Stack = createStackNavigator();

export default function routesTransactionsList() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#F0F2F5'},
				headerTitleStyle: {
					color: '#000',
					fontFamily: 'Poppins-Regular',
					fontSize: 16,
				},
				headerTintColor: '#000',
			}}>
			<Stack.Screen
				name="transacoes"
				component={TransactionList}
				options={{title: 'Movimentações'}}
			/>
		</Stack.Navigator>
	);
}
