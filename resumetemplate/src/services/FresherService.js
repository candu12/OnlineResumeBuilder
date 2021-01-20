import axios from 'axios';

const FRESHER_API__BASE_URL = "http://localhost:8080/fresher";

class FresherService {

    getResumeById(resumeId)
    {
        return axios.get(FRESHER_API__BASE_URL + '/' + resumeId);
    }  

    saveFresher(fresher) {
        return axios.post(FRESHER_API__BASE_URL + "/", fresher);
    }

    getFresherById(id) {
        return axios.get(FRESHER_API__BASE_URL + "/" + id);
    }


    deleteFresherById(id) {
        return axios.delete(FRESHER_API__BASE_URL + "/deleteFresherById/" + id);
    }

    login(user, pass) {
        return axios.get(FRESHER_API__BASE_URL + "/login" + "/" + pass + "/" + user)
    }

    register(user) {
        return axios.post(FRESHER_API__BASE_URL + "/register", user)
    }

    updateFresher(id, fresher) {
        return axios.put(FRESHER_API__BASE_URL + "/" + id, id, fresher)
    }

    getPdfGeneratedById(id, template) {
        return axios.get( 'http://localhost:8080/fresher/download' + '/' + id + '/' + template, { responseType: 'blob' });
    }

}

export default new FresherService()

