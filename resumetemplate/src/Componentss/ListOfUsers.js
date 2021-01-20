import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ListOfUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
    }

    
    deleteUser(userId){
        AdminService.DeleteUser(userId).then( res => {
            this.setState({users: this.state.users.filter(user=> user.userId !== userId)});
        });
    }

    componentDidMount(){
        AdminService.ListOfUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h1 className="text-center bg-dark text-light">Experienced User List</h1>
                 <br></br>
                 <div className = "row p-3 m-3">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th > userId</th>
                                    <th > PASSWORD</th>
                                    <th > ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.userId} >
                                             <td> {user.userId} </td>   
                                             <td> {user.password}</td>
                                           
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.userId)} className="btn btn-danger">Delete </button>
                                                
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

export default ListOfUsers