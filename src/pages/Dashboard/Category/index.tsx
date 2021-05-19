import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart, PieChart} from 'react-native-chart-kit';

export function DashboardCategory() {
	const screenWidth = Dimensions.get('window').width;

	var moradia = Math.round,
		r = Math.random,
		s = 255;
	var alimentacao = Math.round,
		r = Math.random,
		s = 255;
	var produtos = Math.round,
		r = Math.random,
		s = 255;
	var cloud = Math.round,
		r = Math.random,
		s = 255;

	const dataToPie = [
		{
			name: 'Moradia',
			population: 350,
			color: `rgba(${moradia(r() * s)}, ${moradia(r() * s)}, ${moradia(
				r() * s,
			)}, 1)`,
			legendFontColor: '#7F7F7F',
		},
		{
			name: 'Alimentação',
			population: 455,
			color: `rgba(${alimentacao(r() * s)}, ${alimentacao(
				r() * s,
			)}, ${alimentacao(r() * s)}, 1)`,
			legendFontColor: '#7F7F7F',
		},
		{
			name: 'Produtos',
			population: 285,
			color: `rgba(${produtos(r() * s)}, ${produtos(r() * s)}, ${produtos(
				r() * s,
			)}, 1)`,
			legendFontColor: '#7F7F7F',
		},
		{
			name: 'Cloud',
			population: 93,
			color: `rgba(${cloud(r() * s)}, ${cloud(r() * s)}, ${cloud(
				r() * s,
			)}, 1)`,
			legendFontColor: '#7F7F7F',
		},
	];

	return (
		<PieChart
			data={dataToPie}
			width={screenWidth - 50}
			height={220}
			hasLegend={true}
			accessor={'population'}
			backgroundColor={'transparent'}
			paddingLeft={'15'}
			absolute
			chartConfig={{
				backgroundColor: '#000',
				backgroundGradientFrom: '#fff',
				backgroundGradientTo: '#fff',
				color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

				style: {
					borderRadius: 16,
				},
			}}
		/>
	);
}
