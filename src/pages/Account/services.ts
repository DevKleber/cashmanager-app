import { api } from "../../services/api";
export interface AccountProps {
    id: number,
    description: string,
    id_banking: number,
    current_balance: number,
    id_user: number,
    updated_at: string,
    created_at: string,
    items: any[],
    is_active: boolean
    isDelete?: boolean
}
export interface Month {
    month: string,
}

export async function getAccountById(id: number, month: number = 0)
{
    const {data} = await api.get(`/accounts/${id}`, {
        params: {
            month
        }
    });
    return data;
}

export async function deleteAccount(id: number)
{
    const {data} = await api.delete(`/accounts/${id}`);
    return data;
}


export async function update(form: any)
{
    const {data} = await api.put(`/accounts/${form.id}`, form);
    return data;
}

export async function save(form: any)
{
    const {data} = await api.post(`/accounts`, form);
    return data;
}

export async function getAccounts()
{
    const {data} = await api.get(`/accounts`);
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