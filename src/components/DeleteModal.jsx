import { Modal, Button, Form } from "react-bootstrap";

export default function DeleteModal(props) {

    function handleClose() {
        props.setVisible(false);
    }

    function handleDelete() {
        props.remove();
        handleClose();
    }

    return(
        <Modal show={props.visible} backdrop="static" centered>
            <Modal.Header className="justify-content-center">
                <Modal.Title>Confirm delete?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="justify-content-center d-flex">
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" className="ms-3" onClick={handleDelete}>Delete</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}