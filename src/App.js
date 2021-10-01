import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/layouts/Navbar';
import Favorite from './components/notes/Favorite';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
