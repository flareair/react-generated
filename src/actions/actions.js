import * as actionTypes from './actionTypes';

export function increaseCount() {
	return {
		type: actionTypes.INCREASE_COUNT
	};
}

export function decreaseCount() {
	return {
		type: actionTypes.DECREASE_COUNT
	};
}

export function resetCount() {
	return {
		type: actionTypes.RESET_COUNT
	};
}

export function requestValuteData(baseValute = 'RUB') {
  return {
    type: actionTypes.FETCH_VALUTE_REQUEST,
    baseValute
  };
}

export function receiveValuteData(response) {
  return {
    type: actionTypes.FETCH_VALUTE_SUCCESS,
    valutes: response.data,
    receivedAt: Date.now()
  };
}

export function handleValuteError(error) {
  return {
    type: actionTypes.FETCH_VALUTE_SUCCESS,
    error
  };
}
