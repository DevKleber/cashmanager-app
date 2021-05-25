import React, {useEffect, useState} from 'react';
import {IconText} from '../../components/elements/Icon';
import {Sammary} from './Sammary';

import {
	Wrapper,
	Container,
	Button,
	Months,
	MonthLabel,
	ContainerItem,
	Card,
} from './style';
import {DashboardIncome} from './Income';
import {DashboardOutcome} from './Outcome';
import {DashboardCategory} from './Category';
import {DashboardPlanned} from './Planned';
import {DashboardIncomeOutcome} from './IncomeOutcome';
import {getDashboardData} from './services';
import {DashboardProps} from './Interface';

export function Dashboard() {
	const [dashboard, setDasboard] = useState<DashboardProps>(
		{} as DashboardProps,
	);

	async function getDataToDashboard() {
		const data: DashboardProps = await getDashboardData();
		data.entradasDoAno.datasets[0].color = (opacity = 1) =>
			`rgba(42, 0, 79, ${opacity})`;
		data.saidasDoAno.datasets[0].color = (opacity = 1) =>
			`rgba(42, 0, 79, ${opacity})`;
		setDasboard(data);
		
	}

	useEffect(() => {
		getDataToDashboard();
	}, []);

	return (
		<Wrapper>
			<Container>
				<Months>
					<Button>
						<IconText name="navigate-before" size={20} />
					</Button>
					<MonthLabel>Abril</MonthLabel>
					<Button>
						<IconText name="navigate-next" size={20} />
					</Button>
				</Months>
				<Sammary
					fisrtCard={{
						title: 'Entradas',
						value: Number(dashboard?.totalEntradas?.total),
					}}
					middleCard={{
						title: 'Saidas',
						value: Number(dashboard?.totalSaida?.total),
					}}
					lastCard={{
						title: 'Planejamento',
						value: dashboard?.totalPlanejamento,
					}}
				/>
				<ContainerItem>
					<Card style={style.boxShadow}>
						<DashboardIncomeOutcome
							totalEntrada={Number(
								dashboard?.totalEntradas?.total,
							)}
							totalSaida={Number(dashboard?.totalSaida?.total)}
						/>
					</Card>
					<Card style={style.boxShadow}>
						<DashboardIncome data={dashboard?.entradasDoAno} />
					</Card>
					<Card style={style.boxShadow}>
						<DashboardOutcome data={dashboard?.saidasDoAno} />
					</Card>
					<Card style={style.boxShadow}>
						{/* <DashboardCategory data={dashboard?.categoriasDoAno} /> */}
						<DashboardPlanned data={dashboard?.planejamento} />
					</Card>
				</ContainerItem>
			</Container>
		</Wrapper>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 4},
		shadowRadius: 4,
		shadowOpacity: 0.25,
		elevation: 2,
	},
};
