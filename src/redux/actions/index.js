export function addData(payload) {
	const data = localStorage.getItem('data');
	let Temp = [];
	if (data) {
		const parsed = JSON.parse(data);
		Temp = [ ...parsed, payload ];
		localStorage.setItem('data', JSON.stringify(Temp));
		return {
			type: 'ADD_DATA',
			value: payload
		};
	}
	localStorage.setItem('data', JSON.stringify([ payload ]));
	return {
		type: 'ADD_DATA',
		value: payload
	};
}

export function addCapres(payload) {
	const data = localStorage.getItem('capres');
	let Temp = [];
	if (data) {
		const parsed = JSON.parse(data);
		Temp = [ ...parsed, payload ];
		localStorage.setItem('capres', JSON.stringify(Temp));
		return {
			type: 'ADD_CAPRES',
			value: payload
		};
	}
	localStorage.setItem('capres', JSON.stringify([ payload ]));
	return {
		type: 'ADD_CAPRES',
		value: payload
	};
}

export function addBilik(payload) {
	const data = localStorage.getItem('bilik');
	let Temp = [];
	console.log(data);
	if (data) {
		const parsed = JSON.parse(data);
		Temp = [ ...parsed, parseInt(payload) ];
		localStorage.setItem('bilik', JSON.stringify(Temp));
		return {
			type: 'ADD_BILIK',
			value: payload
		};
	}
	localStorage.setItem('bilik', JSON.stringify([ parseInt(payload) ]));
	return {
		type: 'ADD_BILIK',
		value: parseInt(payload)
	};
}

export function loadData() {
	const data = localStorage.getItem('data');
	if (data) {
		return {
			type: 'SET_DATA',
			value: JSON.parse(data)
		};
	}

	return {
		type: 'SET_DATA',
		value: []
	};
}

export function loadCapres() {
	const data = localStorage.getItem('capres');
	if (data) {
		return {
			type: 'SET_CAPRES',
			value: JSON.parse(data)
		};
	}

	return {
		type: 'SET_CAPRES',
		value: []
	};
}

export function loadBilik() {
	const data = localStorage.getItem('bilik');
	if (data) {
		return {
			type: 'SET_BILIK',
			value: JSON.parse(data)
		};
	}

	return {
		type: 'SET_BILIK',
		value: []
	};
}

export function deleteData(id) {
	console.log(id);
	let data = JSON.parse(localStorage.getItem('data'));
	data = data.filter((e, i) => i !== id);
	localStorage.setItem('data', JSON.stringify(data));

	return {
		type: 'DELETE_DATA',
		value: id
	};
}

export function deleteBilik(_no) {
	return function(dispatch) {
		const bilik = localStorage.getItem('bilik');
		let data = localStorage.getItem('data');
		const parsed = JSON.parse(bilik).filter((no) => no !== _no);
		localStorage.setItem('bilik', JSON.stringify(parsed));
		if (data) {
			data = JSON.parse(data).filter((d) => d.notemp !== _no);
			localStorage.setItem('data', JSON.stringify(data));
			dispatch({ type: 'SET_DATA', value: data });
		}
		dispatch({
			type: 'DELETE_BILIK',
			value: _no
		});
	};
}

export function deleteKandidat(kandidat) {
	return function(dispatch) {
		const capres = localStorage.getItem('capres');
		let data = localStorage.getItem('data');
		const parsed = JSON.parse(capres).filter((kan) => kan !== kandidat);
		localStorage.setItem('capres', JSON.stringify(parsed));
		if (data) {
			data = JSON.parse(data).filter((d) => d.pilihan !== kandidat);
			localStorage.setItem('data', JSON.stringify(data));
			dispatch({ type: 'SET_DATA', value: data });
		}
		dispatch({
			type: 'DELETE_CAPRES',
			value: kandidat
		});
	};
}
