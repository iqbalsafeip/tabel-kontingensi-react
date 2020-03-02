import React from 'react';
import { PieChart } from '@opd/g2plot-react';

export default function Pie(props) {
	const config = {
		forceFit: true,
		radius: 1,
		angleField: 'value',
		colorField: 'capres',
		label: {
			visible: true,
			type: 'inner'
		}
	};

	return <PieChart {...config} data={props.data} />;
}
