import { Card, Image, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ArtistCard(props) {

    const [flip, setFlip] = useState(false);

    function handleFlip() {
        setFlip(prev => !prev);
    }

    return <div className="w-100 d-flex align-items-center justify-content-center">
        <Card className="text-center mx-4 w-75" data-bs-theme="light">
            <Card.Header>
                {flip ? '' : <Image src={props.image} fluid style={{maxHeight: '55vh', objectFit: 'cover'}}/>}
                <Card.Title className="fs-3">{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-5">{props.bio}</Card.Subtitle>
            </Card.Header>
            <Card.Body className="p-0">
                {flip ? <Card.Text className="text-start mx-5 my-3 fs-4">{props.summary}</Card.Text> : ''}
            </Card.Body>
            <Card.Footer className="p-0">
                <Button className="w-100 rounded-0 rounded-bottom" onClick={handleFlip}>Read {flip ? 'Less' : 'More'}</Button>
            </Card.Footer>
        </Card>
    </div>
}