import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import environment from './environment';

export const api = axios.create({
	baseURL: environment.api,
});

api.interceptors.response.use(
	response => response,
	error => {
		const { status, data } = error.response;
		console.log(data.error);

		switch (status) {
			case 500:
				Alert.alert(data.message);
				break;
			case 400:
				switch (data.error) {
					case `"Token is Invalid"`:
						Alert.alert(data.error);
						break;
					default:
						if (data.message) {
							Alert.alert(data.message);
						}
						if (data.error) {
							Alert.alert(data.error);
						}

						break;
				}

				break;

			case 401:
				if (data.response) {
					Alert.alert(data.message);
				}

				if (data.message) {
					Alert.alert(data.message);
				}
				if (data.error) {
					if (data.error === 'Unauthorized') {
						Alert.alert('Usuário ou senha inválida!');
					} else {
						Alert.alert(data.message);
					}
				}

				break;
			case 405:
				Alert.alert(data.message);

				break;
			default:
				break;
		}

		throw error;
	},
);
