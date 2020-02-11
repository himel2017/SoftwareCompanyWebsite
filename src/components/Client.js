import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"
import Client1 from '../images/client1.png';
import Client2 from '../images/client2.png';
import Client3 from '../images/client3.png';
import Client4 from '../images/client4.png';
import Client5 from '../images/client5.png';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default class Client extends Component {
    render() {
        const settings = {
          dots:false,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 6,
          centerMode: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        };
        return (
            <div className="client bp">
                <h1>Our Valuable clients</h1>
                <Slider {...settings}> 
                    <div>
                        <img src={ Client1 } />
                    </div>
                    <div>
                        <img src={ Client2 } />
                    </div> 
                    <div>
                        <img src={ Client1 } />
                    </div> 
                    <div>
                        <img src={ Client3 } />
                    </div> 
                    <div>
                        <img src={ Client4 } />
                    </div> 
                    <div>
                        <img src={ Client5 } />
                    </div> 
                    <div>
                        <img src={ Client2 } />
                    </div>
                </Slider>          
            </div>
        );
      }
}
