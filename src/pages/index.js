import React, { Component } from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Footer from '../components/Footer'
import Security from '../components/Security'
import Service from '../components/Service'
import MobileApp from '../components/MobileApp'
import DesktopApp from '../components/DesktopApp'
import Contact from '../components/Contact'
import Client from '../components/Client'
 
 

export default class index extends Component {
  render() {
    return (
      <div>
          <Header/>
          <HeroSlider/>
          <Security/>
          <Service/>
          <MobileApp/>
          <DesktopApp/>
          <Contact/>
          <Client/>
          <Footer/>
      </div>
    )
  }
}
