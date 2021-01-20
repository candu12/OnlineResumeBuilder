
import React from 'react'

import { BrowserRouter ,Switch , Route } from 'react-router-dom'

import EditForm from './EditFresher'
import FormHeader from './FormHeader'
import FPersonalInfo from './FPersonalInfo'
import ViewForm from './ViewForm'
import ViewResumeComponent from './FreshDownload'
import FreshDownload from './FreshDownload'

function FreshNavbar (props) {
    return (
       
        <div className="App">
       <FormHeader></FormHeader>
        <BrowserRouter>
        <switch>
        
        <Route path='/first' component={FPersonalInfo}/>
        <Route path='/viewresume' component={ViewForm}/>
        <Route path='/edit' component={EditForm}/>
        <Route path='/fdownload' component={FreshDownload}/>
          
        </switch>
        </BrowserRouter>
        
       </div>
    )
}
export default FreshNavbar