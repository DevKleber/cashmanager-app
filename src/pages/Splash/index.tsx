import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '../../hooks/Auth';

export function Splash(): JSX.Element {
	const navigation = useNavigation();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) {
			setTimeout(() => {
				navigation.navigate('SignIn');
			}, 2000);
		}
	}, [user, navigation]);

	return (
		<LinearGradient colors={['#fff', '#00EB8453']} style={styles.linearGradient}>
			<Image source={require('../../assets/img/logoSplashbranco.png')} />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	linearGradient: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
