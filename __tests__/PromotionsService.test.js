/* eslint-disable no-undef */
import 'react-native';
import PromotionsService from '../src/services/PromotionsService';
import {expect} from '@jest/globals';


describe('The GET method of the service is working', function() {

    beforeEach(() => {        
        promo = PromotionsService.getActivePromotions();
    });
    

    test('the service is called', async () => {
        expect(promo).toBeDefined();
        
    });

    test('the list is not null', async () => {
        expect(promo).not.toBeNull();
    });

    test('the service return a promise', async () => {
        expect(promo).toBeInstanceOf(Promise);        
    });

    test('the service response contains an Array', async () => {
        let promise = await promo;
        expect(promise.data).toBeInstanceOf(Array);        
    });
});
