/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Header from '../src/components/Header';
import {expect, it} from '@jest/globals';


test('the header renders', async () => {
    await expect(render(<Header />).toJSON()).toBeDefined();
});
