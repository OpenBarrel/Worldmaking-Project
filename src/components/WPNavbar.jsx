import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import SigninModal from "./SigninModal";
import { UsernameContext } from "../constants/UsernameContext";

export default function WPNavbar(props) {

    const {username, handleSignIn, handleSignOut} = useContext(UsernameContext);
    const [visible, setVisible] = useState(false);

    function handleSignInClick() {
        setVisible(true);
    }

    return <Navbar bg='primary' className="mb-3" id='navbar'>
        <SigninModal visible={visible} setVisible={setVisible} signin={handleSignIn} signout={handleSignOut}/>
        <Container fluid>
            <Nav className='me-auto'>
                <Nav.Link href="#/"><p className="fs-4">Home</p></Nav.Link>
                <Nav.Link href="#/messages"><p className="fs-4">Messages</p></Nav.Link>
            </Nav>
            
            <Button variant="outline-light" onClick={handleSignInClick}>{username !== '' ? 'Change Username': 'Sign In'}</Button>
        </Container>
    </Navbar>
}