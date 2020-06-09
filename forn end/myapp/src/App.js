import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Keephome from './Components/Keephome';
import Homepage from './Components/Homepage';



function App() {
  return (
<Router>
      <Switch>

        <Route exact path="/" component={Homepage} />
        <Route exact path='/keephome' component={Keephome}/>
     
    

       
      </Switch>

    </Router>
  );
}

export default App;
