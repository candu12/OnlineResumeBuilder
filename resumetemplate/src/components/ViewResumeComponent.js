import React, { Component } from 'react';
import ExperiencedService from '../services/ExperiencedService';
import fileDownload from 'js-file-download';

const INITIAL_STATE = {
  resumeId: "",
  resumeIdError : "",
  // experienced: {},
  templateType: "",
  templateTypeError: ""
}

class ViewResumeComponent extends Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_STATE

    this.stopSubmission = this.stopSubmission.bind(this)
    this.onTemplateTypeChange = this.onTemplateTypeChange.bind(this)
  }

  onTemplateTypeChange = (e) => {
    this.setState({
      templateType: e.target.value
    });
  }

  validate = () => {
    let templateTypeError = ""
    let resumeIdError = ""
    if(!this.state.resumeId)
    {
      resumeIdError = "Resume Id cannot be blank"
    }
    if (!this.state.templateType) {
      templateTypeError = "select template type to generate the pdf"
    }

    if (templateTypeError || resumeIdError) {
      this.setState({ templateTypeError,resumeIdError })
      return false
    }
    return true
  }

  stopSubmission = (e) => {
    e.preventDefault()
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state)
      this.setState(INITIAL_STATE)
    }
  }
  handleDownload = (filename) => {
    const isValid = this.validate()
    if (isValid) {
      ExperiencedService.getPdfGeneratedById(this.state.resumeId, this.state.templateType)
        .then((res) => {
          fileDownload(res.data, filename)
        })
    }
  }

  render() {
    return (
      <div className="container mt-2">
        <br />
        <br />
        <form method="GET" onSubmit={this.stopSubmission}>
          {/* <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Resume Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name :</label>
                            <div> {this.state.experienced.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name :  </label>
                            <div> { this.state.experienced.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID :  </label>
                            <div> { this.state.experienced.email }</div>
                        </div>
                    </div>
                </div> */}
          <div>
            <label>Enter the id of the resume which you want to download : </label>
          </div>
          <div>
          <input
                className="form-control"
                placeholder="Enter Resume Id"
                value={this.state.resumeId}
                onChange={(e) => this.setState({ resumeId: e.target.value })}
              />
          </div>
          <div className="text-danger">
              {this.state.resumeIdError}
            </div>
          <br />
          <br />
          <div>
            <label>Template Type * </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"
              value="LA" checked={this.state.templateType === "LA"} onChange={this.onTemplateTypeChange} />
            <label class="custom-control-label" for="customRadioInline1">Left Alignment</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"
              value="RA" checked={this.state.templateType === "RA"} onChange={this.onTemplateTypeChange} />
            <label class="custom-control-label" for="customRadioInline2">Right Alignment</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"
              value="CA" checked={this.state.templateType === "CA"} onChange={this.onTemplateTypeChange} />
            <label class="custom-control-label" for="customRadioInline3">Center Alignment</label>
          </div>
          <div className="text-danger">
            {this.state.templateTypeError}
          </div>
          {/* <br />
          <div>
            <button className="btn btn-outline-success mt-2" >Submit</button>
          </div> */}
          <br />
          <div>
            <button className="btn btn-outline-success mt-2" onClick={() => { this.handleDownload('resume.pdf') }}>Download Pdf</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ViewResumeComponent;