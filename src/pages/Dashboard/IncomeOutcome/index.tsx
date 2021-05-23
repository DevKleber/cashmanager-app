import React from 'react';
import {
	Chart,
	Line,
	Income,
	Outcome,
	Label,
	ValueIncome,
	Item,
	ValueOutcome,
	Value,
	Info,
	Balance,
} from './style';

export function DashboardIncomeOutcome() {
	return (
		<Balance>
			<Chart>
				<Income />
				<Outcome />
			</Chart>

			<Info>
				<Item>
					<Label>Entradas</Label>
					<ValueIncome>R$ 6.000,00</ValueIncome>
				</Item>
				<Item>
					<Label>Saídas</Label>
					<ValueOutcome>R$ 4.000,00</ValueOutcome>
				</Item>
				<Line />
				<Item>
					<Label>Saldo</Label>
					<Value>R$ 1.000,00</Value>
				</Item>
			</Info>
		</Balance>
	);
}
