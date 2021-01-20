
import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdminMenu from './AdminMenu';
import AHeaderComponent from './AHeaderComponent';
import ForgetPassword from './ForgetPassword';
import ListOfFreshers from './ListOfFreshers';
import ListOfUsers from './ListOfUsers';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';


 


function AdminLogin() {
    return (
        <div>
            <Router> 
            
                   
                        <Switch>
                              
                              <Route path = "/admin" exact component = {AHeaderComponent}></Route>
                              
                             <Route path = "/login" exact component = {LoginComponent}></Route>
                            
                              <Route path = "/forgetpassword" exact component = {ForgetPassword}></Route>  

                             <Route path = "/adminmenu" exact component = {AdminMenu}></Route>  
                             <Route path = "/admin/allfreshers" exact component = {ListOfFreshers}></Route>
                             <Route path = "/admin/userslist" exact component = {ListOfUsers}></Route>
                             <Route path = "/logout" exact component = {LogoutComponent}></Route>  
                              {/*<Route path = "/logout" exact component = {Logout}></Route>  
                              
                              
                               <Route path = "/admin/userslist" exact component = {ListOfUsers}></Route> 
    <Route path = "/admin/allfreshers" exact component = {ListOfFreshers}></Route> */}
                               
                               {/* <Route path = "/homepage" exact component = {MainHeaderComponent}></Route>  */}
                               
                        </Switch>
    
                    
                    {/* <CarouselMain/> */}
                  {/* <FooterComponent /> */}
            </Router>
        </div>
        
      );
}
export default AdminLogin