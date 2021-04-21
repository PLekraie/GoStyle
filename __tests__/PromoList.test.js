import 'react-native';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';

import PromoList from '../src/components/PromoList';
import { expect, it } from '@jest/globals';

it('promoList render', () => {
	const filler = { data: [] };
	expect(render(<PromoList data={filler} />).toJSON()).toBeDefined();
});

describe('modalVisible should work by itself', () => {
	it('modalVisible should be false by default', () => {
		let promolist = new PromoList();
		expect(promolist.state.modalVisible).toBe(false);
	});

	it('onOpenModal should set modalVisible to true', () => {//TODO
		let promolist = new PromoList();
		/*act(() => {
			promolist.onOpenModal;
		});
		expect(promolist.state.modalVisible).toBe(true);*/
	});

	it('onCloseModal should set modalVisible to false', () => {//TODO
		let promolist = new PromoList();
		//console.log(promolist.updater.isMounted);
		/*act(() => {
			promolist.onCloseModal();
		});
		expect(promolist.state.modalVisible).not.toBeTruthy;*/
	});
});

describe('the modal should work with the button', () => {
	it('the modal is hidden by default', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);
	
		const modal = getByTestId('modalList');
	
		expect(modal.props.visible).toBeFalsy();
	});


	it('the button makes the modal appear', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);

		const button = getByTestId('openModalButton');
		act(() => {
			fireEvent.press(button);
		});

		const modal = getByTestId('modalList');

		expect(modal.props.visible).toBeTruthy();
	});
});


