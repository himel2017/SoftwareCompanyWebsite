import React, { Component } from 'react'
import LogoWrapper from './LogoWrapper'
import Navigation from './Navigation'
import HeaderTop from './HeaderTop'

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderTop/>
                <LogoWrapper/>
                <Navigation/>
            </div>
        )
    }
}
