import axios from 'axios'

const EXPERIENCED_API_BASE_URL = "http://localhost:8080/resume";

class ExperiencedService {

    addExperienced(experienced) {
        return axios.post(EXPERIENCED_API_BASE_URL + "/addExperienced", experienced);
    }

    getExperiencedById(id) {
        return axios.get(EXPERIENCED_API_BASE_URL + "/" + id);
    }

    deleteExperiencedById(id) {
        return axios.delete(EXPERIENCED_API_BASE_URL + "/deleteExperiencedById/" + id);
    }

    login(userId, password) {
        return axios.get(EXPERIENCED_API_BASE_URL + "/login" + "/" + userId + "/" + password)
    }

    register(user) {
        return axios.post(EXPERIENCED_API_BASE_URL + "/register", user)
    }

    updateExperienced(id, experienced) {
        return axios.put(EXPERIENCED_API_BASE_URL + "/" + id, id, experienced)
    }

    getPdfGeneratedById(id, template) {
        return axios.get(EXPERIENCED_API_BASE_URL + '/' + id + '/' + template, { responseType: 'blob' });
    }


}

export default new ExperiencedService()