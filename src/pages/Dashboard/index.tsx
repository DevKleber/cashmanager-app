import React from 'react';
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
import {DashboardIncomeOutcome} from './IncomeOutcome';

export function Dashboard() {
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
					fisrtCard={{title: 'Entradas', value: 25410.35}}
					middleCard={{title: 'Saidas', value: 25410}}
					lastCard={{title: 'Planejamento', value: 25410}}
				/>
				<ContainerItem>
					<Card style={style.boxShadow}>
						<DashboardIncomeOutcome />
					</Card>
					<Card style={style.boxShadow}>
						<DashboardIncome />
					</Card>
					<Card style={style.boxShadow}>
						<DashboardOutcome />
					</Card>
					<Card style={style.boxShadow}>
						<DashboardCategory />
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
