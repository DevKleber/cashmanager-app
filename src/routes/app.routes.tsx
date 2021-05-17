import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppTab} from './app.tab.routes';

import {Splash} from '../pages/Splash';
// import {Dashboard} from '../pages/Dashboard';
import {CreditCardDetail} from '../pages/CreditCard/CreditCardDetail';
// import {CreditCardList} from '../pages/CreditCard';
import {CreditCardInsert} from '../pages/CreditCard/CreditCardInsert';
import {PlannedExpenses} from '../pages/PlannedExpenses';
import {CreditCardUpdate} from '../pages/CreditCard/CreditCardUpdate';

const Stack = createStackNavigator();

export default function AppRoutes() {
	return (
		<>
			<AppTab />

			{/* <Stack.Navigator
				screenOptions={{
					headerShown: true,
					headerStyle: {backgroundColor: '#f5f6fc'},
				}}>
				<Stack.Screen
					name="CreditCardUpdate"
					component={CreditCardUpdate}
					options={{title: 'Cartão de credito'}}
				/>
				<Stack.Screen
					name="PlannedExpenses"
					component={PlannedExpenses}
					options={{title: 'Planejamento'}}
				/>
				<Stack.Screen
					name="CreditCardInsert"
					component={CreditCardInsert}
					options={{title: 'Cartão de credito'}}
				/>
				<Stack.Screen
					name="CreditCardDetail"
					component={CreditCardDetail}
					options={{title: 'Cartão de credito'}}
				/>
			</Stack.Navigator> */}
		</>
	);
}
