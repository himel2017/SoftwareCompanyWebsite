import React, {Component} from 'react';
import { Container , Row , Col} from 'react-bootstrap';
import { Link } from "gatsby";
import logoFooter from '../images/logo.png';
import callCenterLogo from '../images/call-center-logo.svg';
 
  
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterArea pt">
                <Container>
                    <Row> 
                        <Col lg={3}>
                            <div className="quick-detail text-center">
                                <div className="first-widget">
                                    <Link to="/">  <img src={logoFooter} /> </Link>
                                    <span className="unitTitle">INFOTECH LTD.</span>
                                </div>
                                <div>
                                    <span className="socialMediaTitle">Connect with Social Media</span>
                                </div>
                                <div>
                                    <span className="footerSocialIcon"><i class="fab fa-facebook"></i></span><a href="https://www.akij.net/"></a>
                                    <span className="footerSocialIcon"><i class="fab fa-twitter-square"></i></span><a href="https://www.akij.net/"></a>
                                    <span className="footerSocialIcon"><i class="fab fa-linkedin"></i></span><a href="https://www.akij.net/"></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="quick-address">
                              <h2>Contact Us</h2>
                                <div className="quick-icon">
                                        <ul>
                                            <li> <span><i class="fas fa-phone-alt"></i></span>  <a> +880 96131 16609 </a>  </li>
                                            <li> <span><i class="far fa-envelope"></i></span>  <a> infotech@akij.net  </a> </li>
                                            <li> <span><i class="fas fa-map-marker-alt"></i></span>  <a> Akij House, 198 Bir Uttam, Mir Shawkat Sarak, Gulshan Link Road, Tejgaon, Dhaka-1208 </a>  </li>
                                            <li> <span><i class="far fa-clock"></i></span>  <a> Sat to Thu - 9:00am to 6:00pm (Friday Closed)  </a> </li>                                               
                                        </ul>
                                    </div>
                                </div>
                        </Col>
                        <Col lg={4}>
                            <div className="quick-address">
                                <h2> Important Links </h2>
                            </div>
                            <div className="single-widget-menu">
                                <ul>
                                    <li><a href="https://contactcenter.akij.net/" target="_blanck">Contact Center</a></li>
                                    <li><a href="https://career.akij.net/" target="_blanck">Career</a></li>
                                    <li><a href="http://servicedesk.akij.net/" target="_blanck">Services Desk</a></li>
                                </ul>
                            </div>

                            <div className="single-widget-menu">
                                <ul>
                                    <li><a href="https://www.akij.net/" target="_blanck">Copyright Policy</a></li>
                                    <li><a href="https://www.akij.net/" target="_blanck">Privacy Policy</a></li> 
                                    <li><a href="https://www.akij.net/" target="_blanck">F.A.Q</a></li> 
                                </ul>
                            </div>
                            <div className="single-widget-menu">
                                <Link to="/">  <img className="callCenterLogo" src={callCenterLogo} /> </Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className="copy">
                                <p> &copy; Copyright © 2019 ASLL. All rights reserved. Developed by <a href="http://www.akij.net" target="_blanck"> <b>Akij Group IT</b></a> </p>
                            </div>
                        </Col>
                    </Row>
                     
                </Container>
            </div>
        )
    }
}
 

 