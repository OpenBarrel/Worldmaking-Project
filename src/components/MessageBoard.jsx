import { Container, Row, Col } from "react-bootstrap"
import Message from "./Message"

export default function MessageBoard(props) {

    return <Container fluid>
        <Row>
            {props.messages?.map((msg, index) => {
                return <Col key={index} xs={12} md={6} lg={4} xl={3}>
                    <Message {...msg} remove={props.remove}/>
                </Col>
            })}
        </Row>
    </Container>
}