import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import SigninModal from "./SigninModal";
import { UsernameContext } from "../constants/UsernameContext";
import "../styles/AnimatedBrand.css"

export default function WPNavbar(props) {

    const {username, handleSignIn, handleSignOut} = useContext(UsernameContext);
    const [visible, setVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    function handleSignInClick() {
        setVisible(true);
    }

    return <Navbar bg="dark" data-bs-theme="dark" className="mb-3" id='navbar'>
        <SigninModal visible={visible} setVisible={setVisible} signin={handleSignIn} signout={handleSignOut}/>
        <Navbar.Brand 
            href="#/" 
            className="ms-3 animated-brand"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ><p className="fs-2">{isHovered ? 'World for Everyone' : 'W.E.'}</p></Navbar.Brand>
        <Container fluid>
            <Nav className='me-auto'>
                <Nav.Link href="#/featured-artists"><p className="fs-4">Featured Artists</p></Nav.Link>
                <Nav.Link href="#/messages"><p className="fs-4">Message Board</p></Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleSignInClick}>{username !== '' ? 'Change Username': 'Set Username'}</Button>
        </Container>
    </Navbar>
}