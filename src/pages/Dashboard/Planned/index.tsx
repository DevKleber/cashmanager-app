import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {IconText} from '../../../components/elements/Icon';

const List = styled.View`
	width: 100%;
	padding: 15px;
`;
const Title = styled.Text`
	font-family: 'Poppins-Regular';
	color: #666666;
`;
const ItemList = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 65px;
`;

const ItemIcon = styled.View`
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
	background-color: #f3f6fb;
	border-radius: 80px;
	margin-right: 10px;
`;

const ItemContent = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

const ItemTextDescription = styled.Text`
	flex: 1;
	font-family: 'Poppins-Bold';
	color: #989898;
`;
const ContainerPorcentagem = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	width: 100px;
`;
const Planejada = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;
const Atual = styled.Text`
	font-family: 'Poppins-Bold';
	color: #989898;
`;

const RowHr = styled.View`
	border-width: 0.5px;
	border-color: #d7d7d7;
	width: 100%;
`;

export function DashboardPlanned({data}: any) {
	return (
		<List>
			<Title>Planejamento</Title>
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
								<Atual>{item.value_percent}%</Atual>
							</ContainerPorcentagem>
						</ItemContent>
					</ItemList>
				</View>
			))}
		</List>
	);
}
