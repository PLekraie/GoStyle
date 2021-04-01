/* eslint-disable no-undef */
//const { default: App } = require('../App');
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
//const app = require('./App');

/*
it('you can render the app', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  return tree;
})
*/

describe('Testing', () =>
  it('renders correctly', () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toBeDefined();
  })
);