import {api} from './../../services/api';

interface propsForgotPassword {
	email: string;
}

export function RecoveryPassword(form: propsForgotPassword) {
	return api.post('/recovery', form).then(resp => resp.data);
}
