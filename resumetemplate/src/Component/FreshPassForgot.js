import React, { Component } from "react";
import axios from 'axios';

class FreshPassForgot extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
            username:'',
            password:'',
            fmessage:''
            
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let fbody={username:this.state.username,password:this.state.password};
        axios.patch('http://localhost:8080/fresher/forgetpass',fbody).
        then((response)=>{
            this.props.history.push('/fresher');
        }).catch((error)=>{
            
       alert(error.response.data.message);
        });
        
        }
    render() {
        return(
        <div class="p-img">
      
        <div className = "card-body">
         <div  box-sizing= "border-box">
          

         <br></br>
          <form method="POST" onSubmit={this.handleSubmit} >
          <label>
          <div>
          <h4 style={{color:"blue"}}> USERNAME </h4>
          
                <input
                  name="username"
                  value={this.state.username}
                  className="form-control"
                  onChange={(event)=>{this.setState({username:event.target.value})}}
                  Placeholder="username"
                  
                 
                />
              </div>
              <div>
             
              <h4 style={{color:"blue"}}> PASSWORD </h4>
          
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
       
        <button class="btn btn-primary"  hover opacity="1">Change Password</button>
        </p>
       
        </form>
       
          </div>
          </div>
          </div>
        )
    }
        
  }
  export default FreshPassForgot;