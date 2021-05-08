import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function Splash() {
	const navigation = useNavigation();

	useEffect(() => {
		
	}, []);

	return (
		<LinearGradient
			colors={['#fff', '#00EB8453']}
			style={styles.linearGradient}>
			<Image
				source={require('./../../assets/img/logoSplashbranco.png')}
			/>
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
