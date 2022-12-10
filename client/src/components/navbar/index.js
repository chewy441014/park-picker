import React from "react";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Auth from '../../utils/auth';


const Navbars = () => {

  const logout = (e) => {
    e.preventDefault();
    console.log('here, look a logout event')
    Auth.logout();
  };

  return (
    <>
      {/* <Navbar className="d-flex justify-content-between" bg="dark" variant="dark"> */}
      <Navbar className="d-flex justify-content-between nav-font" bg="warning" variant="secondary">
        <Container className="">
          <Navbar.Brand href="/home" id="nav-brand-font">Park Picker</Navbar.Brand>
          <Nav className="ml-5">
            {!Auth.loggedIn() ? (
            <>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            </>
            ) : (
            <>
            <span className="nav-link">Hi, {Auth.getProfile().data.firstName}!</span>
            <Nav.Link href="/userdash">User Dashboard</Nav.Link>
            <Nav.Link onClick={(event) => logout(event) }>Logout</Nav.Link>
            </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
