
import React, { useState } from "react";
import HomeDesign from "./HomeDesign";



function HeaderComponent() {
 
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
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/admin">Admin Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/fresher">Fresher Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/experience">Experience Login</a>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      <HomeDesign></HomeDesign>
        </div>
    )
}

export default HeaderComponent