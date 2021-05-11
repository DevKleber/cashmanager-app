import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from '../pages/Splash';
import {Dashboard} from '../pages/Dashboard';
import { CreditCardDetail } from '../pages/CreditCardDetail';
import { CreditCardList } from '../pages/CreditCardList';

const Stack = createStackNavigator();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#f5f6fc'},

			}}>
			<Stack.Screen name="CreditCardList" component={CreditCardList} options={{title: 'Cartão de credito'}}/>
			<Stack.Screen name="CreditCardDetail" component={CreditCardDetail} options={{title: 'Cartão de credito'}}/>
			{/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
		</Stack.Navigator>
	);
}
