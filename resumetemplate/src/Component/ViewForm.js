
import React from 'react';
//import UserService from '../services/UserService';
import axios from 'axios';
import FormHeader from './FormHeader';
import './Login.css'
class ViewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",

      users: '',
      fresherId: ''
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();


    axios.get('http://localhost:8080/fresher' + '/' + this.state.fresherId).then((response) => {
      console.log(response)

      this.setState({ users: response.data })
      this.setState({
        message : "View Successfully!!!!"
      })
    }).catch((error) => {
      alert(error.response.data.message);

    });
    console.log(this.state.message);
  }
  handleEdit = (e) => {
    e.preventDefault();
    this.props.history.push(`/edit/${this.state.users.fresherId}`);


  }


  handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:8080/fresher/deletefresher' + '/' + this.state.fresherId).then((response) => {
      this.setState({ dmessage: response.data })

    });

  }

  render() {
    return (
      <div class="view-img">
        <div>
          <FormHeader></FormHeader>
          <form method="POST" onSubmit={this.handleSubmit} >
            <label>
              <div>
                <h3 class="text-drk"><b>Enter Resume Id</b></h3>

                <input
                  name="fresherId"
                  value={this.state.fresherId}
                  className="form-control"
                  onChange={(event) => { this.setState({ fresherId: event.target.value }) }}


                />
              </div>


            </label>
            <p></p>
            <p>
              <button class="btn btn-info" hover opacity="1">View Resume</button>

            </p>

          </form>

          <h2 className="text.center"></h2>
          <div class="float-sm-left">
            <div className="card row-lg-12">
              <div className="card-body">

                <h4 class="text-info"><b>PERSONAL INFO</b></h4>
                <p class="text-dark">NAME       :     {this.state.users.fresherName}</p>
                <p class="text-dark">EMAIL      :     {this.state.users.email}</p>
                <p class="text-dark">CONTACT NO :     {this.state.users.contactNo}</p>

                <p class="text-dark">ADDRESS    :      {this.state.users.address}</p>

                <h4 class="text-info"><b>ACADEMIC INFO</b></h4>
                <p class="text-dark">HSC %   : {this.state.users?.academic?.hscPercent} </p>
                <p class="text-dark">SSC %   : {this.state.users?.academic?.sscPercent} </p>
                <p class="text-dark">DEGREE   : {this.state.users?.academic?.degree} </p>
                <p class="text-dark">BRANCH   : {this.state.users?.academic?.branch} </p>
                <p class="text-dark">DEGREE %   : {this.state.users?.academic?.degreePercent} </p>
                <p class="text-dark">NO OF BACKLOGS   : {this.state.users?.academic?.noOfBacklogs} </p>
                <p class="text-dark">YEARGAP   : {this.state.users?.academic?.yeargap} </p>
                <h4 class="text-info"><b>HOBBIES</b></h4>
                <p class="text-dark">HOBBYNAME   : {this.state.users?.hobbies?.[0]?.hobbyName}</p>
                <h4 class="text-info"><b>PROJECTS</b></h4>
                <p class="text-dark">PROJECTNAME   : {this.state.users?.projects?.[0]?.projectName} </p>
                <h4 class="text-info"><b>TECHNICAL SKILL</b></h4>
                <p class="text-dark">SKILLNAME   : {this.state.users?.skills?.[0]?.skillName} </p>
              </div>
              <p></p>



            </div>
          </div>


        </div>
        <div class="float-center">
          <button id="update" className="btn-info" onClick={this.handleEdit}>Update this resume</button>
          <p></p>
          <button id="delete" className="btn-danger" onClick={this.handleDelete}>Delete this resume</button>
          <p style={{ color: "white" }}>{this.state.dmessage}</p>

        </div>

      </div>
    )
  }
}
export default ViewForm













