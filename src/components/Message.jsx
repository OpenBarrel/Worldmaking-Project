import { Card } from "react-bootstrap";

export default function Message(props) {
    return <Card className="mb-3">
        <Card.Header>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>Posted by {props.poster}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{props.content}</Card.Text>
        </Card.Body>
    </Card>
}