import React from "react";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbars() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-custom">
          <Navbar.Brand href="/home">Park Picker</Navbar.Brand>
          <Nav className="ml-5">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/userdash">User Dashboard</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
