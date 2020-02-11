import React, { Component } from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Footer from '../components/Footer'
import Maintenance from '../components/Maintenance'
 
 

export default class about extends Component {
  render() {
    return (
      <div>
          <Header/>
          <HeroSlider/>
          <Maintenance/>
          <Footer/>
      </div>
    )
  }
}
