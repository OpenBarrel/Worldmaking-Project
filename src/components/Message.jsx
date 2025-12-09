import { Card, Button, Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import DeleteModal from "./DeleteModal";
import CommentModal from "./CommentModal";
import { UsernameContext } from "../constants/UsernameContext";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Message(props) {

    const MAX_LENGTH = 100;
    const [expanded, setExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const {username} = useContext(UsernameContext);
    const [showComments, setShowComments] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);

    function handleNewCommentClick() {
        setShowCommentModal(true);
    }

    function handleNewComment(comment) {
        const newMsg = {
            title: props[1].title,
            content: props[1].content,
            poster: props[1].poster,
            date: props[1].date,
            comments: [...(props[1].comments || []), {content: comment.content, likes: [], dislikes: []}]
        }

        fetch(`https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages?id=${props[0]}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": 'bid_4467b10c1dfb418fe8027efcd69b2f29d7f60931cfa07d7b8f9d936be5e36adc'
            },
            body: JSON.stringify(newMsg),
        }).then(res => {
            if (res.status === 200) {
                props.loadMessages();
            } else {
                alert("Failed to post message.");
            }
        })
     }

     function handleLikeDislike(comment, index, isLike) {
        let newComment = {};

        if (isLike) {
            newComment = {
                content: comment.content,
                likes: (comment.likes.includes(username) ? comment.likes.filter((e) => e !== username) : [...comment.likes, username]),
                dislikes: comment.dislikes.filter((e) => e !== username),
            }
        } else {
            newComment = {
                content: comment.content,
                likes: comment.likes.filter((e) => e !== username),
                dislikes: (comment.dislikes.includes(username) ? comment.dislikes.filter((e) => e !== username) : [...comment.dislikes, username]),
            }
        }

        const newComments = props[1].comments.with(index, newComment);    

        const newMsg = {
            title: props[1].title,
            content: props[1].content,
            poster: props[1].poster,
            date: props[1].date,
            comments: newComments
        }

        fetch(`https://cs571api.cs.wisc.edu/rest/f25/bucket/worldmakingmessages?id=${props[0]}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": 'bid_4467b10c1dfb418fe8027efcd69b2f29d7f60931cfa07d7b8f9d936be5e36adc'
            },
            body: JSON.stringify(newMsg),
        }).then(res => {
            if (res.status === 200) {
                props.loadMessages();
            } else {
                alert("Failed to post message.");
            }
        })
     }

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    function handleRemove() {
        props.remove(props[0]);
    }

    function handleDeleteClick() {
        setShowModal(true);
    }

    function handleCommentsClick() {
        setShowComments(!showComments);
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
        <CommentModal visible={showCommentModal} setVisible={setShowCommentModal} newComment={handleNewComment}/>
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
        <Card.Footer>
            {showComments ? 
            props[1].comments?.map((comment, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Card.Text>{comment.content}</Card.Text>
                        <div>
                            <Button disabled={username == null || username === ''}variant="outline-primary" onClick={() => handleLikeDislike(comment, index, true)}>{comment.likes.length}<i className={comment.likes.includes(username) ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}></i></Button>
                            <Button disabled={username == null || username === ''} variant="outline-primary" onClick={() => handleLikeDislike(comment, index, false)} className="ms-2">{comment.dislikes.length}<i className={comment.dislikes.includes(username) ? "bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down"}></i></Button>
                        </div> 
                    </Card.Body>
                </Card>))
            : 
            ''}
            <div className="d-flex justify-content-center">
                {props[1].comments ? <Button variant="primary" onClick={handleCommentsClick}>{showComments ? 'Hide Comments' : 'See Comments'}</Button>: ''}
                <Button variant="primary" className="ms-3" onClick={handleNewCommentClick}>Comment</Button>
            </div>
        </Card.Footer>
    </Card>
}