import React,{ Component } from 'react'
import AdminService from '../services/AdminService';
import './Login.css'
class ForgetPassword extends Component{
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
        this.forgetPassword=this.forgetPassword.bind(this);
    }
    componentDidMount(){
        let admin= {id: this.state.id, username: this.state.username, password: this.state.password};
            AdminService.forgetPassword(admin).then((res) =>{
                let ad = res.data;
                this.setState({id: ad.id,
                    username: ad.username,
                    password : ad.password
                });
            });
        } 
         
         
        forgetPassword = (e) => {
            e.preventDefault();
            let admin= {id: this.state.id, username: this.state.username, password: this.state.password};
            AdminService.forgetPassword(admin).then(res =>{ this.props.history.push('/admin')
            });
        }
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
            <div class="pa-img">
            <div >
                
               
                
                <p class=" h3 text-center text-light bg-dark">Forget Password</p>
                <a href="/admin" className="text-light bg-dark float-right">Back to Home</a>
                <br></br><br></br>
                   <div className = "container bg-dark w-50">
                        <div >
                            <br></br>
                            <div className = "card ">
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label className="float-left">  ID: </label>
                                            <input placeholder="Enter your id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label className="float-left"> UserName: </label>
                                            <input placeholder="Enter your username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label className="float-left"> New Password: </label>
                                            <input placeholder="Enter your new password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-dark text-center" onClick={this.forgetPassword}>UPDATE DETAILS</button>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        )
    }

}
export default ForgetPassword