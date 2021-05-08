import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import AuthRoutes from './auth.routes';

import AppRoutes from './app.routes';
import {useAuth} from './../hooks/Auth';

export function Routes() {
	const loading = false;
	const {user} = useAuth();
	console.log('rota user', user);


	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<ActivityIndicator size="large" color="#00EB84" />
			</View>
		);
	}

	return user ? <AppRoutes /> : <AuthRoutes />;
}
