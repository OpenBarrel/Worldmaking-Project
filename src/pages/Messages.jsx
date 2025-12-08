import MessageBoard from "../components/MessageBoard"
import MessageModal from "../components/MessageModal"
import { Button } from "react-bootstrap"
import { useState, useEffect } from "react"

export default function Messages(props) {

    const [showModal, setShowModal] = useState(false);
    const [messages, setMessages] = useState([...JSON.parse(localStorage.getItem('messages') || '[]')]);

    function handleNewMessageClick() {
        setShowModal(true);
    }

    function loadMessages() {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages", {
            method: "GET",
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(response => response.json())
        .then (data => {
            setMessages(Object.entries(data.results));
        });
    }

    function handleNewMessage(msg) {

        const newMsg = {
            title: msg.title,
            content: msg.content,
            poster: 'Anonymous'
        }

        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": CS571.getBadgerId()
            },
            body: JSON.stringify(newMsg),
        }).then(res => {
            if (res.status === 200) {
                alert("Successfully posted!");
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
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => {
            if (res.status === 200) {
                alert("Successfully deleted!");
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

    return <div>
        <MessageModal visible={showModal} setVisible={setShowModal} newMessage={handleNewMessage}/>
        <Button variant="primary" className="mb-3" onClick={handleNewMessageClick}>New Message</Button>
        <MessageBoard messages={messages} remove={handleRemoveMessage}/>
    </div>
}