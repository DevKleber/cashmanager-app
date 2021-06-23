import React from 'react';
import { View } from 'react-native';

import { IconText } from '../../../components/elements/Icon';

import {
	List,
	Title,
	ItemList,
	ItemIcon,
	ItemContent,
	ItemTextDescription,
	ContainerPorcentagem,
	Planejada,
	Atual,
} from './style';

export function DashboardPlanned({ data, planejamentoSemMovimentacao }: any) {
	return (
		<List>
			<Title>Planejamento (Gasto/Planejado)</Title>
			{data?.map((item: any) => (
				<View key={`dashboard_planned_${item.id_category}`}>
					<ItemList>
						<ItemIcon>
							<IconText name={item.icon} />
						</ItemIcon>
						<ItemContent>
							<ItemTextDescription>{item.name}</ItemTextDescription>
							<ContainerPorcentagem>
								<Planejada>{((item.total * 100) / item.income).toFixed(2)}% de </Planejada>
								<Atual>{item.value_percent}% </Atual>
							</ContainerPorcentagem>
						</ItemContent>
					</ItemList>
				</View>
			))}
			{planejamentoSemMovimentacao?.map((item: any) => (
				<View key={`dashboard_plannedSem_${item.id_category}`}>
					<ItemList>
						<ItemIcon>
							<IconText name={item.icon} />
						</ItemIcon>
						<ItemContent>
							<ItemTextDescription>{item.name}</ItemTextDescription>
							<ContainerPorcentagem>
								<Planejada>0% de </Planejada>
								<Atual>{item.value_percent}% </Atual>
							</ContainerPorcentagem>
						</ItemContent>
					</ItemList>
				</View>
			))}
		</List>
	);
}
