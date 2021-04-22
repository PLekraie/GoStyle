import 'react-native';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';

import PromoList from '../src/components/PromoList';
import { expect, it } from '@jest/globals';

it('promoList render', () => {
	const filler = { data: [] };
	expect(render(<PromoList data={filler} />).toJSON()).toBeDefined();
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

	it('the button inside the modal makes the modal disappear', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);

		const button = getByTestId('openModalButton');
		act(() => {
			fireEvent.press(button);
		});

		const modal = getByTestId('modalList');

		const buttonInside = getByTestId('backToScanner');
		act(() => {
			fireEvent.press(buttonInside);
		});

		expect(modal.props.visible).toBeFalsy();
	});
});



describe('FlatList should display correctly', () => {
	it('FlatList should receive array', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);

		const flatList = getByTestId('flatList');

		expect(flatList.props.data).toBeInstanceOf(Array);
	});

	it('FlatList should display message when empty', () => {
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);

		const text = getByTestId('emptyMessage');

		expect(text).toBeDefined();
	});

	it('FlatList receive list correctly', () => {
		const filler = { data: [{ description: 'test', montant: 0, qrcode: 'test' }] };
		const { getByTestId } = render(<PromoList data={filler} />);

		const flatList = getByTestId('flatList');

		expect(flatList.props.data).toMatchObject([{ description: 'test', montant: 0, qrcode: 'test' }]);
	});

	/*it('FlatList display list correctly', () => {//TODO check le Text ?
		const filler = { data: [] };
		const { getByTestId } = render(<PromoList data={filler} />);
	
		const modal = getByTestId('modalList');
	
		expect(modal.props.visible).toBeFalsy();
	});*/
});
