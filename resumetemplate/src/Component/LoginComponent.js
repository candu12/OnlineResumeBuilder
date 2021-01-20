import React,{ Component } from 'react'
import AdminService from '../services/AdminService';
// // import axios from 'axios';
 import l2 from './l2.jpg';
class LoginComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
           
            id: '',
            username: '',
            password: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loginAdmin=this.loginAdmin.bind(this);
        // this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){
        let admin= {id: this.state.id, username: this.state.username, password: this.state.password};
           AdminService.loginAdmin(admin).then( (res) =>{
                let ad = res.data;
                this.setState({id: ad.id,
                    username: ad.username,
                    password : ad.password
                });
            });

        } 
         
         
        loginAdmin = (e) => {
            
            e.preventDefault();
            let admin= {id: this.state.id, username: this.state.username, password: this.state.password};
             
            AdminService.loginAdmin(admin).then(res =>{ this.props.history.push('/adminmenu')})
        }

        // loginAdmin(e){
        //     e.preventDefault();
        // var apiBaseUrl = "http://localhost:3000/login";
        // var payload={
        //     id:this.state.id,
        // username:this.state.username,
        // password:this.state.password
        // }
        // axios.post(apiBaseUrl, payload)
        // .then(function (response) {
        // console.log(response);
        // if(response.data.code === 200 ){
        // alert("logged in");
        // // let admin= {id: this.state.id, username: this.state.username, password: this.state.password};
        // this.props.history.push('http://localhost:3000/adminmenu')
        // }
        // else if(response.data.code === 500){
        // alert("username password do not match")
        // }
        // else{
        //  alert("Username does not exist");
        // }
        // })
       
        // }


   
        
    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

   
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
   
    
    render() {
        return (
            <div>
                
                
               <div>

               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
               <div class="container-fluid">
             
                    <a class="text-center text-light p-3" href="/login"> ADMIN LOGIN</a>
                    <a href="/admin" class="text-light"> Back to HOME</a>
                    </div>
                </nav>
                </div>
                <div class="bg-img">
                
                <h3 style={{color:"white"}}>LOG IN</h3>
                    <div id="login" className="card-body">
                    <form class="needs-validation" novalidate>
                    <label>
                    <div className="form-group">
                    <p class="text-center text-light"><b>ID</b></p>
                    <input placeholder="Enter your id" type="text" className="form-control"  required
                    value={this.state.id} onChange={this.changeIdHandler}/>
                    </div>
                    <p class="text-center text-light"><b>USERNAME</b></p>
                    
                    <input placeholder="Enter your username" type="text" id="username" name="username" className="form-control" required
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>


                     <div className="form-group">
                    <p class="text-center text-light"><b>PASSWORD</b></p>
                    <input  type="password"  pattern=".{5,}" id="password" title="Five or more characters" placeholder="Enter your password" className="form-control" required
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>                           
                    </label>
                    <br/>
                    <button className="btn bg-light text-dark text-center" type="submit" onClick={this.loginAdmin} >Login</button>
                    </form>

                    
                </div>
                </div>
                </div>
                





        )
    }

}
export default LoginComponent