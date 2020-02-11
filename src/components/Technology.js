import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import techImage from '../images/desktopAppImage.png';
 
  
export default class Technology extends Component {
    render() {
        return (
            <div className="facility">
                <Container className="facilityContent">
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="facilityImageDisplay">
                                <img src={techImage} />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="securityContentDisplay">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h1>Technologies <span>we use</span></h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 