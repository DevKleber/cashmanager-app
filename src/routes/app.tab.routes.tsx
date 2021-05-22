import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../pages/Dashboard';
import {CustomTabBar} from '../components/customTabBar';

import RoutesCreditCard from '../pages/CreditCard/routesCreditCard';
import RoutesPlanned from '../pages/PlannedExpenses/routesPlanned';
import More from '../pages/more';
import RoutesAccount from '../pages/Account/routesAccount';
import RoutesTransactions from '../pages/Transaction/routesTransactions';
import { TransactionList } from '../pages/Transaction';
import { CategoryList } from '../pages/Category';
import RoutesCategories from '../pages/Category/routesCategories';

const Tab = createBottomTabNavigator();
export function AppTab() {
	return (
		<Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
			<Tab.Screen
				name="Home"
				options={{title: 'Inicio'}}
				component={Dashboard}
			/>
			<Tab.Screen
				name="transacoes"
				options={{title: 'Transações'}}
				component={TransactionList}
			/>
			<Tab.Screen
				name="add"
				options={{title: 'Nova transação'}}
				component={RoutesTransactions}
			/>
			<Tab.Screen name="planned" component={RoutesPlanned} />
			<Tab.Screen name="more" options={{title: '...'}} component={More} />
			<Tab.Screen name="credit" component={RoutesCreditCard} />
			<Tab.Screen name="account" component={RoutesAccount} />
			<Tab.Screen name="category" component={RoutesCategories} />
		</Tab.Navigator>
	);
}
