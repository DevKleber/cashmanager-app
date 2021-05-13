import { api } from "../../services/api";

export async function save(form: any)
{
    const {data} = await api.post(`/planned-expenses`, form);
    return data;
}

export async function getPlannedExpenses()
{
    const {data} = await api.get(`/planned-expenses`);
    return data;
}