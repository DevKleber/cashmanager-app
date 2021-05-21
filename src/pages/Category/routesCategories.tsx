import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryInsert} from './CategoryInsert';

const Stack = createStackNavigator();

export default function RoutesCategories() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#F0F2F5'},
			}}>
			<Stack.Screen
				name="CategoryInsert"
				component={CategoryInsert}
				options={{title: 'Nova transação'}}
			/>
		</Stack.Navigator>
	);
}
