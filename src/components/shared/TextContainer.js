import React from "react"
import { Container, Row, Col } from "reactstrap"

const TextContainer = (props) => {
    return(
        <Container>
            <Row className="justify-content-center text-center py-4 py-md-4">
                <Col lg={props.thin ? 8 : 10}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default TextContainer