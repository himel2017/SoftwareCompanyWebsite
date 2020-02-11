import React, {Component} from 'react';
import { Container , Row , Col, Button} from 'react-bootstrap';
import serviceImage1 from '../images/serviceImage1.png';
import serviceImage2 from '../images/serviceImage2.png';
import serviceImage3 from '../images/serviceImage3.png';
import serviceImage4 from '../images/serviceImage4.png';
import serviceImage5 from '../images/serviceImage5.png';
import serviceImage6 from '../images/serviceImage6.png';
 
  
export default class Service extends Component {
    render() {
        return (
            <div className="service bp">
                <Container className="serviceContent">
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="align-center">
                                <span className="serviceTitle"> Service<b> We provide</b> </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="serviceDiv">
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage1} />
                                <h2>ERP Software</h2>
                                <Button className="serviceButton rippleButton"> View Now </Button>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage2} />
                                <h2>Website</h2>
                                <Button className="serviceButton"> View Now </Button>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage3} />
                                <h2>Sales App</h2>
                                <Button className="serviceButton"> View Now </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="serviceDiv">
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage4} />
                                <h2>Logistics</h2>
                                <Button className="serviceButton"> View Now </Button>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage5} />
                                <h2>Trade App</h2>
                                <Button className="serviceButton"> View Now </Button>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="serviceCard">
                                <img src={serviceImage6} />
                                <h2>Fuel Cart</h2>
                                <Button className="serviceButton"> View Now </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
} 

 