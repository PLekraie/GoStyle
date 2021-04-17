/* eslint-disable no-undef */
//const { default: App } = require('../App');
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
import {expect, it} from '@jest/globals'
//const app = require('./App');


test('the app renders', async () => {
  await expect(render(<App />).toJSON()).toBeDefined();
});
