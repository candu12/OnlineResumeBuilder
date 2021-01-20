import React from 'react';


import axios from 'axios';
import FormHeader from './FormHeader';
import './Login.css'

class EditFresher extends React.Component{
constructor(props){
    super(props)
    this.state={
        users:[],
        answer:"",
        fresherId:this.props.match.params.fresherId,
       
        fresherName: "",
            email: "",
            contactNo: "",
            age: " ",
            address:"",
            fresherNameError:"",
            emailError: "",
            contactNoError: "",
            skills: [
              {

                  skillName: ""

              }
          ],
            
            hobbies: [
                {
                    
                    hobbyName: " "
            
                }
            ],
            projects: [
                {
                    
                    projectName: "",
                    year: "2018"
                    
                }
            ],
            academic:{
                hscPercent: "",
               sscPercent: "",
               degree: "",
               branch: "",
               degreePercent: "",
               noOfBacklogs: " ",
               yeargap: " "
               
           }
        }



    }
    componentWillMount(){
      axios.get('http://localhost:8080/fresher' + '/'+this.state.fresherId).then((response)=>{
        this.setState({users: response.data})
        console.log(this.state.users.fresherName);
        this.setState({fresherName:this.state.users.fresherName});
        
    this.setState({email:this.state.users.email});
        
    this.setState({age:this.state.users.age});
    this.setState({contactNo:this.state.users.contactNo});
    this.setState({address:this.state.users.address});
    
   var projects={...this.state.projects};
   projects.projectName=this.state.users?.projects?.[0]?.projectName;
   this.setState({projects});

   var skills={...this.state.skills};
   skills.skillName=this.state.users?.skills?.[0]?.skillName;
   this.setState({skills});

   var hobbies={...this.state.hobbies};
   hobbies.hobbyName=this.state.users?.hobbies?.[0]?.hobbyName;
   this.setState({hobbies});

   var academic={...this.state.academic};
   academic.hscPercent=this.state.users?.academic?.hscPercent
   academic.sscPercent=this.state.users?.academic?.sscPercent
   academic.degree=this.state.users?.academic?.degree
   academic.branch=this.state.users?.academic?.branch
   academic.degreePercent=this.state.users?.academic?.degreePercent
   academic.noOfBacklogs=this.state.users?.academic?.noOfBacklogs
   academic.yeargap=this.state.users?.academic?.yeargap
   this.setState({academic});

    });
    
   
           
    }
    

    
      handleSkills1Change = (e) => {

        // 1. Make a shallow copy of the projects
        let skills = [...this.state.skills];
        // 2. Make a shallow copy of the item you want to mutate
        let skill = { ...skills[0] };
        // 3. Replace the property you're intested in
        skill.skillName = e.target.value;
        // 4. Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
        skills[0] = skill;
        // 5. Set the state to our new copy
        this.setState({ skills });
    }


