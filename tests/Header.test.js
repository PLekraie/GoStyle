/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Header from '../src/components/Header';
import {expect, it} from '@jest/globals';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});