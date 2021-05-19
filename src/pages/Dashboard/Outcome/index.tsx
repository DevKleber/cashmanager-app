import React from 'react';
import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

export function DashboardOutcome() {
	const screenWidth = Dimensions.get('window').width;

	const dataSaida = {
		labels: [
			'Jan',
			'Fev',
			'Mar',
			'Apr',
			'Mai',
			'Jun',
			'Jul',
			'Ago',
			'Set',
			'Out',
			'Nov',
			'Dez',
		],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
				color: (opacity = 1) => `rgba(42, 0, 79 , ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Saidas do ano'], // optional
	};

	return (
		<LineChart
			data={dataSaida}
			width={screenWidth - 50}
			height={220}
			verticalLabelRotation={30}
			yAxisLabel="R$"
			yAxisSuffix=""
			chartConfig={{
				backgroundColor: '#000',
				backgroundGradientFrom: '#fff',
				backgroundGradientTo: '#fff',
				color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

				style: {
					borderRadius: 16,
				},
				propsForDots: {
					r: '6',
					strokeWidth: '2',
					stroke: '#E62E4D',
				},
			}}
			style={{
				marginVertical: 8,
				borderRadius: 16,
			}}
		/>
	);
}
