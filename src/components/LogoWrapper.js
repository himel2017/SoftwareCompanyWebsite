import React, { Component } from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import { Link } from "gatsby"
import newLogo from '../images/logo.svg'

export default class LogoWrapper extends Component {
    render() {
        return (
            <div className="logoWrapper">
                <Container>
                    <Row>
                        <Col lg={4} xs={6}>
                            <div className="logo">
                                 <Link to="/">  <img src={newLogo} /> </Link>
                                 <span className="unitTitle">INFOTECH LTD.</span>
                            </div>
                        </Col>
                        <Col lg={8}  xs={6}>
                            <div className="quick_box_wrapper">
                                <div className="quick_box">
                                    <div className="quick_icon">
                                    <i className="fas fa-phone-alt"></i> 
                                    </div>
                                    <div className="quick_details">
                                        <h3>Toll Free Hotline</h3>
                                        <p>08000016609</p>
                                    </div>
                                </div>

                                <div className="quick_box">
                                    <div className="quick_icon">
                                    <i className="fas fa-envelope"></i> 
                                    </div>
                                    <div className="quick_details">
                                        <h3>For more info</h3>
                                        <p>infotect@akij.net</p>
                                    </div>
                                </div>

                                <div className="quick_box qualityFirst  "> 
                                    <div className="boxtopright"></div>
                                    <h3>"Quality First"</h3>
                                    <p>-SK. AKIJ UDDIN</p> 
                                    <div className="boxbottomleft"></div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
