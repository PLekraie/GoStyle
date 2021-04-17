import 'react-native';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';

import PromoList from '../src/components/PromoList';
import { expect, it } from '@jest/globals';

it('promoList render', () => {
	const filler = { data: [] };
	expect(render(<PromoList data={filler} />).toJSON()).toBeDefined();
});

it('modalVisible should be false by default', () => {
	expect(PromoList.modalVisible).not.toBeTruthy;
});

/*it('onOpenModal should set modalVisible to true', () => {
	//TODO
	act(() => {
		PromoList.onOpenModal();
	});

	expect(PromoList.modalVisible).toBeTruthy;
});*/

it('button change modalVisible values', () => {
	const filler = { data: [] };
	const { getByTestId } = render(<PromoList data={filler} />);

	const button = getByTestId('openModalButton');
	act(() => {
		fireEvent.press(button);
	});

	expect(PromoList.modalVisible).toBeTruthy;
});
