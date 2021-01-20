

import React, { useState } from "react";
import axios from 'axios';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css'

function FresherRegister() {
    const [register, setRegister] = useState({
        username: "",
        mail: "",
        password: "",
        usernameError: " ",
        mailError: "",
        passwordError: "",
        answer:"",
        isprocess:true

      });

     let  validate=()=>
      {
        let usernameError="";
        let mailError="";
        let passwordError="";
        
        if(!register.username.match(/^[a-zA-Z0-9\s]+$/))
      {
        usernameError=" name not null includes only alphabets and numbers";
      }
      if(!register.mail.match("\\S+?@\\S+?\\.com"))
      {
        mailError="Enter valid mailid";
      }
      if(!register.password.match("[A-Za-z0-9]{5,}"))
      {
        passwordError="Plz Enter Strong password min length (Alphanumeric pattern) e.g;asR34 ";
      }
       
        /*
        if(!this.state.email.match("\\S+?@\\S+?\\.com"))
        {
          emailError="Invalid email"
        }
        if(!this.state.mobile.match("^[6-9]\\d{9}$"))
        {
          mobileError="Invalid mobile number"
        }*/
        if(usernameError || mailError || passwordError)
        {
          setRegister({usernameError,mailError,passwordError})
          return false
        }
        return true
      }

      let HandleSubmit = (e) => {
        
        e.preventDefault();
        const isValid = validate();
      if(isValid)
      {
       
       
       const URI = "http://localhost:8080/fresher/registration";
    
    let b = {
      name: register.username,
      mailid: register.mail,
      password: register.password
    };
    console.log(b);
    axios
      .post(URI, register).then((response)=>{
        setRegister({answer: response.data})
    })
      .catch((error) => console.log(error));
      
      }
     
    }
    
    return (
      <div class="bg-img">
        <div class="card-body">
        
          <h3 style={{color:"white"}}>REGISTRATION</h3>



          <form method="POST" onSubmit={HandleSubmit}>
          <label>
          <div>
          <p class="text-center"><b>USERNAME</b></p>
            <input
              type="text"
              Placeholder="username"
              value={register.username}
              onChange={(e) => setRegister({ ...register, username: e.target.value })}
              className="form-control"
            />
            <p style={{color:"red"}}>{register.usernameError}</p>
          </div>
          <div>
          <p class="text-center"><b>ENTER EMAIL</b></p>
            <input
              type="text"
              Placeholder="email"
              value={register.mail}
              className="form-control"
              onChange={(e) => setRegister({ ...register, mail: e.target.value })}
            />
            <p style={{color:"red"}}>{register.mailError}</p>
          </div>
          
          <div>
          <p class="text-center"><b>PASSWORD</b></p>
          <input
            
            type="password"
            value={register.password}
            Placeholder="password"
            className="form-control"
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
                
              <p style={{color:"red"}}>{register.passwordError}</p>
            
          </div>
          </label>
          <p><button class="btn btn-primary" hover opacity="1">Register</button></p>
          <p style={{color:"white"}}>{register.answer}</p>

        </form>
        <a class="Light-link" href="/fresher"><b>now Login here..</b></a>
        </div>
        </div>
      );
}

export default FresherRegister




