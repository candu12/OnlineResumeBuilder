import React, { Component } from 'react'
import ExperiencedService from '../services/ExperiencedService';
import fileDownload from 'js-file-download';
import './download.css';

const INITIAL_STATE = {
  resumeId: "",
  resumeIdError: "",
  templateType: "",
  templateTypeError: ""
}

class DownloadExResume extends Component {
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
    if (!this.state.resumeId) {
      resumeIdError = "Resume Id cannot be blank"
    }
    if (!this.state.templateType) {
      templateTypeError = "Select template type to generate the PDF"
    }

    if (templateTypeError || resumeIdError) {
      this.setState({ templateTypeError, resumeIdError })
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
      <div class="exd-img">
        <div >
          <br />
          <br />
          <form method="GET" onSubmit={this.stopSubmission}>
            <div>
              <h3 style={{ color: "white" }}>Enter the id of the resume which you want to download :</h3>
              <input
                placeholder="Enter Resume Id"
                className="text-center"
                value={this.state.resumeId}
                onChange={(e) => this.setState({ resumeId: e.target.value })}
              />
            </div>
            <div className="text-warning">
              {this.state.resumeIdError}
            </div>
            <br />
            <br />
            <div>
              <h4 style={{ color: "white" }}>* Template Type *</h4>
              <br />
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"
                value="LA" checked={this.state.templateType === "LA"} onChange={this.onTemplateTypeChange} />
              <label class="custom-control-label text-primary" for="customRadioInline1"><b>Left Alignment</b></label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"
                value="RA" checked={this.state.templateType === "RA"} onChange={this.onTemplateTypeChange} />
              <label class="custom-control-label text-primary" for="customRadioInline2"><b>Right Alignment</b></label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"
                value="CA" checked={this.state.templateType === "CA"} onChange={this.onTemplateTypeChange} />
              <label class="custom-control-label text-primary" for="customRadioInline3"><b>Center Alignment</b></label>
            </div>
            <div className="text-warning">
              {this.state.templateTypeError}
            </div>
            <br />
            <div>
              <button button class="btn btn-outline-success" onClick={() => { this.handleDownload('resume.pdf') }}>Download Pdf</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DownloadExResume