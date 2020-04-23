import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Login from './pages/Login';
import InputPage from './pages/Input';
import ProductionBoard from './pages/ProductionBoard';
import Navbar from './components/Navi'

function App() {
  return (
    <Router>      
      <div>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Board">
            <ProductionBoard />
          </Route>
          <Route path="/input">
            <InputPage />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
