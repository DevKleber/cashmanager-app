import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from './../../services/api';

interface propsLogin {
	senha: string;
	login: string;
}

export async function clearAllData() {
	const keys = await AsyncStorage.getAllKeys();
	await AsyncStorage.multiRemove(keys);
}

export async function userIsLoggedin() {
	const token = await AsyncStorage.getItem('@CashManager:token');

	clearAllData();

	if (token === null) {
		return false;
	} else {
		return true;
	}
}

async function saveUser() {
	await AsyncStorage.multiSet([
		['@CashManager:token', 'asdklfasdf'],
		['@CashManager:user', JSON.stringify({name: 'kleber'})],
	]);
}

export async function LoginIn(form: propsLogin) {
	const {data} = await api.post('/auth/login', form);
	console.log(data);
	saveUser();

	return data;
}
