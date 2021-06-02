import {api} from '../../services/api';
export interface TransactionProps {
	id: number;
	description: string;
	id_banking: number;
	current_balance: number;
	id_user: number;
	updated_at: string;
	created_at: string;
	items: any[];
	is_active: boolean;
}
export interface Month {
	month: string;
}

export async function deleteAccount(id: number) {
	const {data} = await api.delete(`/accounts/${id}`);
	return data;
}

export async function getCategories() {
	const {data} = await api.get(`/categories`);
	return data;
}
export async function getCategoryById(id: number) {
	const {data} = await api.get(`/categories/${id}`);
	return data;
}

export async function save(form: any) {
	const {data} = await api.post(`/categories`, form);
	return data;
}
