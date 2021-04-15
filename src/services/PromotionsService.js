import axios from 'axios';
//import config from '../config/config.js';

//const client = axios.create({baseURL: `http://51.254.205.197:8082/rest/promotions/`});

export default class PromotionsService{
    getActivePromotions(){
        let response = axios.get('http://51.254.205.197:8082/rest/promotions/actifs');
        return response;
    }
}