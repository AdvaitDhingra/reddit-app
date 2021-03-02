import './App.css';

import React, { useState, useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


import Physics from './physics'
import PhysicsStudents from './physicsstudents'
import ParticlePhysics from './particlephysics'
import OtherSub from './other'
import { Switch, Route, Link } from 'react-router-dom';
function App() {

  const [otherSub, setOtherSub] = useState("")

  const fetchOtherSub = (e) => {
    e.preventDefault()
    setOtherSub(e.target.value)

  }


  return (
    <div className = "App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Reddit Physics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      <Nav.Link href="#"><Link to ="/physics">r/Physics</Link> </Nav.Link>
      <Nav.Link href="#"><Link to ="/physicsstudents">r/PhysicsStudents</Link> </Nav.Link>
      <Nav.Link href="#"><Link to ="/particlephysics">r/ParticlePhysics</Link> </Nav.Link>
    </Nav>
      <Form inline>
        <FormControl type = "text" placeholder = "Other Subreddits..." className = "mr-sm-2" onChange = {(e) => fetchOtherSub(e)}/>
        <Button variant = "outline-success" type = "submit"><Link to = "/othersub">Search</Link></Button>
      </Form>
        </Navbar.Collapse>

      </Navbar>
    <Switch>
      <Route path = "/physics" component = {Physics}/>
      <Route path = "/physicsstudents" component = {PhysicsStudents}/>
      <Route path = "/particlephysics" component = {ParticlePhysics}/>
      <Route path = "/othersub" >
        <OtherSub sub = {otherSub}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
