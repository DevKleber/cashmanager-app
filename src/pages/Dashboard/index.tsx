import React, { useEffect, useState } from 'react';
import { RefreshControl, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { DashboardIncome } from './Income';
import { DashboardIncomeOutcome } from './IncomeOutcome';
import { DashboardProps } from './Interface';
import { DashboardOutcome } from './Outcome';
import { DashboardPlanned } from './Planned';
import { Sammary } from './Sammary';
import { getDashboardData } from './services';

import { Wrapper, Container, ContainerItem, Card } from './style';

export function Dashboard() {
	const navigate = useNavigation();
	const [dashboard, setDasboard] = useState<DashboardProps>({} as DashboardProps);
	const [refreshing, setRefreshing] = useState<boolean>(false);

	async function getDataToDashboard() {
		const data: DashboardProps = await getDashboardData();

		data.entradasDoAno.datasets[0].color = (opacity = 1) => `rgba(42, 0, 79, ${opacity})`;
		data.saidasDoAno.datasets[0].color = (opacity = 1) => `rgba(42, 0, 79, ${opacity})`;
		setDasboard(data);
	}

	const wait = (timeout: number) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	function loadData() {
		setColor();
		getDataToDashboard();
	}

	function setColor() {
		StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('#f0f2f5');
	}

	useEffect(() => {
		return navigate.addListener('focus', () => loadData());
	}, [refreshing]);

	return (
		<Wrapper>
			<Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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
							totalEntrada={Number(dashboard?.totalEntradas?.total)}
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
						<DashboardPlanned
							data={dashboard?.planejamento}
							planejamentoSemMovimentacao={dashboard?.planejamentoSemMovimentacao}
						/>
					</Card>
				</ContainerItem>
			</Container>
		</Wrapper>
	);
}

const style = {
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		shadowOpacity: 0.25,
		elevation: 2,
	},
};
