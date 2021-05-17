import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionInsert} from './TransactionInsert';

const Stack = createStackNavigator();

export default function RoutesTransactions() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#F0F2F5'},
			}}>
			<Stack.Screen
				name="add"
				component={TransactionInsert}
				options={{title: 'Nova transação'}}
			/>
		</Stack.Navigator>
	);
}
