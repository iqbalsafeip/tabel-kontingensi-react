import React from 'react';

export default function Bilik({ bilik, theme, deleteData }) {
	return (
		<table className={`table table-${theme} bg-${theme}`}>
			<caption>Tabel BILIK</caption>
			<thead>
				<tr>
					<th>No</th>
					<th>No Bilik</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				{bilik.map((no, i) => (
					<tr key={i}>
						<th>{i + 1}</th>
						<td>{no}</td>
						<td>
							<button onClick={() => deleteData(no)} className="btn btn-danger">
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
