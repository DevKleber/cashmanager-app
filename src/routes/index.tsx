import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import AuthRoutes from './auth.routes';

import AppRoutes from './app.routes';
import {userIsLoggedin} from '../pages/Login/services';

export function Routes() {
	const loading = false;
	const [user, setUser] = useState(false);

	useEffect(() => {
		// não vai ter isso.
		// fazer uma variavel const user = contexto
		userIsLoggedin().then(res => {
			setUser(res);
		});
	}, []);

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
