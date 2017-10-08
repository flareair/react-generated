import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const dataStore = configureMockStore([]);
let initialState = null;

beforeEach(() => {
  initialState = dataStore({
    metadata: {}
  });
});

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={initialState}>
        <App />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
