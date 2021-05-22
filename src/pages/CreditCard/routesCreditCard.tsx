import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreditCardList} from './index';
import {CreditCardDetail} from './CreditCardDetail';
import {CreditCardInsert} from './CreditCardInsert';
import {CreditCardUpdate} from './CreditCardUpdate';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function RoutesCreditCard() {
	return (
		<>
		<StatusBar barStyle="light-content" backgroundColor="#009788" />
		<Stack.Navigator

			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: '#009788', 
					borderColor: '#009788', 
					shadowColor: 'transparent'
				},
				headerTitleStyle: {
					color: '#fff'
				},
				headerTintColor: '#fff'
				
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
				options={{title: 'Novo cartão de credito'}}
			/>
			<Stack.Screen
				name="CreditCardDetail"
				component={CreditCardDetail}
				options={{title: 'Cartão de credito'}}
			/>
		</Stack.Navigator>
		</>
	);
}
