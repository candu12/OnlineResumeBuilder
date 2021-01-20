import React, { Component } from 'react'
import { BsPerson } from "react-icons/bs";
import { MdLockOpen } from "react-icons/md"
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>

                <nav class=" bg-dark">

                    <a class="active" href="/admin" className="navbar-brand   text-light p-2 "><h3 >WELCOME ADMIN</h3></a>
                    <a href="/login" className="text-light  text-light "><BsPerson />LOGIN</a>
                    <a href="/forgetpassword" className="text-light p-5"><MdLockOpen />FORGETPASSWORD</a>
                    <a href="/" className="   text-light">HOME</a>

                </nav>
                <br></br>

                <img src="https://media0.giphy.com/media/gh0RRgkTXedvF0pDc0/giphy.gif?cid=ecf05e4704e793f2189e7657330a99727f3fd7abc923e942&rid=giphy.gif" width="1400" height="620" className="float-right" />
            </div>

        )
    }
}

export default HeaderComponent
