import { Container, Row, Col } from "react-bootstrap"
import Message from "./Message"

export default function MessageBoard(props) {

    return <Container fluid className="d-flex flex-column" style={{ overflow: "auto" }}>
            {props.messages?.map((msg, index) => {
                return <Row key={index}>
                    <Col>
                        <Message {...msg} remove={props.remove} loadMessages={props.loadMessages}/>
                    </Col>
                </Row>
            })}
    </Container>
}