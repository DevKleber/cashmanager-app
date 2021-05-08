import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from '../pages/Splash';
import {Dashboard} from '../pages/Dashboard';
import { CreditCardDetail } from '../pages/CreditCardDetail';

const Stack = createStackNavigator();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {backgroundColor: '#fff'},
			}}>
			<Stack.Screen name="CreditCardDetail" component={CreditCardDetail} />
			{/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
		</Stack.Navigator>
	);
}
