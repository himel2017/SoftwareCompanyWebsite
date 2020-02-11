import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import desktopAppImage from '../images/desktopAppImage.png';
 
  
export default class Facility extends Component {
    render() {
        return (
            <div className="facility">
                <Container className="facilityContent">
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="securityContentDisplay">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h1>WHY</h1>
                                <h2>akij infotech</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="facilityImageDisplay">
                                <img src={desktopAppImage} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 