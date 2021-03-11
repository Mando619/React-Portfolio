import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from "./Components/Nav/Nav";
import Card from './Components/Card/Card';
import About from './Components/About/About';
//import StarterPage from './Components/StarterPage';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Card></Card>
      <Switch>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
