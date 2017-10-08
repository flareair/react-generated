import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

let dataStore = null;

beforeEach(() => {
  dataStore = configureMockStore([]);
});

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={dataStore()}>
        <App />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
