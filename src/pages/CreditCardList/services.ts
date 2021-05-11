import { api } from "./../../services/api";

interface propsLogin {
    senha: string,
    login: string,
}


export async function getCreditCards()
{
    const {data} = await api.get(`/credit-card`);
    console.log(data);
    return data;
}