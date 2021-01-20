import React, { useState } from "react";
import axios from 'axios';
import ExperiencedService from '../services/ExperiencedService'

function ExperiencedRegister() {
    const [register, setRegister] = useState({
        userId: "",
        password: "",
        userIdError: "",
        passwordError: "",
        answer:"",
        isprocess:true

      });

     let  validate=()=>
      {
        let userIdError="";
        let passwordError="";
        
        if(!register.userId.match(/^[a-zA-Z0-9\s]+$/))
      {
        userIdError=" Id can't be empty and can only include alphabets and numbers";
      }
      if(!register.password.match("[A-Za-z0-9]{5,}"))
      {
        passwordError="Password should be atleast 5 characters and alphanumeric e.g: asR34 ";
      }
       
  
        if(userIdError || passwordError)
        {
          setRegister({userIdError,passwordError})
          return false
        }
        return true
      }

      let handleSubmit = (e) => {
        
        e.preventDefault();
        const isValid = validate();
      if(isValid)
      {
       
    
    // axios
    //   .post(URI, register).then((response)=>{
    //     setRegister({answer: response.data})
    // })
    //   .catch((error) => console.log(error));

    let user={
      userId:register.userId,
      password:register.password
    }

    ExperiencedService.register(user).then((response)=>{setRegister({answer: response.data})}).
    catch((error) => console.log(error))
      
      }
     
    }
    
    return (
        <div class="bg-img">
        <div id="register">
        <h3 style={{color:"white"}}>REGISTRATION</h3>
          <form method="POST" onSubmit={handleSubmit}>
          <label>
          <div>
          <p class="text-center"><b>USERNAME</b></p>
            <input
              type="text"
              value={register.userId}
              onChange={(e) => setRegister({ ...register, userId: e.target.value })}
              className="form-control"
            />
            <p style={{color:"red"}}>{register.userIdError}</p>
          </div>
          <div>
          <p class="text-center"><b>PASSWORD</b></p>
          <input
            type="text"
            value={register.password}
            className="form-control"
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
                
              <p style={{color:"red"}}>{register.passwordError}</p>
            
          </div>
          </label>
          <p><button class="btn btn-primary" hover opacity="1">Register</button></p>
          <p style={{color:"green"}}>{register.answer}</p>

        </form>
        <p style={{color:"blue"}}><a class="nav-link" href="/experience">Click here to login</a></p>
        </div>
        </div>
      );
}

export default ExperiencedRegister