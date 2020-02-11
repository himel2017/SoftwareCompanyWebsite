import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import mobileAppImage from '../images/mobileAppImage.png';
 
  
export default class ServiceMobileApp extends Component {
    render() {
        return (
            <div className="serviceMobileApp">
                <Container className="serviceMobileAppContent">
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="serviceMobileAppImageDisplay">
                                <img src={mobileAppImage} />
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="securityContentDisplay">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h1><span>SOFTWARE</span> PRODUCTS WE DEVELOP</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 