import { Container, Row, Col } from "react-bootstrap"
import Message from "./Message"
import { useState } from "react"

export default function MessageBoard(props) {

    const [messages, setMessages] = useState([
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
        {
            title: 'Test Title',
            poster: 'DEV',
            content: 'This is my first tester message'
        },
    ])

    return <Container fluid>
        <Row>
            {messages.map((msg, index) => {
                return <Col key={index} xs={12} md={6} lg={4} xl={3}>
                    <Message {...msg}/>
                </Col>
            })}
        </Row>
    </Container>
}