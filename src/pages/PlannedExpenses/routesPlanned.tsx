import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlannedExpenses} from './index';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function RoutesPlanned() {

	// StatusBar.setBarStyle('light-content');
	return (
		<>
			{/* <StatusBar barStyle="light-content" backgroundColor="#2C88D9" /> */}
			<Stack.Navigator
				screenOptions={{
					headerShown: true,
					headerStyle: {
						backgroundColor: '#2C88D9', 
						borderColor: '#2C88D9', 
						shadowColor: 'transparent'
					},
					headerTitleStyle: {
						color: '#fff'
					},
					headerTintColor: '#fff'
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
