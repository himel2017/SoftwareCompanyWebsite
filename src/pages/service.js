import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import ServiceMobileApp from '../components/serviceMobileApp';
import Facility from '../components/Facility';
import Service from '../components/Service';
import Technology from '../components/Technology';
 
 

export default class service extends Component {
  render() {
    return (
      <div>
          <Header/>
          <ServiceSlider/>
          <ServiceMobileApp/>
          <Facility/>
          <Service/>
          <Technology/>
          <Footer/>
      </div>
    )
  }
}
