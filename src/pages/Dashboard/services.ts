import { api } from '../../services/api';

export async function getDashboardData(): Promise<any> {
	const { data } = await api.get(`/dashboard`);
	return data;
}
