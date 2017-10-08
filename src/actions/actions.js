import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from './actionTypes';

export function increaseCount() {
	return {
		type: INCREASE_COUNT
	};
}

export function decreaseCount() {
	return {
		type: DECREASE_COUNT
	};
}

export function resetCount() {
	return {
		type: RESET_COUNT
	};
}
