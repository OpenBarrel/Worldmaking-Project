import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";

export default function MessageModal(props) {

    const message = useRef({
        title: '',
        content: ''
    });

    function handleClose() {
        props.setVisible(false);
    }

    function handleSubmit() {
        if (message.current.title === '' || message.current.content === '') {
            alert('Please complete all fields!');
        } else {
            props.newMessage(message.current);
            handleClose();
        }
    }

    return(
        <Modal show={props.visible} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>New Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="messageTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={(e) => message.current.title = e.target.value}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="messageContent">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" onChange={(e) => message.current.content = e.target.value}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}