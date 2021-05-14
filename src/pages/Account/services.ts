import { api } from "../../services/api";
export interface AccountProps {
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

export interface Month {
    month: string,
}

export async function getAccountById(id: number, month: number = 0)
{
    const {data} = await api.get(`/account/${id}`, {
        params: {
            month
        }
    });
    return data;
}

export async function deleteAccount(id: number)
{
    const {data} = await api.delete(`/account/${id}`);
    return data;
}


export async function update(form: any)
{
    const {data} = await api.put(`/account/${form.id}`, form);
    return data;
}

export async function save(form: any)
{
    const {data} = await api.post(`/account`, form);
    return data;
}

export async function getAccounts()
{
    const {data} = await api.get(`/account`);
    return data;
}

export function getMonths(): Month[]
{
    return [
        {
            month: 'Janeiro'
        },
        {
            month: 'Fevereiro',
        },
        {
            month: 'Março',
        },
        {
            month: 'Abril',
        },
        {
            month: 'Maio',
        },
        {
            month: 'Junho',
        },
        {
            month: 'Julho',
        },
        {
            month: 'Agosto',
        },
        {
            month: 'Setembro',
        },
        {
            month: 'Outubro',
        },
        {
            month: 'Novembro',
        },
        {
            month: 'Dezembro',
        },

    ]
}