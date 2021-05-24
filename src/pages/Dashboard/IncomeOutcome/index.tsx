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

export function DashboardIncomeOutcome({totalEntrada, totalSaida}: any) {
	const total = totalEntrada + totalSaida;

	const porcentagemEntrada = (totalEntrada * 100) / total;
	const porcentagemSaida = (totalSaida * 100) / total;

	return (
		<Balance>
			<Chart>
				<Income valor={porcentagemEntrada} />
				<Outcome valor={porcentagemSaida == 0 ? 1 : porcentagemSaida} />
			</Chart>

			<Info>
				<Item>
					<Label>Entradas</Label>
					<NumberFormat
						value={totalEntrada}
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
						value={totalSaida}
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
						value={totalEntrada - totalSaida}
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
