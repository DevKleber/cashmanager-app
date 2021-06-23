/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from '../components/customTabBar';
import RoutesAccount from '../pages/Account/routesAccount';
import RoutesCategories from '../pages/Category/routesCategories';
import RoutesCreditCard from '../pages/CreditCard/routesCreditCard';
import { Dashboard } from '../pages/Dashboard';
import RoutesMore from '../pages/more/routesMore';
import RoutesPlanned from '../pages/PlannedExpenses/routesPlanned';
import routesTransactionsInsert from '../pages/Transaction/routesTransactionsInsert';
import routesTransactionsList from '../pages/Transaction/routesTransactionsList';

const Tab = createBottomTabNavigator();
export function AppTab(): JSX.Element {
	return (
		<Tab.Navigator
			tabBarOptions={{
				keyboardHidesTabBar: true,
			}}
			tabBar={(props: any) => <CustomTabBar {...props} />}>
			<Tab.Screen name="Home" options={{ title: 'Inicio' }} component={Dashboard} />
			<Tab.Screen name="transacoes" options={{ title: 'Movimentações' }} component={routesTransactionsList} />
			<Tab.Screen name="add" options={{ title: 'Nova movimentação' }} component={routesTransactionsInsert} />
			<Tab.Screen name="planned" component={RoutesPlanned} />
			<Tab.Screen name="more" options={{ title: '...' }} component={RoutesMore} />
			<Tab.Screen name="credit" component={RoutesCreditCard} />
			<Tab.Screen name="account" component={RoutesAccount} />
			<Tab.Screen name="category" component={RoutesCategories} />
		</Tab.Navigator>
	);
}
