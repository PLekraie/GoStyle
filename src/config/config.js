import axios from "axios";

const instance = axios.create({
  baseURL:'http://51.254.205.197:8082/rest/promotions/'
});

export default instance;

/*export default {

    api: {
      baseURL: 'http://51.254.205.197:8082/rest/promotions/',
    },
  };*/