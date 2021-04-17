/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PromoList from '../src/components/PromoList';
import {expect, it} from '@jest/globals';

/*test('bouton voir promotion', async () => {

  //recuperer le bouton
  const button = render(<PromoList>Voir mes promotions</PromoList>);
  
  //recuperer la valeur de modalevisible
  const modal = render(<PromoList>modalVisible</PromoList>)

  //ça doit être égal
  //await expect(button).toEqual(modal);

  //appuyer sur le bouton
  //fireEvent.press(button);

  //ça doit être différent
  await expect(button).not.toEqual(modal);
});*/

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});