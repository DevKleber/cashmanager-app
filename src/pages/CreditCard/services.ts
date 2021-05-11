import { api } from "../../services/api";
export interface CreditCard {
    id: number,
    name: string,
    id_user: number,
    due_day: number,
    closing_day: number,
    updated_at: string,
    created_at: string,
    items: any[],
    total: number
}

export async function getCreditCardById(id: number)
{
    const {data} = await api.get(`/credit-card/${id}`);
    return data;
}

export async function save(form: any)
{
    const {data} = await api.post(`/credit-card`, form);
    return data;
}

export async function getCreditCards()
{
    const {data} = await api.get(`/credit-card`);
    console.log(data);
    return data;
}