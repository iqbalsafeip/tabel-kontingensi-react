import React from 'react';

export default function Table(props) {
	return (
		<table className="table table-bordered table-dark bg-dark mt-2">
			<caption>Tabel Data Penduduk</caption>
			<thead>
				<tr>
					<th>No.</th>
					<th>Pilihan</th>
					<th>No Gusus</th>
					<th>usia</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((d, i) => {
					return (
						<tr key={i}>
							<th>{i + 1}</th>
							<td>{d.pilihan}</td>
							<td>{d.notemp}</td>
							<td>{d.usia}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
