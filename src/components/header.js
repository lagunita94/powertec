import PropTypes from "prop-types"
import React from "react"
import './header.css'
import {Link} from "gatsby";
import NavDropdown from 'react-bootstrap/NavDropdown'
const Header = ({ siteTitle }) => {

  return (
      <div className="custom-nav-bar">
        <div className="branding">
          <div className="logo"></div>  
          <p className="brand">POWERTEC ENGINEERING</p>
        </div>
        <div className="custom-nav">
          <div className="custom-navbar">
            <Link to="/" activeClassName="active"><p className="underline">Home</p></Link>
            <NavDropdown className="underline" title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Overview</NavDropdown.Item>
              <NavDropdown.Item href="/coreteam">Core Team</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="underline" title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Overview</NavDropdown.Item>
              <NavDropdown.Item href="/service/powertec">Powertec Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/service/infrastructure">Powertec Infrastructure and Financial Advisory Services</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="underline" title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/powertec-Engineering">Powertec Engineering Projects</NavDropdown.Item>
              <NavDropdown.Item href="/projects/powertec-infrastructure">Powertec Infrastructure and Financial Advisory Services Projects</NavDropdown.Item>
          </NavDropdown>
            <Link to="/ContactUs" activeClassName="active"><p className="underline">Contact Us</p></Link>
            <Link to="/gallery" activeClassName="active"><p className="underline">Gallery</p></Link>
          </div>
        </div>
      </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
