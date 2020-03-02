import React from 'react';

export default function Candidate({ capres, theme, deleteData }) {
	return (
		<table className={`table table-${theme} bg-${theme} mt-5`}>
			<caption>Tabel Kandidat</caption>
			<thead>
				<tr>
					<th>No</th>
					<th>Kandidat</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				{capres ? (
					capres.map((pres, i) => (
						<tr key={i}>
							<th>{i + 1}</th>
							<td>{pres}</td>
							<td>
								<button onClick={() => deleteData(pres)} className="btn btn-danger">
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
