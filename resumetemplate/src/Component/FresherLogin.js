

import React,{Component} from 'react';
import { BrowserRouter as Router ,Switch , Route, useHistory } from 'react-router-dom'
//import UserService from '../services/UserService';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import FresherRegister from './FresherRegister';
import './Login.css'

class FresherLogin extends Component{
constructor(props){
    super(props)
    this.state={
        users:[],
        username:'',
        password:'',
        answer:''
    }
}

    handleSubmit=(e)=>{
    e.preventDefault();
    
    axios.get('http://localhost:8080/fresher'+ '/' + this.state.password+ '/' + this.state.username).
    then((response)=>{this.setState({answer: response.data}) }
    );
    
    if(this.state.answer==='Login Successfully'){
      this.props.history.push('/view');
    }
    }
  
render(){
    return (
      <div class="bg-img">
      
      <div className = "card-body">
       <div  box-sizing= "border-box">
        <h2 style={{color:"white"}}> Login </h2>
        <form method="POST" onSubmit={this.handleSubmit} >
        <label>
        <div>
        <p class="text-center"><b>USERNAME</b></p>
        
              <input
                name="username"
                value={this.state.username}
                className="form-control"
                onChange={(event)=>{this.setState({username:event.target.value})}}
                Placeholder="username"
                
               
              />
            </div>
            <div>
           
            <p class="text-center"><b>PASSWORD</b></p>
            <input
            type="password"
              name="password"
             
              value={this.state.password}
              className="form-control"
              onChange={(event)=>{this.setState({password:event.target.value})}}
              Placeholder="password"
                
             
            />
          </div>
       
      </label>
      <p></p>
      <p>
     
      <button class="btn btn-primary"  hover opacity="1">Log in</button>
      </p>
      <p style={{color:"white"}}>{this.state.answer}</p>
       

      <h4 style={{color:"white"}}>New User??? </h4><a class="white-link" href="/register"><b>Click here for Registration</b></a>

     <br></br>
      <br></br>
      <br></br>
    
      <a class="white-link" href="/freshpassforgot"><b>Forgot password????</b></a>
  
    
      </form>
         
      
      
        </div>
        </div>
        </div>
        
    )
}
}
export default FresherLogin;












