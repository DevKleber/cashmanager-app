import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../pages/Dashboard';
import {CreditCardList} from '../pages/CreditCard';
import {CustomTabBar} from '../components/customTabBar';
import {PlannedExpenses} from '../pages/PlannedExpenses';

const Tab = createBottomTabNavigator();
export function AppTab() {
	return (
		<Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
			<Tab.Screen
				name="Home"
				options={{title: 'Inicio'}}
				component={Dashboard}
			/>
			<Tab.Screen
				name="transacoes"
				options={{title: 'Transações'}}
				component={Dashboard}
			/>
			<Tab.Screen
				name="add"
				options={{title: '+'}}
				component={Dashboard}
			/>
			<Tab.Screen name="planned" component={PlannedExpenses} />
			<Tab.Screen
				name="more"
				options={{title: '...'}}
				component={CreditCardList}
			/>
		</Tab.Navigator>
	);
}
