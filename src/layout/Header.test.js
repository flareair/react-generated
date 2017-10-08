import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';


describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Header appName={'testApp'}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
