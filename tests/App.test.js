/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
import {expect, it} from '@jest/globals';


test('the app renders', async () => {
  await expect(render(<App />).toJSON()).toBeDefined();
});

/*test('bouton voir promotion', async () => {

  //recuperer le bouton
  const button = render(<App>Voir mes promotions</App>);
  
  //recuperer la valeur de modalevisible
  const modal = render(<App>modalVisible</App>)

  //ça doit être égal
  //await expect(button).toEqual(modal);

  //appuyer sur le bouton
  //fireEvent.press(button);

  //ça doit être différent
  await expect(button).not.toEqual(modal);
});*/

/*
describe('test App', () => {
  it('bouton voir promotion', () =>{
    //const push = jest.fn();
    const { getByText } = render(<App>Voir mes promotions</App>);
    const innerText = getByText(/press/i);
    const button = innerText.parent as ReactTestInstance;
    fireEvent.press(getByText(/press/i));
    expect(push).toBeCalled();
  });
});
*/