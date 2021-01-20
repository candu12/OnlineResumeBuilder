import React, { Component } from 'react'
import ExperiencedService from '../services/ExperiencedService'
import './Login.css'
export class ViewExResume extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            resumeId:'',
            experienced:{},
            answer:'',
            result:''
        }

        this.fetchResume=this.fetchResume.bind(this)
        this.deleteExperienced=this.deleteExperienced.bind(this)
        this.goToUpdateExperienced=this.goToUpdateExperienced.bind(this)
    }


     fetchResume=(e)=>{
        e.preventDefault()
        ExperiencedService.getExperiencedById(this.state.resumeId).then((response)=>{
            this.setState({experienced: response.data, answer:response.status})
            console.log(response.status)})
        if(this.state.experienced.firstName==undefined)
        {
            this.setState({result: 'No resume exists with the given id'})
        }
        else{
            this.setState({result: ''})
        }
        //console.log(this.state.answer)
     }

     deleteExperienced=(e)=>{
        e.preventDefault()
        ExperiencedService.deleteExperiencedById(this.state.experienced.id).catch((error) => console.log(error));
     }

     goToUpdateExperienced=(e)=>{
         e.preventDefault()
         this.props.history.push('/updateResume')
     }
         

    render() {
        return (
            <div>
            <div class="view-img">
        <form method="POST" onSubmit={this.fetchResume} >
        <label>
        <div>
        <h3 class="text-drk"><b>Enter Resume Id</b></h3>
              <input
                            name="resumeId"
                            value={this.state.resumeId}
                            className="form-control"
                            onChange={(event)=>{this.setState({resumeId:event.target.value})}}/>
              
            </div>
            
       
      </label>
      <p></p>
      <p>
      <button class="btn btn-info"  hover opacity="1">View Resume</button>
      </p>
      
      </form>
     
                <div class="float-sm-left">
      <div className = "card row-lg-12">
      <div className = "card-body"></div>
                    
        <h4 class="text-info"><b>PERSONAL INFO</b></h4>
                    <p class="text-dark">First Name:   {this.state.experienced.firstName}</p>
                    <p class="text-dark">Last Name:   {this.state.experienced.lastName}</p>
                    <p class="text-dark">Phone Number:   {this.state.experienced.phone}</p>
                    <p class="text-dark">City:   {this.state.experienced.city}</p>
                    <p class="text-dark">State:   {this.state.experienced.state}</p>
                    <p class="text-dark">Pincode:   {this.state.experienced.pincode}</p>
                    <p class="text-dark">Email Id:   {this.state.experienced.email}</p>
                    
        <h4 class="text-info"><b>Previous Work Experience:</b></h4>
                    
                    < p class="text-dark">Job Title:   {this.state.experienced?.workex?.jobTitle}</p>
                    <p class="text-dark">Name of previous organization:   {this.state.experienced?.workex?.employerName}</p>
                    <p class="text-dark">Previous Work Location City:   {this.state.experienced?.workex?.wcity}</p>
                    <p class="text-dark">Previous Work Location State:   {this.state.experienced?.workex?.wstate}</p>
                    <p class="text-dark">Starting Date:   {this.state.experienced?.workex?.fromDate}</p>
                    <p class="text-dark">Ending Date:   {this.state.experienced?.workex?.toDate}</p>
                    <h4 class="text-info"><b>Education Details</b></h4>
                   
                    <p class="text-dark">SSC Percentage:   {this.state.experienced?.education?.ssc}</p>
                    <p class="text-dark">HSC Percentage:   {this.state.experienced?.education?.hsc}</p>
                    <p class="text-dark">Name of Degree:   {this.state.experienced?.education?.degreeName}</p>
                    <p class="text-dark">Percentage of Degree:   {this.state.experienced?.education?.degreePercent}</p>
                    <p class="text-dark">Field of Study:   {this.state.experienced?.education?.fieldOfStudy}</p>
                    <p class="text-dark">Starting Date:   {this.state.experienced?.education?.startDate}</p>
                    <p class="text-dark">Ending Date:   {this.state.experienced?.education?.endDate}</p>
                    <h4 class="text-info"><b>Project</b></h4>
                    <p class="text-dark">Project:   {this.state.experienced?.projects?.[0].projects}</p>
                    <h4 class="text-info"><b>Skills</b></h4>
                    <p class="text-dark">Skill:   {this.state.experienced?.skills?.[0].skills}</p>
                   
                </div>
            </div>
            </div>
            <div class="float-center">
            <button id="update" className="btn-info" onClick={this.goToUpdateExperienced}>Update this resume</button>
            <p></p>
            <button id="delete" className="btn-danger" onClick={this.deleteExperienced}>Delete this resume</button>
            </div>
            </div>
        )
    }
}

export default ViewExResume