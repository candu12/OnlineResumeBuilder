import React, { Component } from 'react'
import ExperiencedService from '../services/ExperiencedService';
import 'bootstrap/dist/css/bootstrap.css';


export class CreateExResume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            phone: '',
            phoneError: '',
            city: '',
            cityError: '',
            state: '',
            stateError: '',
            pincode: '',
            pincodeError: '',
            email: '',
            emailError: '',
            jobTitleError: '',
            employerNameError: '',
            wcityError: '',
            wstateError: '',
            fromDateError: '',
            toDateError: '',
            sscError: '',
            hscError: '',
            degreeNameError: '',
            degreePercentError: '',
            fieldOfStudyError: '',
            startDateError: '',
            endDateError: '',
            projectsError: '',
            skillsError: '',
            workex: {
                jobTitle: '',

                employerName: '',

                wcity: '',

                wstate: '',

                fromDate: '',

                toDate: '',

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
            ],
            answer: ""

        }

        this.baseState = this.state

        this.createResume = this.createResume.bind(this);
        this.handleProjects1Change = this.handleProjects1Change.bind(this);
        //this.handleProjects2Change=this.handleProjects2Change.bind(this);
        this.handleSkills1Change = this.handleSkills1Change.bind(this);
        this.cancel = this.cancel.bind(this);
        //this.handleSkills2Change=this.handleSkills2Change.bind(this);
    }

    createResume = (e) => {
        e.preventDefault();
        const isValid = this.validate()
        if (isValid) {
            let experienced = this.state
            var id = ''
            console.log('experienced => ' + JSON.stringify(experienced));
            //alert(`Resume has been created with id ${experienced.id}`)    
            // ExperiencedService.addExperienced(experienced).catch((error) => console.log(error)).then(res =>{
            //     this.props.history.push('/viewResume')});

            ExperiencedService.addExperienced(experienced).catch((error) => console.log(error)).then(response =>
                this.setState({ answer: response.data }))
            this.setState(this.baseState)
        }



    }

    handleProjects1Change = (e) => {
        // 1. Make a shallow copy of the projects
        let projects = [...this.state.projects];
        // 2. Make a shallow copy of the item you want to mutate
        let project = { ...projects[0] };
        // 3. Replace the property you're intested in
        project.projects = e.target.value;
        // 4. Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
        projects[0] = project;
        // 5. Set the state to our new copy
        this.setState({ projects });
    }



    handleSkills1Change = (e) => {
        // 1. Make a shallow copy of the projects
        let skills = [...this.state.skills];
        // 2. Make a shallow copy of the item you want to mutate
        let skill = { ...skills[0] };
        // 3. Replace the property you're intested in
        skill.skills = e.target.value;
        // 4. Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
        skills[0] = skill;
        // 5. Set the state to our new copy
        this.setState({ skills });
    }

    cancel = () => {
        this.props.history.push('/exmain')
    }


    validate = () => {
        let firstNameError = ""
        let lastNameError = ""
        let phoneError = ""
        let cityError = ""
        let stateError = ""
        let pincodeError = ""
        let emailError = ""
        let jobTitleError = ""
        let employerNameError = ""
        let wcityError = ""
        let wstateError = ""
        let fromDateError = ""
        let toDateError = ""
        let sscError = ""
        let hscError = ""
        let degreeNameError = ""
        let fieldOfStudyError = ""
        let degreePercentError = ""
        let startDateError = ""
        let endDateError = ""
        if (!this.state.firstName) {
            firstNameError = "First name cannot be blank"
        }
        else if (!this.state.firstName.match(/^[a-zA-Z]+$/)) {
            firstNameError = "First name must include only alphabets"
        }
        if (!this.state.lastName) {
            lastNameError = "Last name cannot be blank"
        }
        else if (!this.state.lastName.match(/^[a-zA-Z]+$/)) {
            lastNameError = "Last name must include only alphabets"
        }
        if (!this.state.phone) {
            phoneError = "Mobile number cannot be blank"
        }
        else if (!this.state.phone.match("^[6-9]\\d{9}$")) {
            phoneError = "Mobile number is invalid"
        }
        if (!this.state.city) {
            cityError = "City cannot be blank"
        }
        else if (!this.state.city.match(/^[a-zA-Z\s]+$/)) {
            cityError = "City must include only alphabets"
        }
        if (!this.state.state) {
            stateError = "State cannot be blank"
        }
        else if (!this.state.state.match(/^[a-zA-Z\s]+$/)) {
            stateError = "State must include only alphabets"
        }
        if (!this.state.pincode) {
            pincodeError = "Pincode cannot be blank"
        }
        else if (!this.state.pincode.match("^[1-9]{1}[0-9]{2}[0-9]{3}$")) {
            pincodeError = "Invalid pincode"
        }
        if (!this.state.email) {
            emailError = "Email Id cannot be blank"
        }
        else if (!this.state.email.match("\\S+?@\\S+?\\.com")) {
            emailError = "Invalid email id"
        }
        if (!this.state.workex.jobTitle) {
            jobTitleError = "Job Title cannot be blank"
        }
        else if (!this.state.workex.jobTitle.match(/^[a-zA-Z\s]+$/)) {
            jobTitleError = "Job Title must include only alphabets"
        }
        if (!this.state.workex.employerName) {
            employerNameError = "Organisation name cannot be blank"
        }
        else if (!this.state.workex.employerName.match(/^[a-zA-Z\s]+$/)) {
            employerNameError = "Organisation name must include only alphabets"
        }
        if (!this.state.workex.wcity) {
            wcityError = "City cannot be blank"
        }
        else if (!this.state.workex.wcity.match(/^[a-zA-Z\s]+$/)) {
            wcityError = "City must include only alphabets"
        }
        if (!this.state.workex.wstate) {
            wstateError = "State cannot be blank"
        }
        else if (!this.state.workex.wstate.match(/^[a-zA-Z\s]+$/)) {
            wstateError = "State must include only alphabets"
        }
        if (!this.state.workex.fromDate) {
            fromDateError = "From Date cannot be blank"
        }
        else if (!this.state.workex.fromDate.match(("^((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])$"))) {
            fromDateError = "Enter date in YYYY-MM-DD format"
        }
        if (!this.state.workex.toDate) {
            toDateError = "To Date cannot be blank"
        }
        else if (!this.state.workex.toDate.match(("^((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])$"))) {
            toDateError = "Enter date in YYYY-MM-DD format"
        }
        if (!this.state.education.ssc) {
            sscError = "Please Enter SSC percentage"
        }
        else if (!this.state.education.ssc.match("^[1-9]{2}$")) {
            sscError = "Enter SSC Percentage in 2 decimals"
        }
        if (!this.state.education.hsc) {
            hscError = "Please Enter HSC percentage"
        }
        else if (!this.state.education.hsc.match("^[1-9]{2}$")) {
            hscError = "Enter HSC Percentage in 2 decimals"
        }
        if (!this.state.education.degreeName) {
            degreeNameError = "Degree name cannot be blank"
        }
        else if (!this.state.education.degreeName.match(/^[a-zA-Z\s]+$/)) {
            degreeNameError = "Degree name must include only alphabets"
        }
        if (!this.state.education.fieldOfStudy) {
            fieldOfStudyError = "Field of Study cannot be blank"
        }
        else if (!this.state.education.fieldOfStudy.match(/^[a-zA-Z\s]+$/)) {
            fieldOfStudyError = "State must include only alphabets"
        }
        if (!this.state.education.degreePercent) {
            degreePercentError = "Please Enter Degree percentage"
        }
        else if (!this.state.education.degreePercent.match("^[1-9]{2}$")) {
            degreePercentError = "Enter Degree Percentage in 2 decimals"
        }
        if (!this.state.education.startDate) {
            startDateError = "Start Date cannot be blank"
        }
        else if (!this.state.workex.startDate.match(("^((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])$"))) {
            startDateError = "Enter date in YYYY-MM-DD format"
        }
        if (!this.state.education.endDate) {
            endDateError = "End Date cannot be blank"
        }
        else if (!this.state.education.endDate.match(("^((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])$"))) {
            endDateError = "Enter date in YYYY-MM-DD format"
        }
        if (firstNameError || lastNameError || phoneError || cityError || stateError || pincodeError || emailError
            || jobTitleError || employerNameError || wcityError || wstateError || fromDateError || toDateError
            || sscError || hscError || degreeNameError || fieldOfStudyError || degreePercentError || startDateError || endDateError) {
            this.setState({
                firstNameError, lastNameError, phoneError, cityError, stateError, pincodeError, emailError,
                jobTitleError, employerNameError, wcityError, wstateError, fromDateError, toDateError,
                sscError, hscError, degreeNameError, fieldOfStudyError, degreePercentError, startDateError, endDateError
            })
            return false
        }
        return true
    }



    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <h2>Enter your personal details</h2>
                        <form method="POST" onSubmit={this.createResume}>
                            <div className="form-group">
                                <p class="text-left">First Name <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={(e) => this.setState({ firstName: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">
                                    {this.state.firstNameError}
                                </div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Last Name <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={(e) => this.setState({ lastName: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">
                                    {this.state.lastNameError}
                                </div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Mobile No <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="xxxxxxxxxx"
                                    value={this.state.phone}
                                    onChange={(e) => this.setState({ phone: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.phoneError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">City <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="City Name"
                                    value={this.state.city}
                                    onChange={(e) => this.setState({ city: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.cityError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">State Name <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="State Name"
                                    value={this.state.state}
                                    onChange={(e) => this.setState({ state: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.stateError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Pincode <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.pincode}
                                    placeholder="xxxxxx"
                                    onChange={(e) => this.setState({ pincode: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.pincodeError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Email Id <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    placeholder="xxxxxx@gmail.com"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.emailError}</div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <h2>Past Work Experience</h2>
                        <form method="POST" onSubmit={this.createResume}>
                            <div className="form-group">
                                <p class="text-left">Job Title <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    value={this.state.workex.jobTitle}
                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, jobTitle: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.jobTitleError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Name of previous organization <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Organisation Name"
                                    value={this.state.workex.employerName}

                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, employerName: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.employerNameError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Previous work location city <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Work Location City"
                                    value={this.state.workex.wcity}

                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, wcity: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.wcityError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Previous work location State <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Work Location State"
                                    value={this.state.workex.wstate}

                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, wstate: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.wstateError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Starting date <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.workex.fromDate}
                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, fromDate: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.fromDateError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Ending date <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.workex.toDate}
                                    onChange={(e) => this.setState({ workex: { ...this.state.workex, toDate: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.toDateError}</div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <h2>Education</h2>
                        <form method="POST" onSubmit={this.createResume}>
                            <div className="form-group">
                                <p class="text-left">SSC % <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="xx"
                                    value={this.state.education.ssc}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, ssc: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.sscError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">HSC % <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="xx"
                                    value={this.state.education.hsc}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, hsc: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.hscError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Degree Name <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Degree Name"
                                    value={this.state.education.degreeName}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, degreeName: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.degreeNameError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Degree % <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="xx"
                                    value={this.state.education.degreePercent}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, degreePercent: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.degreePercentError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Field Of Study <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    placeholder="Field of Study"
                                    value={this.state.education.fieldOfStudy}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, fieldOfStudy: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.fieldOfStudyError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Starting date <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.education.startDate}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, startDate: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.startDateError}</div>
                            </div>
                            <div className="form-group">
                                <p class="text-left">Ending Date <label className="text-danger"> * </label></p>
                                <input
                                    type="text"
                                    value={this.state.education.endDate}
                                    onChange={(e) => this.setState({ education: { ...this.state.education, endDate: e.target.value } })}
                                    className="form-control" />
                                <div className="text-danger">{this.state.endDateError}</div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <h2>Enter your Projects</h2>
                        <form method="POST">
                            <div className="form-group">
                                <p class="text-left">Project Name</p>
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={this.state.projects.projects1}
                                    onChange={this.handleProjects1Change}
                                    className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <p class="text-left">Name Of Skills</p>
                        <form method="POST" onSubmit={this.createResume}>
                            <div className="form-group">

                                <input
                                    type="text"
                                    placeholder="Skill Name"
                                    value={this.state.skills.skills1}
                                    onChange={this.handleSkills1Change}
                                    className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>
                            <div class="divider" />
                            <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                            <div>
                                <label className="text-danger"> * are mandatory</label>
                                <p style={{ color: "green" }}>{this.state.answer}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateExResume