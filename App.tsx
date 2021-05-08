import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import { AuthProvider } from './src/hooks/Auth';

function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
			<AuthProvider>
				<View style={{flex: 1, backgroundColor: '#fff'}}>
					<Routes />
				</View>
			</AuthProvider>
		</NavigationContainer>
	);
}

export default App;
