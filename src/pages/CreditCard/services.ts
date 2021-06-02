import {api} from '../../services/api';
export interface CreditCard {
	id: number;
	name: string;
	id_user: number;
	due_day: number;
	closing_day: number;
	updated_at: string;
	created_at: string;
	items: any[];
	total: number;
	isDelete?: boolean;
}

export interface Month {
	month: string;
}

export async function getCreditCardById(id: number, month: number = 0) {
	const {data} = await api.get(`/credit-card/${id}`, {
		params: {
			month,
		},
	});
	return data;
}

export async function deleteCard(id: number) {
	const {data} = await api.delete(`/credit-card/${id}`);
	return data;
}

export async function update(form: any) {
	const {data} = await api.put(`/credit-card/${form.id}`, form);
	return data;
}

export async function save(form: any) {
	const {data} = await api.post(`/credit-card`, form);
	return data;
}

export async function getCreditCards() {
	const {data} = await api.get(`/credit-card`);
	return data;
}
