import React from 'react';

export default function Menu({
	toggleTheme,
	isDark,
	bilik,
	candidate,
	onSubmit,
	onChange,
	capresSubmit,
	bilikSubmit,
	newbilik,
	newkandidat
}) {
	return (
		<ul className="list-group list-group-flush text-dark">
			<li className="list-group-item">
				<span className="leas">Theme : </span>
				<div className="row px-5">
					<input
						type="checkbox"
						className="form-check-input"
						id="dark"
						onChange={toggleTheme}
						checked={isDark}
					/>
					<label className="form-check-label text-dark" htmlFor="dark">
						Dark
					</label>
				</div>
			</li>
			<li className="list-group-item">
				<span className="">Tambah Kandidat :</span>
				<form className="form-group" onSubmit={capresSubmit}>
					<input
						className="form-control"
						type="text"
						name="kandidat"
						onChange={onChange}
						placeholder="Nama.."
						value={newkandidat}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						Tambah
					</button>
				</form>
			</li>
			<li className="list-group-item">
				<span className="">Tambah Bilik :</span>
				<form className="form-group" onSubmit={bilikSubmit}>
					<input
						className="form-control"
						type="number"
						name="newbilik"
						onChange={onChange}
						placeholder="Nomor.."
						min="1"
						value={newbilik}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						Tambah
					</button>
				</form>
			</li>
			<li className="list-group-item">
				<span className="">Tambah Data :</span>
				<form className="form-group" onSubmit={onSubmit}>
					<input
						className="form-control"
						type="number"
						name="umur"
						onChange={onChange}
						placeholder="Usia..."
						min="17"
					/>
					<select className="form-control mt-2" onChange={onChange} name="bilik" id="bilik">
						<option value="">Pilih gugus..</option>
						{bilik.map((no, i) => (
							<option key={i} value={no}>
								{no}
							</option>
						))}
					</select>
					<select className="form-control mt-2" onChange={onChange} name="newkandidat" id="kandidat">
						<option value="">Pilih kandidat..</option>
						{candidate.map((person, i) => (
							<option key={i} value={person}>
								{person}
							</option>
						))}
					</select>
					<button type="submit" className="btn btn-primary mt-2">
						Tambah
					</button>
				</form>
			</li>
		</ul>
	);
}
