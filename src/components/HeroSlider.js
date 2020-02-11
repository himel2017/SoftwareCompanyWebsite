import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"
import { Container, Row, Button, Col } from 'react-bootstrap';

export default class HeroSlider extends Component {
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

              <div  className="slide1 sliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={5} md={5} xs={5}>
                          <div className="sliderContent"> 
                            <h1> This benefit of ERP is one of the biggest selling points for the software </h1>
                            <p className="">  An integrated ERP system can provide immeasurable benefits to a business. </p>
                            <Button className="buttonStyle"> Learn More </Button>
                          </div>

                        </Col>
                         
                      </Row>
                    </Container>
                  </div>
              </div> 
              <div  className="slide1 sliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={5} md={5} xs={5}>
                          <div className="sliderContent"> 
                            <h1> This benefit of ERP is one of the biggest selling points for the software </h1>
                            <p className="">  An integrated ERP system can provide immeasurable benefits to a business. </p>
                            <Button className="buttonStyle"> Learn More </Button>
                          </div>

                        </Col>
                         
                      </Row>
                    </Container>
                  </div>
              </div> 
              <div  className="slide1 sliderDiv">
                  <div>
                    <Container>
                      <Row>
                        <Col lg={5} md={5} xs={5}>
                          <div className="sliderContent"> 
                            <h1> This benefit of ERP is one of the biggest selling points for the software </h1>
                            <p className="">  An integrated ERP system can provide immeasurable benefits to a business. </p>
                            <Button className="buttonStyle"> Learn More </Button>

                          </div>

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
