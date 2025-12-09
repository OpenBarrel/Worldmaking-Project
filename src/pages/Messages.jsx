import MessageBoard from "../components/MessageBoard"
import MessageModal from "../components/MessageModal"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Messages(props) {

    const [showMessageModal, setShowMessageModal] = useState(false);
    const [messages, setMessages] = useState([...JSON.parse(localStorage.getItem('messages') || '[]')]);

    function handleNewMessageClick() {
        setShowMessageModal(true);
    }

    function loadMessages() {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages", {
            method: "GET",
            headers: {
                "X-CS571-ID": "bid_4467b10c1dfb418fe8027efcd69b2f29d7f60931cfa07d7b8f9d936be5e36adc"
            }
        })
        .then(response => response.json())
        .then (data => {
            setMessages(Object.entries(data.results).reverse());
        });
    }

    function handleNewMessage(msg) {

        const newMsg = {
            title: msg.title,
            content: msg.content,
            poster: sessionStorage.getItem('username') ?? 'Anonymous',
            date: new Date().toISOString()
        }

        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": 'bid_4467b10c1dfb418fe8027efcd69b2f29d7f60931cfa07d7b8f9d936be5e36adc'
            },
            body: JSON.stringify(newMsg),
        }).then(res => {
            if (res.status === 200) {
                loadMessages();
            } else {
                alert("Failed to post message.");
            }
        })
    }

    function handleRemoveMessage(id) {
        fetch(`https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages?id=${id}`, {
            method: "DELETE",
            headers: {
                "X-CS571-ID": 'bid_4467b10c1dfb418fe8027efcd69b2f29d7f60931cfa07d7b8f9d936be5e36adc'
            }
        })
        .then(res => {
            if (res.status === 200) {
                loadMessages();
            } else {
                alert("Failed to delete message.");
            }
        });
        loadMessages();
    }

    useEffect(() => {
        loadMessages();
    }, [])

    return <div className="d-flex flex-column" style={{ height: "calc(100vh - 110px)" }}>
            <Container fluid className="flex-grow-1 d-flex flex-column border-bottom border-dark" style={{ overflow: "hidden" }}>
                <MessageModal visible={showMessageModal} setVisible={setShowMessageModal} newMessage={handleNewMessage}/>
                <Row className="w-100 no-gutters flex-grow-1" style={{ overflow: "auto" }}>
                    <Col className="justify-content-between d-flex flex-column" >
                        <MessageBoard messages={messages} remove={handleRemoveMessage} loadMessages={loadMessages}/>
                    </Col>
                </Row>
                
            </Container>
            <div className="d-flex justify-content-center align-items-center m-3">
                <Button variant="success" className="w-100" onClick={handleNewMessageClick}>Create Post</Button>
            </div>
        </div>
}