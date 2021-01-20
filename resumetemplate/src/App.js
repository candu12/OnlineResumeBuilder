import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter ,Switch , Route } from 'react-router-dom'
import HeaderComponent from './Component/HeaderComponent'
import HomeComponent from './Component/HomeComponent';
import AdminLogin from './Component/AdminLogin';

import FresherLogin from './Component/FresherLogin';


import FresherRegister from './Component/FresherRegister';
import FPersonalInfo from './Component/FPersonalInfo';

import FormHeader from './Component/FormHeader';
import ViewForm from './Component/ViewForm';

import ExperiencedLogin from './Component/ExperiencedLogin';
import ExperiencedRegister from './Component/ExperiencedRegister';
import ExperiencedMain from './Component/ExperiencedMain';
import DownloadExResume from './Component/DownloadExResume';
import CreateExResume from './Component/CreateExResume';
import FreshDownload from './Component/FreshDownload';
import EditFresher from './Component/EditFresher';
import FreshNavbar from './Component/FreshNavbar';
import ForgetPassword from './Component/ForgetPassword';
import LoginComponent from './Component/LoginComponent';
import AdminMenu from './Component/AdminMenu';
import ListOfFreshers from './Component/ListOfFreshers';
import ListOfUsers from './Component/ListOfUsers';
import FreshPassForgot from './Component/FreshPassForgot';
import ExperiencedForgotPass from './Component/ExperiencedForgotPass';



function App() {
  
  return (
    <div className="App">
      
     
   <BrowserRouter>
        <Switch>
        <Route path='/' exact component={HeaderComponent}/>
          <Route path='/home' exact component={HomeComponent}/>
          <Route path='/admin' component={AdminLogin}/>
          <Route path='/fresher' component={FresherLogin}/>
          <Route path='/experience' component={ExperiencedLogin}/>
          <Route path='/register' component={FresherRegister}/>
          <Route path='/first' component={FPersonalInfo}/>
          <Route path='/view' component={FreshNavbar}/>
          <Route path='/fh' exact component={FormHeader}/>
          <Route path='/viewresume' component={ViewForm}/>
          <Route path='/edit/:fresherId' component={EditFresher}/>
          
          <Route path='/eregister' component={ExperiencedRegister}/>
          
          <Route path='/exmain' component={ExperiencedMain}/>
          <Route path='/exdownload' component={DownloadExResume}/>
          <Route path='/fdownload' component={FreshDownload}/>
          <Route path='/createResume' component={CreateExResume}/>
          <Route path='/forgetpassword' component={ForgetPassword}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/adminmenu' component={AdminMenu}/>
          <Route path = "/admin/allfreshers" exact component = {ListOfFreshers}></Route>
           <Route path = "/admin/userslist" exact component = {ListOfUsers}></Route>
           <Route path='/freshpassforgot' component={FreshPassForgot}></Route>
           <Route path="/exforgot" component={ExperiencedForgotPass}></Route>
          
          



        </Switch>
   </BrowserRouter>
   
      </div>
  );
}




export default App;


