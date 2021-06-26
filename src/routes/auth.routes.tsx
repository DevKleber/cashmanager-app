import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { ForgotPassword } from '../pages/ForgotPassword';
import { Login } from '../pages/Login';
import { NewAccount } from '../pages/NewAccount';
import { Splash } from '../pages/Splash';

const Auth = createStackNavigator();

export default function AuthRoutes(): JSX.Element {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#F5F6FC" />
			<Auth.Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: { backgroundColor: '#fff' },
				}}>
				<Auth.Screen name="Splash" component={Splash} />
				<Auth.Screen name="SignIn" component={Login} />
				<Auth.Screen name="SignUp" component={NewAccount} />
				<Auth.Screen name="ForgotPassword" component={ForgotPassword} />
			</Auth.Navigator>
		</>
	);
}
