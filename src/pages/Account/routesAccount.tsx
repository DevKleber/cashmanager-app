import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountList} from './index';
import {AccountUpdate} from './AccountUpdate';
import {AccountInsert} from './AccountInsert';
import {AccountDetail} from './AccountDetail';

const Stack = createStackNavigator();

export default function RoutesAccount() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: '#F0F2F5'},
			}}>
			<Stack.Screen
				name="AccountList"
				component={AccountList}
				options={{title: 'Contas'}}
			/>
			<Stack.Screen
				name="AccountUpdate"
				component={AccountUpdate}
				options={{title: 'Contas'}}
			/>
			<Stack.Screen
				name="AccountInsert"
				component={AccountInsert}
				options={{title: 'Contas'}}
			/>
			<Stack.Screen
				name="AccountDetail"
				component={AccountDetail}
				options={{title: 'Contas'}}
			/>
		</Stack.Navigator>
	);
}
