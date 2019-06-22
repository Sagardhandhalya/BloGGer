import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar1 from './layout/Navbar';
import Dashbord from './dashbord/Dashbord';
import projectsDetails from './project/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import NewProject from './project/CreateProject';
function App() {
  console.log(window.innerWidth);
  if( window.innerWidth  < 550 )
  {
    return <p style={{color:"red",textAlign:"center",marginTop:"50%"}}>** You can not access this site in mobile plese use Desktop
    if you are all ready on desktop then just increse your windows width ** <br/> thank you</p>
    
  }
  else{
  return (
    <BrowserRouter>
    <div className="App" >
    <Navbar1/>
    <Switch>
      <Route path="/" exact component={Dashbord} />
      <Route path="/projects/:id" component={projectsDetails} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/new" component={NewProject} />
      </Switch>
  
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
