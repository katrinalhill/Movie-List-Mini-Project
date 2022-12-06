import { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { GlobalContext } from "../Context/GlobalContext";

const NavBar = () => {
    const ctx = useContext(GlobalContext)  

    const resetQuery = () => {
        ctx.setQuery('')
    };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link onClick={resetQuery} href="/">Home</Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={resetQuery} href="/">Favorites</Nav.Link>

            </Nav>
            {/* <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

// Following plain React Bootstrap component

// <Button href="/foo/bar">Foo</Button>
// becomes

// import { LinkContainer } from 'react-router-bootstrap'
// <LinkContainer to="/foo/bar">
//   <Button>Foo</Button>
// </LinkContainer>
