import React from 'react';

const ketentuan = [ ' < 25', ' >= 25' ];

export default function TableThree({ capres, bilik, theme, data }) {
	function filterData() {
		// console.log(data);
		let Temp = [];
		ketentuan.map((ket) => {
			Temp[ket] = [];
			data.map((d) => {
				if (eval(`${d.usia}${ket}`)) {
					Temp[ket] = [ ...Temp[ket], { pilihan: d.pilihan, bilik: d.notemp } ];
				}
			});
			bilik.map((no) => {
				let temp = [];
				Temp[ket].map((d) => {
					if (d.bilik === no) {
						temp.push(d);
					}
				});
			});
		});
		return Temp;
	}
	filterData();
	return (
		<table className={`table table-hover table-bordered table-${theme} bg-${theme} text-center `}>
			<caption>Tabel Data Penduduk</caption>
			<thead>
				<tr>
					<th rowSpan="2" className="align-middle">
						BILIK
					</th>
					<th colSpan={capres.length}> {'usia < 25'} </th>
					<th colSpan={capres.length}>{'usia > 25'}</th>
				</tr>
				<tr>
					{ketentuan.map((ket) =>
						capres.map((pres, i) => {
							return <th key={i}>{pres}</th>;
						})
					)}
				</tr>
			</thead>
			<tbody>
				{bilik.map((no, i) => {
					return (
						<tr key={i}>
							<th>{no}</th>
							{ketentuan.map((ket) => {
								return capres.map((pres) => {
									let Temp = [];
									filterData()[ket].map((d) => {
										if (d.pilihan === pres && d.bilik === no) {
											Temp.push(d);
										}
									});
									return <td key={1 * Math.random()}>{Temp.length}</td>;
								});
							})}
						</tr>
					);
				})}
				<tr>
					<th>Jumlah : </th>
					{ketentuan.map((ket, i) => {
						return (
							<td key={i} colSpan={capres.length}>
								{filterData()[ket].length}
							</td>
						);
					})}
				</tr>
			</tbody>
		</table>
	);
}
