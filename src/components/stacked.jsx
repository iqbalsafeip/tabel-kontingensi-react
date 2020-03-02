import React from 'react';
import { StackColumnChart } from '@opd/g2plot-react';

export default function Stacked(props) {
	const config = {
		forceFit: true,
		title: {
			visible: true,
			text: '联通区域组件交互'
		},

		padding: 'auto',
		data: props.data,
		xField: 'presiden',
		yField: 'value',
		yAxis: {
			min: 0
		},
		label: {
			visible: false
		},
		stackField: 'type',
		connectedArea: {
			visible: true,
			triggerOn: 'mouseenter'
		}
	};

	return <StackColumnChart />;
}
