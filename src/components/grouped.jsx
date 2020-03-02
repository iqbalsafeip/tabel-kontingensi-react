import React from 'react';
import { GroupColumnChart } from '@opd/g2plot-react';

export default function Grouped(props) {
	const config = {
		title: {
			visible: true,
			text: 'BILIK VS JUMLAH'
		},
		data: props.data,
		xField: 'bilik',
		yField: 'jumlah',
		yAxis: {
			min: 0
		},
		label: {
			visible: true
		},
		groupField: 'pilihan',
		theme: props.theme
	};

	return <GroupColumnChart {...config} />;
}
