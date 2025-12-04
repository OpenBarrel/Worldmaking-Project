import { Nav, Navbar, Container } from "react-bootstrap";

export default function WPNavbar(props) {
    return <Navbar bg='primary' className="mb-3">
        <Container fluid>
            <Nav className='me-auto'>
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#/messages">Messages</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}