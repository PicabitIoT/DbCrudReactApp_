import axios from 'axios';

const DATV_API_BASE_URL = "http://localhost:18080/api/db/datvs";

class DatvService {

    getDatvs(){
        return axios.get(DATV_API_BASE_URL);
    }

    createDatv(datv){
        return axios.post(DATV_API_BASE_URL, datv);
    }

    getDatvById(datvId){
        return axios.get(DATV_API_BASE_URL + '/' + datvId);
    }

    updateDatv(datv, datvId){
        return axios.put(DATV_API_BASE_URL + '/' + datvId, datv);
    }

    deleteDatv(datvId){
        return axios.delete(DATV_API_BASE_URL + '/' + datvId);
    }
}

export default new DatvService()