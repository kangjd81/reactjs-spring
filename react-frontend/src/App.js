import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListNode from './components/node/ListNode';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNode from './components/node/CreateNode';
import UpdateNode from './components/node/UpdateNode';
import ViewNode from './components/node/ViewNode';

function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListNode}></Route>
                          <Route path = "/nodes" component = {ListNode}></Route>
                          <Route path = "/add-node/:id" component = {CreateNode}></Route>
                          <Route path = "/view-node/:id" component = {ViewNode}></Route>
                          {/* <Route path = "/update-node/:id" component = {UpdateNode}></Route> */}
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;
