
import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import FormHeader from "./FormHeader";
// import FormHeader from "./FormHeader";

//import { createBrowserHistory as history} from 'history';
export class FPersonalInfo extends Component {
    constructor() {
        super()
        this.state = {
            answer: "",
            fresherName: "",
            email: "",
            contactNo: "",
            age: "",
            address: "",
            fresherNameError: "",
            emailError: "",
            contactNoError: "",
            ageError: "",
            hscPercentError: "",
            sscPercentError: "",
            degreeError: "",
            branchError: "",
            degreePercentError: "",
            noOfBacklogsError: "",
            yeargapError: "",
            skills: [
                {

                    skillName: "java"

                }
            ],

            hobbies: [
                {

                    hobbyName: ""

                }
            ],
            projects: [
                {

                    projectName: "",
                    year: "2018"

                }
            ],
            academic: {
                hscPercent: "",
                sscPercent: "",
                degree: "",
                branch: "",
                degreePercent: "",
                noOfBacklogs: "",
                yeargap: ""

            }
        }


    }


    validate = () => {
        let fresherNameError = "";
        let emailError = "";
        let contactNoError = "";
        let ageError = "";
        let hscPercentError = ""
        let sscPercentError = ""
        let degreeError = ""
        let branchError = ""
        let degreePercentError = ""
        let noOfBacklogsError = ""
        let yeargapError = ""
        if (!this.state.fresherName) {
            fresherNameError = "Name cannot be blank";
        }
        else if (!this.state.fresherName.match(/^[a-zA-Z\s]+$/)) {
            fresherNameError = " Name includes only alphabets";
        }
        if (!this.state.email) {
            emailError = "Email cannot be blank";
        }
        else if (!this.state.email.match("\\S+?@\\S+?\\.com")) {
            emailError = "Enter valid mailid";
        }
        if (!this.state.contactNo) {
            contactNoError = "Contact Number cannot be blank ";
        }
        else if (!this.state.contactNo.match("^[6-9]\\d{9}$")) {
            contactNoError = "Plz Enter valid 10 digit contact number ";
        }
        if (!this.state.age) {
            ageError = "Age cannot be blank";
        }
        else if (!this.state.age.match("^[1-9]{1,2}$")) {
            ageError = "Enter valid age";
        }
        if (!this.state.academic.hscPercent) {
            hscPercentError = "Please Enter HSC percentage"
        }
        else if (!this.state.academic.hscPercent.match("^[1-9]{2}$")) {
            hscPercentError = "Enter HSC Percentage in 2 decimals"
        }
        if (!this.state.academic.sscPercent) {
            sscPercentError = "Please Enter SSC percentage"
        }
        else if (!this.state.academic.sscPercent.match("^[1-9]{2}$")) {
            sscPercentError = "Enter SSC Percentage in 2 decimals"
        }
        if (!this.state.academic.degree.match(/^[a-zA-Z\s]+$/)) {
            degreeError = "Degree name must include only alphabets"
        }
        if (!this.state.academic.branch.match(/^[a-zA-Z\s]+$/)) {
            branchError = "Branch name must include only alphabets"
        }
        if (!this.state.academic.degreePercent.match("^[1-9]{2}$")) {
            degreePercentError = "Enter Degree Percentage in 2 decimals"
        }
        if (!this.state.academic.noOfBacklogs.match("^[0-9]{0,2}$")) {
            noOfBacklogsError = "Number of backlogs is invalid"
        }
        if (!this.state.academic.yeargap.match("^[0-9]{0,1}$")) {
            yeargapError = "Year gap is invalid"
        }
        if (fresherNameError || emailError || contactNoError || ageError ||
            hscPercentError || sscPercentError || degreeError || branchError || degreePercentError ||
            noOfBacklogsError || yeargapError) {
            this.setState({
                fresherNameError, emailError, contactNoError, ageError,
                hscPercentError, sscPercentError, degreeError, branchError, degreePercentError, noOfBacklogsError, yeargapError
            })
            return false
        }
        return true
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            alert("kindly note down unique resume id after save resume!!!!!")

            const URI = "http://localhost:8080/fresher/save";
            axios.post(URI, this.state).then((response) => {
                this.setState({ answer: response.data })
            })
                .catch((error) => console.log(error));


            /* let b = {
         
               name: register.username,
               mailid: register.mail,
               password: register.password
             };
             console.log(b);*/

        }

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
        let project = { ...projects[0] };
        project.projectName = e.target.value;
        projects[0] = project;
        this.setState({ projects });
    }
    handlehobbyChange = (e) => {
        let hobbies = [this.state.hobbies];
        let hobby = { ...hobbies[0] };
        hobby.hobbyName = e.target.value;
        hobbies[0] = hobby;
        this.setState({ hobbies });
    }


    render() {
        return (
            <div>
                <FormHeader></FormHeader>
                <div className="card col-lg-6 offset-md-3 offset-md-3">
                    <div className="card-body">


                        <form method="POST" onSubmit={this.handleSubmit}>

                            <label>
                                <h2 className="text-upper text-center text-dark">PERSONAL INFORMATION</h2>

                                <div class="row">
                                    <div class="col">

                                        <p class="text-left">Name</p>
                                        <input
                                            type="text"
                                            value={this.state.fresherName}
                                            onChange={(e) => this.setState({ fresherName: e.target.value })}
                                            class="form-control"
                                            Placeholder="enter name"
                                        />
                                        <p style={{ color: "red" }}>{this.state.fresherNameError}</p>
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
                                        <p style={{ color: "red" }}>{this.state.emailError}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-left">Contact No.</p>
                                        <input
                                            type="text"
                                            value={this.state.contactNo}
                                            className="form-control"
                                            onChange={(e) => this.setState({ contactNo: e.target.value })}
                                            Placeholder="enter contact no"
                                        />

                                        <p style={{ color: "red" }}>{this.state.contactNoError}</p>

                                    </div>

                                    <div class="col">
                                        <p class="text-left">Age</p>
                                        <input
                                            type="text"
                                            value={this.state.age}
                                            className="form-control"
                                            onChange={(e) => this.setState({ age: e.target.value })}
                                            Placeholder="enter age"
                                        />
                                        <p style={{ color: "red" }}>{this.state.ageError}</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-left">Address</p>
                                    <input
                                        type="text"
                                        value={this.state.address}
                                        className="form-control"
                                        onChange={(e) => this.setState({ address: e.target.value })}
                                        Placeholder="enter address"
                                    />
                                </div>



                                <h2 className="text-upper text-center text-dark">ACADEMIC INFORMATION</h2>
                                <div class="row">
                                    <div class="col">

                                        <p class="text-left">HSC %</p>
                                        <input
                                            type="text"
                                            value={this.state.academic.hscPercent}
                                            className="form-control"
                                            onChange={(e) => this.setState({ academic: { ...this.state.academic, hscPercent: e.target.value } })}
                                            Placeholder="HSC %"
                                        />
                                        <p style={{ color: "red" }}>{this.state.hscPercentError}</p>
                                    </div>
                                    <div class="col">

                                        <p class="text-left">SSC%</p>
                                        <input
                                            type="text"
                                            value={this.state.academic.sscPercent}
                                            className="form-control"
                                            onChange={(e) => this.setState({ academic: { ...this.state.academic, sscPercent: e.target.value } })}
                                            Placeholder="SSC %"
                                        />
                                        <p style={{ color: "red" }}>{this.state.sscPercentError}</p>
                                    </div>
                                </div>
                                <p></p>
                                <div class="row">
                                    <div class="col">

                                        <p class="text-left">Degree</p>
                                        <input
                                            type="text"
                                            value={this.state.academic.degree}
                                            className="form-control"
                                            onChange={(e) => this.setState({ academic: { ...this.state.academic, degree: e.target.value } })}
                                            Placeholder="Degree"
                                        />
                                        <p style={{ color: "red" }}>{this.state.degreeError}</p>
                                    </div>

                                    <div class="col">

                                        <p class="text-left">Branch</p>
                                        <input
                                            type="text"
                                            value={this.state.academic.branch}
                                            className="form-control"
                                            onChange={(e) => this.setState({ academic: { ...this.state.academic, branch: e.target.value } })}
                                            Placeholder="branch"
                                        />
                                        <p style={{ color: "red" }}>{this.state.branchError}</p>
                                    </div>
                                </div>
                                <div>

                                    <p class="text-left">Degree %</p>
                                    <input
                                        type="text"
                                        value={this.state.academic.degreePercent}
                                        className="form-control"
                                        onChange={(e) => this.setState({ academic: { ...this.state.academic, degreePercent: e.target.value } })}
                                        Placeholder="degree %"
                                    />
                                    <p style={{ color: "red" }}>{this.state.degreePercentError}</p>
                                </div>
                                <div>

                                    <p class="text-left">No Of Backlogs</p>
                                    <input
                                        type="text"
                                        value={this.state.academic.noOfBacklogs}
                                        className="form-control"
                                        onChange={(e) => this.setState({ academic: { ...this.state.academic, noOfBacklogs: e.target.value } })}
                                        Placeholder="backlogs"
                                    />
                                    <p style={{ color: "red" }}>{this.state.noOfBacklogsError}</p>
                                </div>
                                <div>
                                    <p class="text-left">Year Gap</p>
                                    <input
                                        type="text"
                                        value={this.state.academic.yeargap}
                                        className="form-control"
                                        onChange={(e) => this.setState({ academic: { ...this.state.academic, yeargap: e.target.value } })}
                                        Placeholder="year"
                                    />
                                    <p style={{ color: "red" }}>{this.state.yeargapError}</p>
                                </div>
                                <h2 className="text-upper text-center text-dark">HOBBIES</h2>
                                <div>
                                    <p class="text-left">Hobby</p>
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
                                    <p class="text-left">Project name</p>
                                    <input
                                        type="text"
                                        value={this.state.projects.projectName}
                                        className="form-control"
                                        onChange={this.handleProjectsChange}
                                        Placeholder="projectname"
                                    />
                                </div>
                                <h2 className="text-upper text-center text-dark">TECHNICAL SKILLS</h2>
                                <div>
                                    <p class="text-left">technical languages / technologies</p>
                                    <input
                                        type="text"
                                        value={this.state.skills.skillName}
                                        className="form-control"
                                        onChange={this.handleSkills1Change}
                                        Placeholder="skills"
                                    />
                                </div>

                            </label>
                            <p></p>
                            <p><button class="btn btn-primary">Save</button></p>
                            <p style={{ color: "green" }}>{this.state.answer}</p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default FPersonalInfo