import { api } from "../../services/api";
export interface TransactionProps {
    id: number,
    description: string,
    id_banking: number,
    current_balance: number,
    id_user: number,
    updated_at: string,
    created_at: string,
    items: any[],
    is_active: boolean
}
export interface Month {
    month: string,
}

export async function deleteAccount(id: number)
{
    const {data} = await api.delete(`/accounts/${id}`);
    return data;
}

export async function getCategoriesByType(type: string = '')
{
    const {data} = await api.get(`/categories`, {
                params: {
                    type
                }
            });
    return data;
}

export async function getCategories()
{
    const {data} = await api.get(`/categories`);
    return data;
}

export async function save(form: any)
{ 
    const {data} = await api.post(`/transactions`, form);
    return data;
}

export const optionsIsPaid = [
    {label: 'Pago', value: true},
    {label: 'A pagar', value: false}
];


export const optionsParcel = [
    {label: '1x', value: '1'},
    {label: '2x', value: '2'},
    {label: '3x', value: '3'},
    {label: '4x', value: '4'},
    {label: '5x', value: '5'},
    {label: '6x', value: '6'},
    {label: '7x', value: '7'},
    {label: '8x', value: '8'},
    {label: '9x', value: '9'},
    {label: '10x', value: '10'},
    {label: '11x', value: '11'},
    {label: '12x', value: '12'},
];
export async function getTransactions(month:number = 0)
{
    const {data} = await api.get(`/transactions`, {
        params: {
            month
        }
    });

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