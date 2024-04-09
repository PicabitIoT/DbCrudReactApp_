import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDatvComponent from './components/ListDatvComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateDatvComponent from './components/CreateDatvComponent';
import ViewDatvComponent from './components/ViewDatvComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListDatvComponent}></Route>
                          <Route path = "/datvs" component = {ListDatvComponent}></Route>
                          <Route path = "/add-datv/:id" component = {CreateDatvComponent}></Route>
                          <Route path = "/view-datv/:id" component = {ViewDatvComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
