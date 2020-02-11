import React, { Component } from 'react'
import { Link } from "gatsby"
import { Navbar, Nav , Container} from "react-bootstrap"

export default class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg" id="site-navbar">
            <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Link to="/" className="link-no-style">  <Nav.Link as="span" eventKey="">  Home </Nav.Link>  </Link>
                <Link to="/about" className="link-no-style"> <Nav.Link as="span" eventKey="page1"> About  </Nav.Link>  </Link>
                <Link to="/service" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> Services & Products  </Nav.Link>  </Link>
                <Link to="/team" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> Our Team  </Nav.Link>  </Link>
                <Link to="/contact" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> Contact us  </Nav.Link>  </Link>
                <Link to="/career" className="link-no-style"> <Nav.Link as="span" eventKey="page2"> Career  </Nav.Link>  </Link>

              </Nav> 
            </Navbar.Collapse>

            </Container>
          </Navbar>
        )
    }
}
