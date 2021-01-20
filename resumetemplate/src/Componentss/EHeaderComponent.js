import React from 'react'
import { BrowserRouter as Router ,Switch , Route ,Link } from 'react-router-dom'
import HomeComponent from './HomeComponent';
import ExperiencedLogin from './ExperiencedLogin';
import CreateExResume from './CreateExResume';
import ViewExResume from './ViewExResume';
import ExperiencedRegister from './ExperiencedRegister';
import UpdateExResume from './UpdateExResume';
import DownloadExResume from './DownloadExResume';

function HeaderComponent() {
    return (
      <Router>
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ONLINE RESUME BUILDER</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item">
                { <a class="nav-link active" aria-current="page" href="/">Home</a> 
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>  
              </li> */}
              <li class="nav-item">
                {/* <a class="nav-link" href="/createResume">Create Resume</a> */}
                <Link class="nav-link" to="/createResume">Create Resume</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="/viewResume">View Created Resumes</a> */}
                <Link class="nav-link" to="/viewResume">View Created Resume</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/experienced">Download Created Resume</Link>
              </li>
              <li class="nav-item">
              <a class="nav-link " href="/">Logout</a>
            </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div>

        
        <Switch>
          {/* <Route path='/' exact component={HomeComponent}/> */}
          <Route path='/createResume' component={CreateExResume}/>
          <Route path='/viewResume' component={ViewExResume}/>
          {/* <Route path='/register' component={ExperiencedRegister}/> */}
          <Route path='/updateResume' component={UpdateExResume}/>
          <Route path='/experienced' component={DownloadExResume}/>
        </Switch>

        </Router>
    )
}

export default HeaderComponent