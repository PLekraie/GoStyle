import axios from 'axios';
//import config from '../config/config.js';

//const client = axios.create({baseURL: `http://51.254.205.197:8082/rest/promotions/`});

/**
 * Service class for Promotions
 */
class PromotionsService{
    /**
     * GET : Fetch Active Promotions from API
     * @returns Array of Promotions
     */
    async getActivePromotions(){
        let response = await axios.get('http://51.254.205.197:8082/rest/promotions/actifs');
        return response;
    }

    /**
     * Put : request API to activate Promotion
     * @param {string} qrCode 
     * @returns AxiosResponse
     */
    async putQrCode(qrCode){
        let response = await axios.put('http://51.254.205.197:8082/rest/promotions/activ/' + qrCode);
        return response;
    }
}

export default new PromotionsService();