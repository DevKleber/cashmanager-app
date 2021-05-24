export interface DashboardProps {
	totalEntradas: {
		total: number;
	};
	totalSaida: {
		total: number;
	};
	totalPlanejamento: {
		total: number;
		totalPlanejado: number;
	};

	planejamento: [
		{
			id_category: number;
			name: string;
			total: number;
			value_percent: number;
			income: number;
		},
	];

	entradasDoAno: {
		labels: [];
		datasets: [
			{
				data: [];
				color: any;
				strokeWidth: number;
			},
		];
		legend: [];
	};

	saidasDoAno: {
		labels: [];
		datasets: [
			{
				data: [];
				color: any;
				strokeWidth: number;
			},
		];
		legend: [];
	};

	categoriasDoAno: [
		{
			name: string;
			total: string;
			color: string;
			legendFontColor: string;
		},
	];
}
