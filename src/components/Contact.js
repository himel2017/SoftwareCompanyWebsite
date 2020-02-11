import React, {Component} from 'react';
import { Container , Row , Col, Form, Button} from 'react-bootstrap';
 
  
export default class Contact extends Component {
    render() {
        return (
            <div className="contact bp">
                <Container className="contactContent">
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="align-center">
                                <h1>Subscribe</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </Col>
                    </Row>
                    <Form>
                        <Row className="formBox">
                            <Col lg={5}>
                                <Form.Control placeholder="Name" />
                            </Col>
                            <Col lg={5}>
                                <Form.Control placeholder="Email" />
                            </Col>
                            <Col lg={2}>
                                <Button className="buttonStyle"> Submit </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}
 

 