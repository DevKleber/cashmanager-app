import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import environment from './environment';

const token = async () => AsyncStorage.getItem('@CashManager:token');

export const api = axios.create({
	baseURL: environment.api,
	headers: {
		Authorization: `Basic ${token}`,
	},
});

api.interceptors.response.use(
	response => response,
	error => {
		const { status, data } = error.response;

		switch (status) {
			case 500:
				Alert.alert(data.message);
				break;
			case 400:
				switch (data.error) {
					case `"Token·is·Invalid"`:
						Alert.alert(data.error);
						break;
					default:
						if (data.message) {
							Alert.alert(data.message);
						} else {
							Alert.alert(data.response);
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
