import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import desktopAppImage from '../images/desktopAppImage.png';
 
  
export default class DesktopApp extends Component {
    render() {
        return (
            <div className="desktopApp">
                <Container className="desktopAppContent">
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="securityContentDisplay">
                                <h4 className="contentSubTitle">Lorem ipsum dolor sit amet!!</h4>
                                <h1 className="contentTitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h1>
                                <p className="contentDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="desktopAppImageDisplay">
                                <img src={desktopAppImage} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 

 