import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ListOfFreshers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
    }

    
    deleteFresher(username){
        AdminService.deleteFresher(username).then( res => {
            this.setState({users: this.state.users.filter(user=> user.username !== username)});
        });
    }

    componentDidMount(){
        AdminService.ListOfFreshers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h1 className="text-center ">Freshers User List</h1>
                 <br></br>
                 <div className = "row p-3 m-3">
                        <table className = "table table-striped table-bordered ">

                            <thead>
                                <tr>
                                    <th > USERNAME</th>
                                    <th > PASSWORD</th>
                                   
                                    <th > ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.username} >
                                             <td> {user.username} </td>   
                                             <td> {user.password}</td>
                                           
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFresher(user.username)} className="btn btn-danger">Delete </button>
                                                
                                               </td>
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                        </table>
                        <a href="/adminmenu" class="btn btn-dark">back to Menu</a>
                 </div>

            </div>
        )
    }
}

export default ListOfFreshers