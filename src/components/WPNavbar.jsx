import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import SigninModal from "./SigninModal";
import { UsernameContext } from "../constants/UsernameContext";

export default function WPNavbar(props) {

    const {username, handleSignIn, handleSignOut} = useContext(UsernameContext);
    const [visible, setVisible] = useState(false);
    const [signedIn, setSignedIn] = useState(sessionStorage.getItem("username") !== null);

    function handleSignInClick() {
        setVisible(true);
    }

    return <Navbar bg='primary' className="mb-3" id='navbar'>
        <SigninModal visible={visible} setVisible={setVisible} signin={handleSignIn} signout={handleSignOut}/>
        <Container fluid>
            <Nav className='me-auto'>
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#/messages">Messages</Nav.Link>
            </Nav>
            
            <Button variant="outline-light" onClick={handleSignInClick}>{signedIn ? 'Change Username': 'Sign In'}</Button>
        </Container>
    </Navbar>
}