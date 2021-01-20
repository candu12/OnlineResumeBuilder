import React, { Component } from "react";
import axios from 'axios';
import ExperiencedService from '../services/ExperiencedService';

class  ExperiencedForgotPass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
            userId:'',
            password:'',
            fmessage:''
            
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let ubody={userId:this.state.userId,password:this.state.password};
        ExperiencedService.updateExperiencedPass(ubody).
        then((response)=>{
            this.props.history.push('/experience');
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
          <h4 style={{color:"blue"}}> USER ID </h4>
          
                <input
                  name="username"
                  value={this.state.userId}
                  className="form-control"
                  onChange={(event)=>{this.setState({userId:event.target.value})}}
                  Placeholder="User Id"
                  
                 
                />
              </div>
              <div>
             
              <h4 style={{color:"blue"}}> NEW PASSWORD </h4>
          
              <input
              type="password"
                name="password"
               
                value={this.state.password}
                className="form-control"
                onChange={(event)=>{this.setState({password:event.target.value})}}
                Placeholder="New Password"
                  
               
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
  export default ExperiencedForgotPass;