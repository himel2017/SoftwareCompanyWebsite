import React, { Component } from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import smallLogo from '../images/smallLogo.png';

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="headerTop">
                <Container>
                    <Row>
                        <Col lg={8} md={6} xs={12}>
                            <div>
                                <span className="socialMediaTitle">Follow us</span>
                                <span className="socialMediaIcon"><i class="fab fa-facebook-f"></i></span><a href="https://www.akij.net/"></a>
                                <span className="socialMediaIcon"><i class="fab fa-twitter"></i></span><a href="https://www.akij.net/"></a>
                                <span className="socialMediaIcon"><i class="fab fa-linkedin-in"></i></span><a href="https://www.akij.net/"></a>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className="company">
                                <span className="companyTitle">A sister concern of Akij Group</span>
                                <img className="companylogo" src={smallLogo} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
