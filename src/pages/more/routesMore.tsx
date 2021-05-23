import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {More} from './index';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

export default function RoutesMore() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: '#407c93',
					borderColor: '#407c93',
					shadowColor: 'transparent',
				},
				headerTitleStyle: {
					color: '#fff',
				},
				headerTintColor: '#fff',
			}}>
			<Stack.Screen
				name="more"
				component={More}
				options={{title: 'Menu'}}
			/>
		</Stack.Navigator>
	);
}
