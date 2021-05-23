import React from 'react';
import NumberFormat from 'react-number-format';
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
					<NumberFormat
						value={6000.0}
						prefix={'R$ '}
						displayType={'text'}
						thousandSeparator="."
						decimalSeparator=","
						renderText={value => <ValueIncome>{value}</ValueIncome>}
					/>
				</Item>
				<Item>
					<Label>Saídas</Label>
					<NumberFormat
						value={4000.0}
						prefix={'R$ '}
						displayType={'text'}
						thousandSeparator="."
						decimalSeparator=","
						renderText={value => (
							<ValueOutcome>{value}</ValueOutcome>
						)}
					/>
				</Item>
				<Line />
				<Item>
					<Label>Saldo mês</Label>
					<NumberFormat
						value={1000.0}
						prefix={'R$ '}
						displayType={'text'}
						thousandSeparator="."
						decimalSeparator=","
						renderText={value => <Value>{value}</Value>}
					/>
				</Item>
			</Info>
		</Balance>
	);
}
