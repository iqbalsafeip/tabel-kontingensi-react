import React from 'react';

export default function TableOne({ capres, dataCapres, theme, data }) {
	return (
		<table className={`table table-hover table-bordered table-${theme} bg-${theme}`}>
			<thead>
				<tr>
					<th>KANDIDAT</th>
					<th>Banyak Orang</th>
				</tr>
			</thead>
			<tbody>
				{capres.map((presiden, i) => {
					return (
						<tr key={i}>
							<th>{presiden}</th>
							<td>{dataCapres[i].value}</td>
						</tr>
					);
				})}
				<tr>
					<th>Jumlah</th>
					<td>{data.length}</td>
				</tr>
			</tbody>
		</table>
	);
}
