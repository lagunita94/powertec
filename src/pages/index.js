import React, { useEffect } from "react"
import './index.css';
import Layout from "../components/layout"
import engineering from "../images/engineering.jpg";
import infra from "../images/infra.jpg";
import icon from "../images/list_icon.png";
import about from "../images/about.jpg"

const IndexPage = ({data}) => {
  useEffect(() => {
    setTimeout(() => {
      let banner = document.querySelector(".banner-content");
      banner.classList.add("fade");
    },1000);
  })
  return (
<Layout>
    <div className="home-container">
      <div className="banner-content">
      <h6 className="text-uppercase">Don’t look further, here is the key</h6>
      <h1>We provide Engineering, Infrastructure and Financial Advisory Services</h1>
      <p className="text-white">Powertec Engineering Pvt. Ltd. is a multi-disciplinary engineering consultancy organisation established in 2001</p>
      </div>
      <div className="scroll">
        <p>Scroll Down</p>
        <div className="scroll_icon" onClick={() => {window.scrollTo(0,1000)}} onKeyDown={() => {window.scrollTo(0,1000)}}></div>
      </div>
    </div>
    <section className="services">
      <div className="service_heading">
      <h1 className="back-text">SERVICES</h1>
      <h1 style={{color: "#0e132a",fontWeight: "700",fontSize: "70px"}}>OUR SERVICES</h1>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <div className="service_1">
        <div style={{overflow:"hidden"}}>
          <img className="eng_image" src={engineering} alt="engineering"/>
        </div>
        <div className="service_section" style={{flex:"1 1 50%"}}>
          <h2 className="service">ENGINEERING SERVICES</h2>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Project Developement</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Detailed Project Report</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>EPC Engineering</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Owner's Engineering</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Lender's Engineering</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Review Engineering</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Operations & Maintenance</p>
        </div>
      </div>
      <div className="service_2">
        <div style={{overflow:"hidden"}}><img className="infra_image" src={infra} alt="engineering"/></div>
        <div className="service_section" style={{flex:"1 1 50%"}}>
          <h2 className="service">INFRASTRUCTURE & FINANCIAL ADVISORY SERVICES</h2>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Market Analysis</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Financial Scoping & Investment Strategy</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Project Structuring & Financing</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Policy Advisory</p>
          <p className="list"><span><img className="icon" src={icon} alt="icon"/></span>Training & Capacity Building</p>
        </div>
      </div>
      </div>
    </section>
    <section className="aboutus">
    <div className="about">
        <div className="about_section" style={{flex:"1 1 50%"}}>
        <div className="service_heading">
      <h1 className="back-text">ABOUT US</h1>
      <h1 style={{color: "#0e132a",fontWeight: "700",fontSize: "70px"}}>WHO WE ARE</h1>
      </div>
        <p>
      Powertec Engineering Pvt. Ltd. is a multi-disciplinary engineering consultancy organisation established in 2001, with its main focus on developing power projects from concept to commissioning. It has executed more than 130 assignments in the power sector encompassing coal, gas and bio-mass based power projects. It has also been involved in project development, engineering and O&M services for water desalination plants. Today, Powertec possesses a diversified range of experience in power, water, road and civil construction sectors.
      </p>
      <p style={{color: "#0e132a",fontWeight: "500"}}>
      Powertec Infrastructure and Financial Advisory Services division (PIFAS) provides customized advisory services such as policy advisory, demand assessment, project structuring, project financing, risk analysis and mitigation strategies and capacity building.
      </p>
        </div>
        <div style={{flex:"1 1 50%",overflow:"hidden",position:"relative"}}>
          <div className="since">
            <span>2001</span>
            <p>SINCE</p>
          </div>
          <img className="about_image" src={about} alt="about"/>
        </div>
      </div>
    </section>
  </Layout>
  )
}


export default IndexPage

