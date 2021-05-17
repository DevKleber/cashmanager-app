import React from 'react';
import {IconText} from '../../components/elements/Icon';
import {Sammary} from './Sammary';
import {Wrapper, Container, Button, Months, MonthLabel} from './style';

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
				<Sammary />
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
		elevation: 10,
	},
};
