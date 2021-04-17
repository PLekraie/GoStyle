/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PromotionsService from '../src/services/PromotionsService';
import {expect, it} from '@jest/globals';




describe('The service is working', function() {
    
    const http = { get: jest.fn() };

    beforeEach(() => {
        service = new PromotionsService();
        promo = service.getActivePromotions();
    });
    

    test('the service is called', async () => {
        expect(promo).toBeDefined();
        
    });

    test('the list is not null', async () => {
        expect(promo).not.toBeNull();
    });

});
