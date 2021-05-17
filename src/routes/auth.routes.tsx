import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from './../pages/Splash';
import {Login} from './../pages/Login';
import {NewAccount} from '../pages/NewAccount';
import {StatusBar} from 'react-native';

const Auth = createStackNavigator();

export default function AuthRoutes() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#F5F6FC" />
			<Auth.Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: {backgroundColor: '#fff'},
				}}>
				<Auth.Screen name="SignIn" component={Login} />
				<Auth.Screen name="SignUp" component={NewAccount} />
				<Auth.Screen name="Splash" component={Splash} />
			</Auth.Navigator>
		</>
	);
}
