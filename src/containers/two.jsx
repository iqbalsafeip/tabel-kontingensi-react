import React from 'react';
import { connect } from 'react-redux';
import Grouped from '../components/grouped';
import TableTwo from '../components/tableTwo';

class Two extends React.Component {
	UNSAFE_componentWillMount() {
		document.title = 'TABEL 2 ARAH';
	}

	getData = () => {
		const { bilik, data, capres } = this.props;
		let temp = [];
		bilik.map((noBilik) => {
			const filtered = data.filter((d) => d.notemp === noBilik);
			capres.map((pres) => {
				let _temp = 0;
				filtered.map((d) => {
					if (pres === d.pilihan) {
						_temp += 1;
					}
				});
				temp = [ ...temp, { bilik: noBilik, pilihan: pres, jumlah: _temp } ];
			});
		});
		return temp;
	};

	render() {
		this.getData();
		const { capres, table_theme, bilik, chart_theme } = this.props;
		return (
			<div className="container mt-4">
				<div className="row">
					<div className="col-lg-5 col-12">
						<h2>TABEL KONTINGENSI 2 ARAH</h2>
						<TableTwo capres={capres} theme={table_theme} dataBilik={this.getData()} bilik={bilik} />
					</div>
					<div className="col-lg-1" />
					<div className="col-lg-5 col-12">
						<h2>GRUP KOLOM CHART</h2>
						<Grouped data={this.getData()} theme={chart_theme} />
					</div>
				</div>
			</div>
		);
	}
}

const MapStateToProps = (state) => ({
	data: state.data,
	capres: state.capres,
	bilik: state.bilik,
	table_theme: state.table_theme,
	bg_theme: state.bg_theme,
	chart_theme: state.chart_theme
});

export default connect(MapStateToProps, null)(Two);
