import React from 'react';
import ExperiencedService from '../services/ExperiencedService';
import axios from 'axios';

class UpdateExResume extends React.Component{
constructor(props){
    super(props)
    this.state={
        experienced:{},
        answer:"",
        id:'',
       
            firstName: '',
            lastName: '',
            phone: '',
            city: '',
            state: '',
            pincode: '',   
            email: '',
            workex: {
                employerName: '',
                employerName: '',
                wcity: '',
                wstate: '',
                fromDate: '',
                toDate: ''
            },
            education: {
                ssc: '',
                hsc: '',
                degreeName: '',
                degreePercent: '',
                fieldOfStudy: '',
                startDate: '',
                endDate: ''
            },
            projects: [
                {
                    projects: ''
                },
            ],
            skills: [
                {
                    skills: ''
                },
            ]
        }



    }
    validate=()=>
      {
        let fresherNameError="";
        let emailError="";
        let phoneError=""
        
        if(!this.state.fresherName.match(/^[a-zA-Z\s]+$/))
      {
        fresherNameError=" name not null includes only alphabets";
      }
      if(!this.state.email.match("\\S+?@\\S+?\\.com"))
      {
        emailError="Enter valid mailid";
      }
      if(!this.state.phone.match("^[6-9]\\d{9}$"))
      {
        phoneError="Plz Enter valid phone 10 digit no ";
      }
       
        /*
        if(!this.state.email.match("\\S+?@\\S+?\\.com"))
        {
          emailError="Invalid email"
        }
        if(!this.state.mobile.match("^[6-9]\\d{9}$"))
        {
          mobileError="Invalid mobile number"
        }*/
        if(fresherNameError || emailError || phoneError)
        {
          this.setState({fresherNameError,emailError,phoneError})
          return false
        }
        return true
      }

    

    handleSubmit1 = (e) => {
        
        // axios.put(URI,this.state).then((response)=>{
        //     this.setState({answer: response.data})
        // })
        // .catch((error) => console.log(error));
        //  alert(this.state.answer);

        ExperiencedService.updateExperienced()
        
        
      
     
    }
    handleSkills1Change = (e) => {
        // 1. Make a shallow copy of the projects
        let skills = [...this.state.skills];
        // 2. Make a shallow copy of the item you want to mutate
        let skill = {...skills[0]};
        // 3. Replace the property you're intested in
        skill.skills = e.target.value;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        skills[0] = skill;
        // 5. Set the state to our new copy
        this.setState({skills});
    }



    handleProjects1Change = (e) => {
        // 1. Make a shallow copy of the projects
        let projects = [...this.state.projects];
        // 2. Make a shallow copy of the item you want to mutate
        let project = {...projects[0]};
        // 3. Replace the property you're intested in
        project.projects = e.target.value;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        projects[0] = project;
        // 5. Set the state to our new copy
        this.setState({projects});
    }

