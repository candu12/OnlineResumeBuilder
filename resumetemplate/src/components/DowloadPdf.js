import React, { Component } from 'react';
// import axios from 'axios';
import fileDownload from 'js-file-download';
import ResumeService from '../services/ResumeService';

class DowloadPdf extends Component {

  handleDownload = (filename) => {
    ResumeService.getPdfGeneratedById()
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <button className="btn btn-outline-success" onClick={() => { this.handleDownload('resume.pdf') }}>Download Pdf</button>
        </div>
      </div>
    );
  }
}

export default DowloadPdf;