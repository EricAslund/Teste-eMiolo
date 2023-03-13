

import {Navbar, Nav ,Container ,Image, Form } from 'react-bootstrap';
import GoogleAuth from "../googleAuth";


export function Header() {
  return (
    <>
   
  
     <Navbar bg="dark" variant="dark" >
        <Container >
          <Navbar.Brand href="/">
            <Image src='./images/logo.svg' alt="Logo Star Wars" />
            </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/">Personagens</Nav.Link>
            <Nav.Link href="/films">Filmes</Nav.Link>
            <Nav.Link href="/lista_visitas">Visitas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <GoogleAuth/>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}
