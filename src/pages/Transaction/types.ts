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

export interface transactionModalProps {
	description: string;
	name: string;
	is_income: boolean;
	id: number;
	value: string;
	icon: string;
	name_category: string;
	name_parent: string;
	itens: [transactionModalItensProps];
}
export interface transactionModalItensProps {
	id: number;
	is_paid: boolean;
	due_date: string;
	value: string;
	currenct_installment: number;
	installment: number;
	id_transaction: number;
	created_at: string;
	updated_at: string;
}
