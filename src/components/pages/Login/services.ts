import { api } from "../../../services/api";

interface propsLogin {
    senha: string,
    login: string,
}

export function LoginIn(form: propsLogin)
{
    return api.post('/auth', form).then(resp => resp.data)
}