import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from './actions/actionTypes';

const initialCount = 10;
const initialState = {
	appName: 'React/Redux app',
	count: initialCount
};

export function appReducer(state = initialState, action) {
	switch (action.type) {
	case INCREASE_COUNT:
		return Object.assign({}, state, {
			count: state.count + 1
		});
	case DECREASE_COUNT:
		return Object.assign({}, state, {
			count: state.count - 1
		});
	case RESET_COUNT:
		return Object.assign({}, state, {
			count: initialCount
		});
	default:
		return state;
	}
}
