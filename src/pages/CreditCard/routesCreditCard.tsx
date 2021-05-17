import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreditCardList} from './index';
import {CreditCardDetail} from './CreditCardDetail';
import {CreditCardInsert} from './CreditCardInsert';
import {CreditCardUpdate} from './CreditCardUpdate';

const Stack = createStackNavigator();

export default function RoutesCreditCard() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#F0F2F5'},
			}}>
			<Stack.Screen
				name="CreditCardList"
				component={CreditCardList}
				options={{title: 'Cartão de credito'}}
			/>
			<Stack.Screen
				name="CreditCardUpdate"
				component={CreditCardUpdate}
				options={{title: 'Cartão de credito'}}
			/>
			<Stack.Screen
				name="CreditCardInsert"
				component={CreditCardInsert}
				options={{title: 'Cartão de credito'}}
			/>
			<Stack.Screen
				name="CreditCardDetail"
				component={CreditCardDetail}
				options={{title: 'Cartão de credito'}}
			/>
		</Stack.Navigator>
	);
}
