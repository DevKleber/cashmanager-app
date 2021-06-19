import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../hooks/Auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
	const loading = false;
	const { user } = useAuth();
	// const user = true;

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
