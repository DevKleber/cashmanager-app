import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export function DashboardIncome({data}: any) {
	const screenWidth = Dimensions.get('window').width;

	return data != undefined ? (
		<LineChart
			data={data}
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
					stroke: '#00EB84',
				},
			}}
			style={{
				marginVertical: 8,
				borderRadius: 16,
			}}
		/>
	) : (
		<></>
	);
}
