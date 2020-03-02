import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu';
import Candidate from '../components/candidate';
import DataTable from '../components/dataTable';
import { addData, addCapres, addBilik, deleteKandidat, deleteData, deleteBilik } from '../redux/actions';
import Bilik from '../components/bilik';

class Main extends React.Component {
	UNSAFE_componentWillMount() {
		document.title = 'APLIKASI REKAP TABEL KONTINGENSI';
	}

	state = {
		kandidat: '',
		umur: '',
		bilik: '',
		pilihan: '',
		newkandidat: '',
		newbilik: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { newkandidat: pilihan, bilik, umur } = this.state;
		if (pilihan !== '' && bilik !== '' && umur !== '') {
			const data = {
				pilihan,
				notemp: parseInt(bilik),
				usia: parseInt(umur)
			};
			this.props._addData(data);
		}
	};

	capresSubmit = (e) => {
		e.preventDefault();
		const { kandidat } = this.state;
		if (kandidat !== '') {
			this.props._addCapres(kandidat);
		}
		this.setState({ kandidat: '' });
	};

	bilikSubmit = (e) => {
		e.preventDefault();
		const { newbilik } = this.state;
		if (newbilik !== '') {
			this.props._addBilik(newbilik);
		}
		this.setState({ newbilik: '' });
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const {
			toggleTheme,
			isDark,
			bilik,
			capres,
			data,
			table_theme,
			_deleteKandidat,
			_deleteData,
			_deleteBilik
		} = this.props;
		return (
			<div className="container mt-4">
				<h1>Main Menu</h1>
				<div className="row">
					<div className="col-lg-5">
						<Menu
							onSubmit={this.onSubmit}
							capresSubmit={this.capresSubmit}
							bilikSubmit={this.bilikSubmit}
							toggleTheme={toggleTheme}
							isDark={isDark}
							bilik={bilik}
							candidate={capres}
							onChange={this.onChange}
							newbilik={this.state.newbilik}
							newkandidat={this.state.kandidat}
						/>
						<Candidate capres={capres} deleteData={_deleteKandidat} theme={table_theme} />
						<Bilik bilik={bilik} deleteData={_deleteBilik} theme={table_theme} />
					</div>
					<div className="col-lg-1" />
					<div className="col-lg-6">
						<DataTable data={data} deleteData={_deleteData} theme={table_theme} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDark: state.isDark,
	bilik: state.bilik,
	capres: state.capres,
	data: state.data,
	table_theme: state.table_theme
});

const mapDispatchToProps = (dispatch) => ({
	toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
	_addData: (payload) => dispatch(addData(payload)),
	_addCapres: (payload) => dispatch(addCapres(payload)),
	_addBilik: (payload) => dispatch(addBilik(payload)),
	_deleteKandidat: (payload) => dispatch(deleteKandidat(payload)),
	_deleteData: (payload) => dispatch(deleteData(payload)),
	_deleteBilik: (payload) => dispatch(deleteBilik(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
