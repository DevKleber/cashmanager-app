import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../pages/Dashboard';
import {CustomTabBar} from '../components/customTabBar';

import RoutesCreditCard from '../pages/CreditCard/routesCreditCard';
import RoutesPlanned from '../pages/PlannedExpenses/routesPlanned';
import RoutesAccount from '../pages/Account/routesAccount';
import RoutesCategories from '../pages/Category/routesCategories';
import routesTransactionsList from '../pages/Transaction/routesTransactionsList';
import routesTransactionsInsert from '../pages/Transaction/routesTransactionsInsert';
import RoutesMore from '../pages/more/routesMore';

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
				options={{title: 'Movimentações'}}
				component={routesTransactionsList}
			/>
			<Tab.Screen
				name="add"
				options={{title: 'Nova movimentação'}}
				component={routesTransactionsInsert}
			/>
			<Tab.Screen name="planned" component={RoutesPlanned} />
			<Tab.Screen
				name="more"
				options={{title: '...'}}
				component={RoutesMore}
			/>
			<Tab.Screen name="credit" component={RoutesCreditCard} />
			<Tab.Screen name="account" component={RoutesAccount} />
			<Tab.Screen name="category" component={RoutesCategories} />
		</Tab.Navigator>
	);
}
