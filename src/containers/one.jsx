import React from 'react';
import { connect } from 'react-redux';
import TableOne from '../components/tableOne';
import Pie from '../components/pie';

class One extends React.Component {
	UNSAFE_componentWillMount() {
		document.title = 'TABEL 1 ARAH';
	}
	countCAPRES = () => {
		const { data, capres } = this.props;
		let temp = [];
		capres.map((presiden) => {
			const filtered = data.filter((d) => d.pilihan === presiden);
			temp = [ ...temp, { capres: presiden, value: filtered.length } ];
		});
		return temp;
	};

	render() {
		const { table_theme, data } = this.props;
		return (
			<div className="container mt-4">
				<div className="row container text-center">
					<div className="col-12 col-lg-5">
						<h1>TABEL KONTINGENSI 1 ARAH</h1>
						<TableOne
							capres={this.props.capres}
							data={data}
							theme={table_theme}
							dataCapres={this.countCAPRES()}
						/>
					</div>
					<div className="col-lg-1" />
					<div className="col-12 col-lg-5">
						<h1>PIE CHART</h1>
						<Pie data={this.countCAPRES()} />
					</div>
				</div>
			</div>
		);
	}
}

const MapStateToProps = (state) => ({
	data: state.data,
	capres: state.capres,
	table_theme: state.table_theme
});

export default connect(MapStateToProps, null)(One);
