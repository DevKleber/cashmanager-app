import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import {AuthProvider} from './src/hooks/Auth';
import {SafeAreaView} from 'react-native-safe-area-context';

function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#F0F2F5" />
			<AuthProvider>
				<SafeAreaView style={{flex: 1}}>
					<Routes />
				</SafeAreaView>
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App;