    handleProjectsChange = (e) => {
        let projects = [this.state.projects];
        let project = {...projects[0]};
        project.projectName = e.target.value;
       projects[0] = project;
       this.setState({projects});
   }
   handlehobbyChange = (e) => {
    let hobbies = [this.state.hobbies];
    let hobby = {...hobbies[0]};
    hobby.hobbyName = e.target.value;
   hobbies[0] = hobby;
   this.setState({hobbies});
}

handleSubmit1 = (e) => {
  e.preventDefault();

let fbody={fresherName:this.state.fresherName,email:this.state.email,contactNo:this.state.contactNo,address:this.state.address
             , skills: [
              {
                  
                  skillName: this.state.skills?.[0]?.skillName
              
              }
          ],
          hobbies: [
              {
                  
                  hobbyName:this.state.hobbies?.[0]?.hobbyName
          
              }
          ],
          projects: [
              {
                  
                  projectName: this.state.projects?.[0]?.projectName,
                  year: ""
                  
              }
          ],
          academic:{
              hscPercent: this.state.academic?.hscPercent,
             sscPercent: this.state.academic?.sscPercent,
             degree: this.state.academic?.degree,
             branch: this.state.academic?.branch,
             degreePercent: this.state.academic?.degreePercent,
             noOfBacklogs: this.state.academic?.noOfBacklogs,
             yeargap: this.state.academic?.yeargap
             
         }};
  const URI = 'http://localhost:8080/fresher'+ '/'+this.state.fresherId;
  axios.put(URI,fbody).then((response)=>{
    this.props.history.push('/viewresume');
      this.setState({answer: response.data})
  })
  .catch((error) => console.log(error));
   }
 

render(){
    return (
   <div class="o-img">
   <FormHeader></FormHeader>
   


 <div className = "card col-lg-6 offset-md-3 offset-md-3">
 <div className = "card-body">

        
           
          <form method="POST" onSubmit={this.handleSubmit1}>
          <h2 className="text-upper text-center text-dark">PERSONAL INFORMATION</h2>
    
          
          <label>
          <div class="card-body">
          <div class="row">
          <div class="col">
          <p class="text-left">Name</p>
            <input
              type="text"
                    
              value={this.state.fresherName}
              onChange={(e) => this.setState({fresherName: e.target.value })}
              class="form-control"
              Placeholder="enter name"
            />
            <p style={{color:"red"}}>{this.state.fresherNameError}</p>
          </div>
          <div class="col">
          <p class="text-left">Email</p>
            <input
              type="text"
              
              value={this.state.email}
              className="form-control"
              onChange={(e) => this.setState({ email: e.target.value })}
              Placeholder="enter email"
            />
            
          </div>
          </div>
          <div class="row">
          <div class="col">
          <p class="text-left">ContactNo</p>
          <input
            type="text"
            value={this.state.contactNo}
            className="form-control"
            onChange={(e) => this.setState({contactNo: e.target.value })}
            Placeholder="enter contact no"
          />
                
              <p style={{color:"red"}}>{this.state.contactNoError}</p>
            
          </div>
          
          <div class="col">
          <p class="text-left">Age</p>
          <input
            type="text"
            value={this.state.age}
            className="form-control"
            onChange={(e) => this.setState({age: e.target.value })}
            Placeholder="enter age"
          />
        </div>
        </div>
        <div>
        <p class="text-left">Address</p>
        <input
          type="text"
          value={this.state.address}
          className="form-control"
          onChange={(e) => this.setState({address: e.target.value })}
          Placeholder="enter address"
        />
       </div>
       </div>
       
       
      <h2 className="text-upper text-center text-dark">ACADEMIC INFORMATION</h2>
      <div class="row">
      <div class="col">
      <p class="text-left">HSC %</p>
      <input
        type="text"
        value={this.state.academic.hscPercent}
        className="form-control"
       onChange={(e) => this.setState({ academic: { ...this.state.academic, hscPercent:e.target.value}})}
       Placeholder="HSC %"
      
      />
     </div>
       <div class="col">
       <p class="text-left">SSC %</p>
        <input
          type="text"
          value={this.state.academic.sscPercent}
          className="form-control"
         onChange={(e) => this.setState({ academic: { ...this.state.academic, sscPercent:e.target.value}})}
         Placeholder="SSC %"
        />
        </div>
       </div>
       <p></p>
       <div class="row">
       <div class="col">
       <p class="text-left">degree</p>
        <input
          type="text"
          value={this.state.academic.degree}
          className="form-control"
          onChange={(e) => this.setState({ academic: { ...this.state.academic, degree:e.target.value}})}
          Placeholder="Degree"
        
        />
       </div>

       <div class="col">
       <p class="text-left">branch</p>
       <input
         type="text"
         value={this.state.academic.branch}
         className="form-control"
         onChange={(e) => this.setState({ academic: { ...this.state.academic, branch:e.target.value}})}
         Placeholder="branch"
        
       />
      </div>
      </div>
      <div>
      <p class="text-left">Degree %</p>
        <input
          type="text"
          value={this.state.academic.degreePercent}
          className="form-control"
          onChange={(e) => this.setState({ academic: { ...this.state.academic, degreePercent:e.target.value}})}
          Placeholder="Degree %"
        />
       </div>
       <div>
       <p class="text-left">No of Backlogs</p>
        <input
          type="text"
          value={this.state.academic.noOfBacklogs}
          className="form-control"
          onChange={(e) => this.setState({ academic: { ...this.state.academic, noOfBacklogs:e.target.value}})}
          Placeholder="No of backlogs"
        />
       </div>
       <div>
       <p class="text-left">year gap</p>
        <input
          type="text"
          value={this.state.academic.yeargap}
          className="form-control"
          onChange={(e) => this.setState({ academic: { ...this.state.academic, yeargap:e.target.value}})}
          Placeholder="year gap"
        />
       </div>
       <h2 className="text-upper text-center text-dark">HOBBIES</h2>
       <div>
       <p class="text-left">hobbyname</p>
        <input
          type="text"
          value={this.state.hobbies.hobbyName}
          onChange={this.handlehobbyChange}
          className="form-control"
          Placeholder="hobbyname"
        
        />
       </div>
       <h2 className="text-upper text-center text-dark">PROJECTS</h2>
       <div>
        
        <p class="text-left">projectname</p>
        <input
          type="text"
          value={this.state.projects.projectName}
          className="form-control"
         onChange={this.handleProjectsChange}
         Placeholder="Project name"
        />
       </div>
      

       <h2 className="text-upper text-center text-dark">TECHNICAL SKILLS</h2>
                                <div>
                                    <p class="text-left">technical languages / technologies</p>
                                    <input
                                        type="text"
                                        value={this.state.skills.skillName}
                                        className="form-control"
                                        onChange={(e) => this.setState({ skills: { ...this.state.skills, skillName:e.target.value}})}
                                        Placeholder="skills"
                                    />
                                </div>
       
      
       </label>
    
          <p><button class="btn btn-primary" hover opacity="1">Save</button></p>
          <p style={{color:"green"}}>{this.state.answer}</p>
          
        </form>
        
        </div>
        </div>
        </div>
      );
    }



}

export default EditFresher