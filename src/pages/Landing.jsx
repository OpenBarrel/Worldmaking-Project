import { Container, Row, Col } from "react-bootstrap"

export default function Landing(props) {

    return <Container className="d-flex flex-column" style={{ height: "calc(100vh - 110px)"}}>
            <Row>
                <Col className="d-flex align-items-center justify-content-center mt-3">
                    <h1>Welcome to World for Everyone</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center mt-3">
                    <p className="fs-3 text-center" fluid>This is a platform where users can share the obstacles they are facing in 
                        their own lives and receive advice from their peers.</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center mt-3">
                    <p className="fs-3 text-center" fluid>If you choose to leave a post or comment, please be respectful of other users and
                        remain open-minded.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center mt-3">
                    <p className="fs-3 text-center" fluid>The <em>Featured Artists</em> page includes information about the people that 
                        inspired the creation of this platform.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center mt-3">
                    <p className="fs-3 text-center" fluid>Thank you and enjoy</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">
                    <p className="fs-3 text-center" fluid>- Noah</p>
                </Col>
            </Row>
        </Container>
}