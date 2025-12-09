import { Modal, Button, Form } from "react-bootstrap";
import { useRef, useEffect } from "react";

export default function SigninModal(props) {

    const username = useRef();

    function handleClose() {
        props.setVisible(false);
    }

    function handleSubmit() {
        props.signin(username.current);
        handleClose();
    }

    function handleSignout() {
        props.signout();
        handleClose();
    }

    return(
        <Modal show={props.visible} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Select a username" onChange={(e) => username.current = e.target.value}/>
                    </Form.Group>
                </Form>
                <div className="justify-content-end d-flex">
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    <Button variant="warning" className="ms-2" onClick={handleSignout}>Sign Out</Button>
                    <Button variant="secondary" className="ms-2" onClick={handleClose}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}