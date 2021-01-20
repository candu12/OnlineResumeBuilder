import React, { Component } from 'react';

import l3 from './l3.jpg';
class AdminMenu extends Component {
    constructor(props) {
        super(props)  

        this.state = {
                 
        }
    }
    

    render() {
        return (
           <div>
                <div class= "p-2 mb-1">
                <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                   
                    <a  href="/admin" className="navbar-brand  text-light p-3"><h3 >MENU</h3></a>
                    <a href="/admin/userslist"  className="text-light  text-light p-3">EXPERIENCED INFO</a>
                    <a href="/admin/allfreshers" className="text-light p-3">FRESHERS INFO</a>
                    
                    <a href="/admin" className="bg-dark text-light">LOGOUT</a>
                    </div>
                    </nav>
            <br></br>
            <img src={l3} className="big-banner"  height="800" width="1800" alt="Responsive"></img>
       
                    
                </header>
            </div>
           </div>
            
        )
    }
}

export default AdminMenu
