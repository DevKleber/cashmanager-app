import { api } from "../../services/api";

export async function save(form: any)
{
    const {data} = await api.post(`/credit-card`, form);
    return data;
}

export async function getCategories()
{
    const {data} = await api.get(`/categories`);
    return data;
}