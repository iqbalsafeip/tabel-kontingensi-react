import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './containers/main';
import One from './containers/one';
import Two from './containers/two';
import Three from './containers/three';

import { loadData, loadCapres, loadBilik } from './redux/actions';

class App extends React.Component {
	UNSAFE_componentWillMount() {
		this.props._loadData();
		this.props._loadCAPRES();
		this.props._loadBilik();
	}

	render() {
		const { table_theme, bg_theme } = this.props;
		return (
			<React.Fragment>
				<BrowserRouter>
					<div className={`bg-${bg_theme} text-${table_theme}`} style={{ minHeight: '100vh' }}>
						<Navbar theme={bg_theme} />
						<Route path="/" exact component={Main} />
						<Route path="/one" exact component={One} />
						<Route path="/two" exact component={Two} />
						<Route path="/three" exact component={Three} />
					</div>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

const MapStateToProps = (state) => ({
	bg_theme: state.bg_theme,
	table_theme: state.table_theme
});

const MapDispatchToProps = (dispatch) => ({
	_loadData: () => dispatch(loadData()),
	_loadCAPRES: () => dispatch(loadCapres()),
	_loadBilik: () => dispatch(loadBilik())
});

export default connect(MapStateToProps, MapDispatchToProps)(App);
