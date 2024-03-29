import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Nav from "./Components/Nav/Nav";
import Card from './Components/Card/Card';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
//import NavbarTest from './Components/NavbarTest/NavbarTest';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route basename="/React-Portfolio">
          <About></About>
          <Card></Card>
          <Skills></Skills>
          <Projects></Projects>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
export default App;
