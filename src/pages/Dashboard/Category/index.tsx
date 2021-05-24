import React from 'react';
import {Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

export function DashboardCategory({data}: any) {
	const screenWidth = Dimensions.get('window').width;

	return data != null ? (
		<PieChart
			data={data}
			width={screenWidth - 50}
			height={220}
			hasLegend={true}
			accessor={'total'}
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
	) : (
		<></>
	);
}
