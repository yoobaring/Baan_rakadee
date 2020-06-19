import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Keephome from './Components/Keephome';
import Homepage from './Components/Homepage';
import List from './Components/List'
import Listcondo from './Components/Listcondo';
import Building from './Components/Building';
import Townhouse from './Components/Townhouse';
import Addlist from './Components/Addlist';
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (
<Router>
      <Switch>

        <Route exact path="/" component={Homepage} />
        <Route  path='/addlist' component={Addlist}/>
        <Route  path='/keephome' component={Keephome}/>
        <Route  path='/listhome' component={List}/>
        <Route  path='/listcondo' component={Listcondo}/>
        <Route  path='/building' component={Building}/>
        <Route  path='/townhouse' component={Townhouse}/>
        <Route  path='/login' component={Login}/>
        <Route  path='/signup' component={Signup}/>     
    

       
      </Switch>

    </Router>
  );
}

export default App;
