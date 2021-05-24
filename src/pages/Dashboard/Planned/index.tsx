import React from 'react';
import {View} from 'react-native';
import {IconText} from '../../../components/elements/Icon';
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
	TextPlanejado,
	RowHr,
} from './style';

export function DashboardPlanned({data}: any) {
	return (
		<List>
			<Title>Planejamento (Gasto/Planejado)</Title>
			{data?.map((item: any, index: number) => (
				<View key={`dashboard_planned_${index}`}>
					<ItemList>
						<ItemIcon>
							<IconText name={item.icon} />
						</ItemIcon>
						<ItemContent>
							<ItemTextDescription>
								{item.name}
							</ItemTextDescription>
							<ContainerPorcentagem>
								<Planejada>
									{((item.total * 100) / item.income).toFixed(
										2,
									)}
									% de{' '}
								</Planejada>
								<Atual>{item.value_percent}% </Atual>
							</ContainerPorcentagem>
						</ItemContent>
					</ItemList>
				</View>
			))}
		</List>
	);
}
