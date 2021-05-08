import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from './../../services/api';

interface propsLogin {
	password: string;
	email: string;
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
	api.post('/auth/login', form).then(res => {
        console.log(res);
        console.log(res.data)
    })
    .catch(error => console.log(error));
	// console.log(data);

	saveUser();

	// return data;
}
