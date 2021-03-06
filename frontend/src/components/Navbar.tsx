import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'

const Navbarr = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Node-React</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default Navbarr