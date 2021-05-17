import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlannedExpenses} from './index';

const Stack = createStackNavigator();

export default function RoutesPlanned() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#f5f6fc'},
			}}>
			<Stack.Screen
				name="PlannedExpenses"
				component={PlannedExpenses}
				options={{title: 'Planejamento'}}
			/>
		</Stack.Navigator>
	);
}
