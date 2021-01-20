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
                
                <img src={l2} className="rounded float-left"  width="600" height="600"  alt="Responsive"></img>
               <div>
             <div className="bg-dark">
                <nav class="active p-3"  >
                    <a class="text-center text-light p-3" href="http://localhost:8080/login"> ADMIN LOGIN</a>
                    <a href="/admin" class="text-light">HOME</a>
                </nav>
                
                </div> 
                <br></br>
                <br></br>
                   <div className = "container ">
                     <div className = "row  ">
                            
                            <br></br>
                            <div className = "card col-md-7 offset-ml-5 offset-md-3">
                                
                                <div >
                                    <form class="needs-validation" novalidate>
                                        {/* <h5 className="text-danger">Please provide Login Details!!!!</h5> */}
                                    <div  >
                                            <label >  ID: </label>
                                            <input placeholder="Enter your id" type="text" className="form-control"  required
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div >
                                            <label for="username"> USERNAME: </label>
                                            <input placeholder="Enter your username" type="text" id="username" name="username" className="form-control" required
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div >
                                            <label for="password"> PASSWORD: </label>
                                            <input  type="password"  pattern=".{5,}" id="password" title="Five or more characters" placeholder="Enter your password" className="form-control" required
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        
<br></br>
                                        <button className="btn bg-dark text-light text-center" type="submit" onClick={this.loginAdmin} >Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div></div> 
                   {/* <img src={l2} className="rounded float-left"  width="600" height="600"  alt="Responsive"></img> */}
            </div>
        )
    }

}
export default LoginComponent