    handleSubmit=(e)=>{
    e.preventDefault();
    
    // axios.get('http://localhost:8080/fresher' + '/'+this.state.id).then((response)=>{
    //     this.setState({experienced: response.data})

    ExperiencedService.getExperiencedById(this.state.id).then((response)=>{
        this.setState({experienced: response.data, answer:response.status})

    });
    
    //console.log(this.state.experienced.fresherName);
    this.setState({firstName:this.state.experienced.firstName});
    this.setState({lastName:this.state.experienced.lastName});
    this.setState({email:this.state.experienced.email});
    this.setState({phone:this.state.experienced.phone});
    this.setState({city:this.state.experienced.city});
    this.setState({state:this.state.experienced.state});
    //projects?.[0]?.projects=this.state.experienced?.projects?.[0]?.projects;

    this.setState({jobTitle:this.state.experienced?.workex?.jobTitle});
    this.setState({employerName:this.state.experienced?.workex?.employerName});
    this.setState({wcity:this.state.experienced?.workex?.wcity});
    this.setState({wstate:this.state.experienced?.workex?.wstate});
    this.setState({fromDate:this.state.experienced?.workex?.fromDate});
    this.setState({toDate:this.state.experienced?.workex?.toDate});
   var projects={...this.state.projects};
   projects.projects=this.state.experienced?.projects?.[0].projects;
   this.setState({projects});

   var skills={...this.state.skills};
   skills.skills=this.state.experienced?.skills?.[0].skills;
   this.setState({skills});

//    var education={...this.state.education};
//    education.ssc=this.state.experienced?.education?.ssc
//    education.hsc=this.state.experienced?.education?.hsc
//    education.degree=this.state.experienced?.education?.degree
//    education.branch=this.state.experienced?.education?.branch
//    education.degreePercent=this.state.experienced?.education?.degreePercent
//    education.noOfBacklogs=this.state.experienced?.education?.noOfBacklogs
//    education.yeargap=this.state.experienced?.education?.yeargap
//    this.setState({education});

    this.setState({ssc:this.state.experienced?.education?.ssc});
    this.setState({hsc:this.state.experienced?.education?.hsc});
    this.setState({degreePercent:this.state.experienced?.education?.degreePercent});
    this.setState({fieldOfStudy:this.state.experienced?.education?.fieldOfStudy});
    this.setState({startDate:this.state.experienced?.education?.startDate});
    this.setState({endDate:this.state.experienced?.education?.endDate});
        
    
   
    
}
 

render(){
    return (
   <div>
   <form method="POST" onSubmit={this.handleSubmit}>
   <label>
   <div>
         <label>Enter the id of the resume which you want to update:</label>
         <input
           name="id"
           value={this.state.id}
           className="form-control"
           onChange={(event)=>{this.setState({id:event.target.value})}}
           
          
         />
       </div>
       
  
 </label>
 <p>
 <button className="btn btn-outline-info mt-3 ">Edit</button>
 </p>
 </form>



 <div>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
                <h2>Enter your personal details:</h2>
                <form method="POST">
                <div className="form-group">
                <label text-align='left'>First Name:</label>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(e) => this.setState({firstName: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>Last Name:</label>
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(e) => this.setState({lastName: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>Phone number:</label>
                <input
                    type="text"
                    value={this.state.phone}
                    onChange={(e) => this.setState({phone: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>City:</label>
                <input
                    type="text"
                    value={this.state.city}
                    onChange={(e) => this.setState({city: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>State:</label>
                <input
                    type="text"
                    value={this.state.state}
                    onChange={(e) => this.setState({state: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>Pincode:</label>
                <input
                    type="text"
                    value={this.state.pincode}
                    onChange={(e) => this.setState({pincode: e.target.value })}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label>Email Id:</label>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value })}
                    className="form-control"/>   
                </div>                
                </form>
                </div>
                </div>
                
            <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
                <h2>Past Work Experience:</h2>
                <form method="POST">
                <div className="form-group">
                <label text-align='left'>Job Title:</label>
                <input
                    type="text"
                    value={this.state.workex.jobTitle}
                    
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, jobTitle:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Name of previous organization:</label>
                <input
                    type="text"
                    value={this.state.workex.employerName}
                    
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, employerName:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Previous Work Location City:</label>
                <input
                    type="text"
                    value={this.state.workex.wcity}
                    
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, wcity:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Previous Work Location State:</label>
                <input
                    type="text"
                    value={this.state.workex.wstate}
                    
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, wstate:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Starting Date:</label>
                <input
                    type="text"
                    value={this.state.workex.fromDate}                   
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, fromDate:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Ending Date:</label>
                <input
                    type="text"
                    value={this.state.workex.toDate}                   
                    onChange={(e) => this.setState({ workex: { ...this.state.workex, toDate:e.target.value}})}
                    className="form-control"/>   
                </div>
                </form>
            </div>
            </div>

            <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
                <h2>Education:</h2>
                <form method="POST">
                <div className="form-group">
                <label text-align='left'>SSC Percentage:</label>
                <input
                    type="text"
                    value={this.state.education.ssc}                   
                    onChange={(e) => this.setState({ education: { ...this.state.education, ssc:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>HSC Percentage:</label>
                <input
                    type="text"
                    value={this.state.education.hsc}                  
                    onChange={(e) => this.setState({ education: { ...this.state.education, hsc:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Name of Degree:</label>
                <input
                    type="text"
                    value={this.state.education.degreeName}                   
                    onChange={(e) => this.setState({ education: { ...this.state.education, degreeName:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Percentage of Degree:</label>
                <input
                    type="text"
                    value={this.state.education.degreePercent}                   
                    onChange={(e) => this.setState({ education: { ...this.state.education, degreePercent:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Field of Study:</label>
                <input
                    type="text"
                    value={this.state.education.fieldOfStudy}                    
                    onChange={(e) => this.setState({ education: { ...this.state.education, fieldOfStudy:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Starting Date:</label>
                <input
                    type="text"
                    value={this.state.education.startDate}                   
                    onChange={(e) => this.setState({ education: { ...this.state.education, startDate:e.target.value}})}
                    className="form-control"/>   
                </div>
                <div className="form-group">
                <label text-align='left'>Ending Date:</label>
                <input
                    type="text"
                    value={this.state.education.endDate}
                    onChange={(e) => this.setState({ education: { ...this.state.education, endDate:e.target.value}})}
                    className="form-control"/>   
                </div>
                </form>
            </div>
            </div>

            <div className = "card col-md-6 offset-md-3 offset-md-3">
            <div className = "card-body">
                <h2>Enter your Projects:</h2>
                <form method="POST">
                <div className="form-group">
                <label text-align='left'>Project Names:</label>
                <input
                    type="text"
                    value={this.state.projects.projects1}
                    onChange={this.handleProjects1Change}
                    className="form-control"/>   
                </div>               
                </form>
                </div>
                </div>

                <div className = "card col-md-6 offset-md-3 offset-md-3">
                <div className = "card-body">
                    <h2>Enter your Skills:</h2>
                    <form method="POST" onSubmit={this.createResume}>
                    <div className="form-group">
                    <label text-align='left'>Name of Skills:</label>
                    <input
                        type="text"
                        value={this.state.skills.skills1}
                        onChange={this.handleSkills1Change}
                        className="form-control"/>   
                    </div>
                <button type="submit" className="btn btn-success">Save</button>
                <p style={{color:"green"}}>{this.state.answer}</p>               
                </form>
                </div>
                </div>
            </div>
        </div>
      );
    }
}

export default UpdateExResume