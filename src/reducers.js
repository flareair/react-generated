import { combineReducers } from 'redux';

import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from './actions/actionTypes';

const initialCount = 10;
const appName = 'React/Redux app';

export function metaDataReducer(state = {
  appName
}) {
  return state;
}

export function countReducer(state = initialCount, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return state + 1;
    case DECREASE_COUNT:
      return state - 1;
    case RESET_COUNT:
      return initialCount;
    default:
      return state;
  }
}

export const appReducer = combineReducers({
  metadata: metaDataReducer,
  count: countReducer
});

