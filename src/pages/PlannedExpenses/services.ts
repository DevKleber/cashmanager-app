import { api } from "../../services/api";

export async function update(form: any)
{
    const {data} = await api.put(`/planned-expenses/${form.id}`, form);
    return data;
}

export async function getPlannedExpenses()
{
    const {data} = await api.get(`/planned-expenses`);
    return data;
}