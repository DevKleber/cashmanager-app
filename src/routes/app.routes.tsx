import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from '../pages/Splash';
import {Dashboard} from '../pages/Dashboard';
import { CreditCardDetail } from '../pages/CreditCard/CreditCardDetail';
import { CreditCardList } from '../pages/CreditCard';
import { CreditCardInsert } from '../pages/CreditCard/CreditCardInsert';
import { PlannedExpenses } from '../pages/PlannedExpenses';
import { CreditCardUpdate } from '../pages/CreditCard/CreditCardUpdate';
import { AccountList } from '../pages/Account';
import { AccountUpdate } from '../pages/Account/AccountUpdate';
import { AccountInsert } from '../pages/Account/AccountInsert';
import { AccountDetail } from '../pages/Account/AccountDetail';
import { TransactionInsert } from '../pages/Transaction/TransactionInsert';

const Stack = createStackNavigator();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#f5f6fc'},

			}}>
			<Stack.Screen name="TransactionInsert" component={TransactionInsert} options={{title: 'Nova Transação'}}/>
			<Stack.Screen name="AccountList" component={AccountList} options={{title: 'Contas'}}/>
			<Stack.Screen name="AccountUpdate" component={AccountUpdate} options={{title: 'Contas'}}/>
			<Stack.Screen name="AccountInsert" component={AccountInsert} options={{title: 'Contas'}}/>
			<Stack.Screen name="AccountDetail" component={AccountDetail} options={{title: 'Contas'}}/>
			<Stack.Screen name="PlannedExpenses" component={PlannedExpenses} options={{title: 'Planejamento'}}/>
			<Stack.Screen name="CreditCardList" component={CreditCardList} options={{title: 'Cartão de credito'}}/>
			<Stack.Screen name="CreditCardUpdate" component={CreditCardUpdate} options={{title: 'Cartão de credito'}}/>
			<Stack.Screen name="CreditCardInsert" component={CreditCardInsert} options={{title: 'Cartão de credito'}}/>
			<Stack.Screen name="CreditCardDetail" component={CreditCardDetail} options={{title: 'Cartão de credito'}}/>
			{/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
		</Stack.Navigator>
	);
}
