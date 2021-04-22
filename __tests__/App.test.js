import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
import {expect, it} from '@jest/globals';

it('the app render', () => {
	expect(render(<App />).toJSON()).toBeDefined();
});

describe('the app contains all the component', () => {

  const app = render(<App />);

  it('the app contains the header', () => {
    let head = app.findAllByTestId("messageHeader");
    expect(head).toBeDefined();
  });

  it('the app contains the PromoList', () => {
    let promo = app.findAllByTestId("openModalButton");
    expect(promo).toBeDefined();
  });

});
