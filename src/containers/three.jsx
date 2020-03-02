import React from 'react';
import { connect } from 'react-redux';
import TableThree from '../components/tableThree';

class Three extends React.Component {
	UNSAFE_componentWillMount() {
		document.title = 'TABEL 3 ARAH';
	}
	render() {
		const { capres, data, table_theme, bilik } = this.props;
		return (
			<div className="container mt-4">
				<h1>TABEL KONTINGENSI 3 ARAH</h1>
				<TableThree data={data} capres={capres} theme={table_theme} bilik={bilik} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	capres: state.capres,
	data: state.data,
	table_theme: state.table_theme,
	bilik: state.bilik
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Three);
