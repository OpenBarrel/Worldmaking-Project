import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";

export default function CommentModal(props) {

    const message = useRef({
        content: ''
    });

    function handleClose() {
        props.setVisible(false);
    }

    function handleSubmit() {
        if (message.current.content != '') {
            props.newComment(message.current);
            handleClose();
        } else {
            alert("Please enter a comment!");
        }
    }

    return(
        <Modal show={props.visible} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>New Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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