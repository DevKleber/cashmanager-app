import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionInsert} from './TransactionInsert';

const Stack = createStackNavigator();

export default function routesTransactionsInsert() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: '#00eb84',
					borderColor: '#00eb84',
					shadowColor: 'transparent',
				},
				headerTitleStyle: {
					color: '#000',
					fontFamily: 'Poppins-Medium',
					fontSize: 16,
				},
				headerTintColor: '#000',
			}}>
			<Stack.Screen
				name="add"
				component={TransactionInsert}
				options={{title: 'Nova movimentação'}}
			/>
		</Stack.Navigator>
	);
}
