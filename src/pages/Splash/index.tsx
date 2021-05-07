import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {userIsLoggedin} from './../Login/services';

export function Splash() {
	const navigation = useNavigation();

	useEffect(() => {
		userIsLoggedin().then(res => {
			if (!res) {
				navigation.navigate('SignIn');
			} else {
				navigation.navigate('Dashboard');
			}
		});
		userIsLoggedin();
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
