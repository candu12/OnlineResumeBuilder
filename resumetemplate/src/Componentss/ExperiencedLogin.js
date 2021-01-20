import React, { Component } from 'react'
import ExperiencedService from '../services/ExperiencedService';
import './Login.css'
export class ExperiencedLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            users:[],
            userId:'',
            password:'',
            answer:''
        }

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    
        handleSubmit=(e)=>{
        e.preventDefault();

        // let user={
        //     userId:this.state.userId,
        //     password:this.state.password
        // }        
        // axios.get('http://localhost:8080/fresher'+ '/' + this.state.password+ '/' + this.state.username).then((response)=>{
        //     this.setState({answer: response.data})
        // });

        ExperiencedService.login(this.state.userId,this.state.password).then((response)=>{this.setState({answer: response.data})}).catch((error) => console.log(error))
        console.log(this.state.answer)
        if(this.state.answer==='Login successfull.')
        {
        this.props.history.push('/exmain')
        }
        }

        render() {
        return (
            <div class="bg-img">
            <div>
            <h3 style={{color:"white"}}>LOG IN</h3>
                <div id="login" className="card-body">
                <form method="POST" onSubmit={this.handleSubmit} >
                <label>
                <div className="form-group">
                <p class="text-center"><b>USERNAME</b></p>
                <input
                    name="username"
                    value={this.state.userId}
                    className="form-control"
                    onChange={(event)=>{this.setState({userId:event.target.value})}}/>
                </div>
                <p class="text-center"><b>PASSWORD</b></p>
                <input
                type="password"
                name="password"
                value={this.state.password}
                className="form-control"
                onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </label>
                <p>
                <p><button class="btn btn-primary" hover opacity="1">Log in</button></p>
                </p>
                <p style={{color:"white"}}>{this.state.answer}</p>
                <p style={{color:"white"}}>Don't have an account?<a class="nav-link" href="/eregister">Please click here to register</a></p>
                </form>

                
      <br></br>
     
                </div>
            </div>
            </div>
        )
    }
}

export default ExperiencedLogin