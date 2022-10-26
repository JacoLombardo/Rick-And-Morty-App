import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="NavBarButton" variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
  )
}

export default NavBar