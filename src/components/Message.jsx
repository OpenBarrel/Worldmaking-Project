import { Card, Button, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import DeleteModal from "./DeleteModal";
import { UsernameContext } from "../constants/UsernameContext";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Message(props) {

    const MAX_LENGTH = 100;
    const [expanded, setExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const {username} = useContext(UsernameContext);

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    function handleRemove() {
        props.remove(props[0]);
    }

    function handleDeleteClick() {
        setShowModal(true);
    }

    useEffect(() => {
        if (props[1].content.length <= MAX_LENGTH) {
            setShowToggle(false);
        } else {
            setShowToggle(true);
        }
    }, [props[1].content]);

    return <Card className="mb-3">
        <DeleteModal visible={showModal} setVisible={setShowModal} remove={handleRemove}/>
        <Card.Header>
            <Container fluid className="d-flex justify-content-between align-items-center p-0">
                <Card.Title>{props[1].title}</Card.Title>
                {username === props[1].poster ? <Button variant="danger" onClick={handleDeleteClick}><i className="bi bi-trash3"></i></Button> : ''}
            </Container>
            <Card.Subtitle>Posted by {props[1].poster} on {props[1].date?.slice(0,10)}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <div 
                style={{ 
                maxHeight: expanded ? 'none' : `${MAX_LENGTH}px`, 
                overflow: 'hidden', 
                position: 'relative',
                transition: 'max-height 0.5s ease-in-out'
            }}>
                {!expanded && showToggle && (
                    <div 
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50px',
                        background: 'linear-gradient(to top, white, rgba(255,255,255,0))',
                        pointerEvents: 'none'
                    }}
                    ></div>
                )}
                <Card.Text>{props[1].content}</Card.Text>
            </div>
        </Card.Body>
        {showToggle && (
            <Button variant="link" onClick={toggleExpanded}>
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        )}
    </Card>
}