
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'
function FormHeader() {
 
return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">RESUMEBUILDER</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/first">Create Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/viewresume">View Created Resume Resume</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" href="/fdownload">Download Created Resume</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="/">Log out</a>
          </li>
            
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default FormHeader