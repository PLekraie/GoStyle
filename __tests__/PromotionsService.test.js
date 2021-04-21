/* eslint-disable no-undef */
import 'react-native';
import PromotionsService from '../src/services/PromotionsService';
import {expect} from '@jest/globals';


describe('The service is working', function() {

    beforeEach(() => {        
        promo = PromotionsService.getActivePromotions();
    });
    

    test('the service is called', async () => {
        expect(promo).toBeDefined();
        
    });

    test('the list is not null', async () => {
        expect(promo).not.toBeNull();
    });

});
