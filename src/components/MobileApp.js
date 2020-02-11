import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import mobileAppImage from '../images/mobileAppImage.png';
import Button1 from '../images/appButton1.svg';
import Button2 from '../images/appButton2.svg';
 
  
export default class MobileApp extends Component {
    render() {
        return (
            <div className="mobileApp">
                <Container className="mobileAppContent">
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="mobileAppImageDisplay">
                                <img src={mobileAppImage} />
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="securityContentDisplay">
                                <h4 className="contentSubTitle">Lorem ipsum dolor sit amet!!</h4>
                                <h1 className="contentTitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h1>
                                <p className="contentDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <span className="buttonDisplay">
                                    <a href="#">
                                        <img src={Button1} />
                                    </a>
                                    <a href="#">
                                        <img src={Button2} />
                                    </a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 