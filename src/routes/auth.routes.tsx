import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from './../pages/Splash';
import {Login} from './../pages/Login';
import {NewAccount} from '../pages/NewAccount';

const Auth = createStackNavigator();

export default function AuthRoutes() {
	return (
		<Auth.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {backgroundColor: '#fff'},
			}}>
			<Auth.Screen name="SignUp" component={NewAccount} />
			<Auth.Screen name="SignIn" component={Login} />
			<Auth.Screen name="Splash" component={Splash} />
		</Auth.Navigator>
	);
}
