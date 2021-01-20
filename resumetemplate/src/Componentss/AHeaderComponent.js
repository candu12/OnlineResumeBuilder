import React, { Component } from 'react'
// import { MDBAnimation } from "mdbreact";
import {BsPerson} from "react-icons/bs";
import {MdLockOpen} from "react-icons/md";
import l2 from './l2.jpg';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    

    render() {
        return ( 
            <div>
            
            <div>
                <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="active" href="/admin" className="navbar-brand  text-light p-1 "><h3 >WELCOME ADMIN</h3></a>
                    <a href="/login"  className="text-light  text-light "><BsPerson />LOGIN</a>
                    <a href="/forgetpassword" className="text-light p-5"><MdLockOpen/>FORGETPASSWORD</a>
                    <a href="/"className="bg-dark   text-light">HOME</a>
                    </div>
                    </nav>
            <br></br>
            <img src={l2} className="big-banner"  height="800" width="1800" alt="Responsive"></img>
       
                    
                </header>
            </div>
           
            </div>
)
    }
}

export default HeaderComponent
