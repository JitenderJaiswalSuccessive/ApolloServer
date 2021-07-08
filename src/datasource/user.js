import  { RESTDataSource } from 'apollo-datasource-rest';
import config   from '../config/configuration';

class UserAPI extends RESTDataSource {
  constructor(){
    super();
    this.baseURL= `${config.serviceUrl}/user`;
    // console.log("UserAPIClass"); //call in loop
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }

  getMe() {
    return this.get('/me');
  }

}

export default UserAPI;