import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme} shadow`}>
			<div className="container">
				<Link className="navbar-brand" to="/">
					TABEL KONTINGENSI APP
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink activeClassName="active" exact className="nav-link" to="/">
								Main
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" exact className="nav-link" to="/one">
								Tabel 1 Arah
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/two">
								Tabel 2 Arah
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/three">
								Tabel 3 Arah
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
