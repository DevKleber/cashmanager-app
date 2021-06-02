import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlannedExpenses} from './index';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

export default function RoutesPlanned() {
	return (
		<>
			<Stack.Navigator
				screenOptions={{
					headerShown: true,
					headerStyle: {
						backgroundColor: '#2C88D9',
						borderColor: '#2C88D9',
						shadowColor: 'transparent',
					},
					headerTitleStyle: {
						color: '#fff',
					},
					headerTintColor: '#fff',
				}}>
				<Stack.Screen
					name="PlannedExpenses"
					component={PlannedExpenses}
					options={{title: 'Planejamento'}}
				/>
			</Stack.Navigator>
		</>
	);
}
