import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import securityImage1 from '../images/security1.png'
import securityImage2 from '../images/security2.png'
 
  
export default class Security extends Component {
    render() {
        return (
            <div className="security">
                <Container className="securityContent">
                    <Row>
                        <Col lg={6} md={12} xs={12}>
                            <div className="SecurityImageDisplay">
                                <img className="securityImage1" src={securityImage1} />
                                <img className="securityImage2" src={securityImage2} />
                            </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>
                            <div className="securityContentDisplay">
                                <h4 className="contentSubTitle">Lorem ipsum dolor sit amet!!</h4>
                                <h1 className="contentTitle">Built with security at its very core</h1>
                                <p className="contentDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 