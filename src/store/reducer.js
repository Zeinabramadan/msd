const initState = {
	loader: true,
	items: [],
	error: '',
	toggle: false,
}

const appReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SUCCESS_FETCH':
			return {
				...state,
				items: action.payload,
				loader: false,
			}
		case 'FAILED_FETCH':
			return {
				...state,
				error: action.payload,
				loader: false,
			}
		case 'ADD_SONG':
			return {
				...state,
				toggle: !state.toggle,
			}
		case 'CLOSE_FORM':
			return {
				...state,
				toggle: false,
			}
		default:
			return state
	}
}

export default appReducer
