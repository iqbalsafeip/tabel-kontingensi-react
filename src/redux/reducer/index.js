const initState = {
	data: [],
	capres: [],
	bilik: [],
	bg_theme: 'dark',
	table_theme: 'light',
	chart_theme: 'dark',
	isDark: true
};

const reducer = (state = initState, action) => {
	if (action.type === 'TOGGLE_THEME') {
		let temp = null;
		if (!state.isDark) {
			temp = 'dark';
		}
		return {
			...state,
			bg_theme: state.table_theme,
			table_theme: state.bg_theme,
			chart_theme: temp,
			isDark: !state.isDark
		};
	}

	if (action.type === 'ADD_CAPRES') {
		return {
			...state,
			capres: [ ...state.capres, action.value ]
		};
	}

	if (action.type === 'SET_CAPRES') {
		return {
			...state,
			capres: action.value
		};
	}

	if (action.type === 'DELETE_CAPRES') {
		return {
			...state,
			capres: state.capres.filter((pres) => pres !== action.value)
		};
	}

	if (action.type === 'SET_BILIK') {
		return {
			...state,
			bilik: action.value
		};
	}

	if (action.type === 'DELETE_BILIK') {
		return {
			...state,
			bilik: state.bilik.filter((no) => no !== action.value)
		};
	}

	if (action.type === 'ADD_BILIK') {
		return {
			...state,
			bilik: [ ...state.bilik, action.value ]
		};
	}

	if (action.type === 'SET_DATA') {
		return {
			...state,
			data: action.value
		};
	}

	if (action.type === 'ADD_DATA') {
		return {
			...state,
			data: [ ...state.data, action.value ]
		};
	}

	if (action.type === 'DELETE_DATA') {
		return {
			...state,
			data: state.data.filter((data, i) => i !== action.value)
		};
	}
	return state;
};

export default reducer;
