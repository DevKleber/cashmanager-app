/* eslint-disable camelcase */

export interface TransactionProps {
	created_at: string;
	currenct_installment: number;
	description: string;
	due_date: string;
	icon: string;
	id: number;
	id_transaction: number;
	installment: number;
	is_income: boolean;
	is_paid: boolean;
	name: string;
	name_category: string;
	name_parent: string;
	updated_at: string;
	value: string;
}
