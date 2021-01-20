import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/admin";

const ADMIN_BASE_URL = "http://localhost:8080/resume";


class AdminService {

    loginAdmin(admin){
      return axios.post('http://localhost:8080/admin/login',admin);
      
    }
    forgetPassword(admin){
        return axios.put(`${ ADMIN_API_BASE_URL}/forgetpassword`,admin);
    }
    ListOfUsers(){
      return axios.get('http://localhost:8080/resume/userslist');
    }
    DeleteUser(username){
      return axios.delete(ADMIN_BASE_URL+ '/delete/' + username);
    }
    ListOfFreshers(){
      return axios.get('http://localhost:8080/fresher/allusers');
    }
    deleteFresher(username){
      return axios.delete("http://localhost:8080/fresher/deleteuser/" +username);
    }
  

}

export default new AdminService();