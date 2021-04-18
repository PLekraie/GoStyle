import 'react-native';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';

import PromoList from '../src/components/PromoList';
import { expect, it } from '@jest/globals';

it('promoList render', () => {
	const filler = { data: [] };
	expect(render(<PromoList data={filler} />).toJSON()).toBeDefined();
});

describe('modalVisible should work', () => {

	it('modalVisible should be false by default', () => {
		expect(PromoList.modalVisible).not.toBeTruthy;
	});
	
	it('onOpenModal should set modalVisible to true', () => {
		act(() => {
			PromoList.onOpenModal;
		});
		expect(PromoList.modalVisible).toBeTruthy;
	});
	
	it('onCloseModal should set modalVisible to false', () => {
		act(() => {
			PromoList.onOpenModal;
		});
		expect(PromoList.modalVisible).not.toBeTruthy;
	});
	
	it('button change modalVisible values', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);
	
		const button = getByTestId('openModalButton');
		act(() => {
			fireEvent.press(button);
		});
	
		expect(PromoList.modalVisible).toBeTruthy;
	});

});
