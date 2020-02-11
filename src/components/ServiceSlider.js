import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Button, Col } from 'react-bootstrap';
import sliderImage1 from '../images/ServiceSlider.png';

export default class ServiceSlider extends Component {
    render() {
        const settings = {
         
          arrows:true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        };
        return (
          <div>
          
            <Slider {...settings}> 

              <div className="serviceSliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={6} md={6} xs={6}>
                          <div className="serviceSliderContent"> 
                            <span> THE SCOPE OF OUR OUTSOURCED <b>PRODUCT DEVELOPMENT</b> </span>
                            <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                          <img src={sliderImage1} />
                        </Col>
                      </Row>
                    </Container>
                  </div>
              </div>
              <div className="serviceSliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={6} md={6} xs={6}>
                          <div className="serviceSliderContent"> 
                            <span> THE SCOPE OF OUR OUTSOURCED <b>PRODUCT DEVELOPMENT</b> </span>
                            <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                          <img src={sliderImage1} />
                        </Col>
                      </Row>
                    </Container>
                  </div>
              </div> 
              <div className="serviceSliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={6} md={6} xs={6}>
                          <div className="serviceSliderContent"> 
                            <span> THE SCOPE OF OUR OUTSOURCED <b>PRODUCT DEVELOPMENT</b> </span>
                            <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                          <img src={sliderImage1} />
                        </Col>
                      </Row>
                    </Container>
                  </div>
              </div> 
            </Slider>           
          </div>
        );
      }
}
