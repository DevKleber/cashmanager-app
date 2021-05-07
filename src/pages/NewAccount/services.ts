import {api} from './../../services/api';

interface propsLogin {
	senha: string;
	login: string;
	name: string;
}

export function CreateAccount(form: propsLogin) {
	return api.post('/account', form).then(resp => resp.data);
}
