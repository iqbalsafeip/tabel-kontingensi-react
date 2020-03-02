import React from 'react';

export default function DataTable({ data, theme, deleteData }) {
	return (
		<table className={`table table-${theme} bg-${theme}`}>
			<caption>Tabel Data Pemilihan</caption>
			<thead>
				<tr>
					<th>No</th>
					<th>Kandidat</th>
					<th>Bilik</th>
					<th>Usia</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				{data ? (
					data.map((d, i) => (
						<tr key={i}>
							<th>{i + 1}</th>
							<td>{d.pilihan}</td>
							<td>{d.notemp}</td>
							<td>{d.usia}</td>
							<td>
								<button className="btn btn-danger" onClick={() => deleteData(i)}>
									Delete
								</button>
							</td>
						</tr>
					))
				) : null}
			</tbody>
		</table>
	);
}
