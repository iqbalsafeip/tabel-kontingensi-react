import React from 'react';

export default function TableTwo({ capres, dataBilik, bilik, theme }) {
	function getSum() {
		let temp = [];
		capres.map((pres) => {
			temp[pres] = 0;
			dataBilik.map((data) => {
				if (data.pilihan === pres) {
					temp[pres] += parseInt(data.jumlah);
				}
			});
		});
		return temp;
	}

	return (
		<table className={`table table-hover table-bordered table-${theme} bg-${theme}`}>
			<caption>Tabel Data Penduduk</caption>
			<thead>
				<tr>
					<th>BILIK</th>
					{capres.map((pres, i) => {
						return <th key={i}>{pres}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{bilik.map((no, i) => (
					<tr key={i}>
						<th>{no}</th>
						{dataBilik.map((d, j) => {
							if (d.bilik === no) {
								return <td key={j}>{d.jumlah}</td>;
							}
						})}
					</tr>
				))}
				<tr>
					<th>Jumlah</th>
					{capres.map((pres, i) => {
						return <td key={i}>{getSum()[pres]}</td>;
					})}
				</tr>
			</tbody>
		</table>
	);
}
