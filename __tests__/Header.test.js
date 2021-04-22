import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../src/components/Header';
import {expect, it} from '@jest/globals';


it('the header renders', () => {
    expect(render(<Header />).toJSON()).toBeDefined();
});
