import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../pages/about.module.css"
import about from "../images/about.jpg"
import Card from "react-bootstrap/Card"
const AboutPage = () => {
  return (
    <Layout>
      <div className={aboutStyles.home_container}>
        <div className={aboutStyles.banner_content}>
          <h2 className={aboutStyles.text_uppercase}>ABOUT US</h2>
          <div style={{ width: "180px", border: "1px solid #ff5f13" }}></div>
        </div>
      </div>
      <section className={aboutStyles.services}>
        <div className={aboutStyles.about}>
          <div
            className={aboutStyles.about_section}
            style={{ flex: "1 1 50%" }}
          >
            <div className={aboutStyles.service_heading}>
              <h1 className={aboutStyles.back_text}>ABOUT US</h1>
              <h1
                style={{
                  color: "#0e132a",
                  fontWeight: "700",
                  fontSize: "70px",
                }}
              >
                WHO WE ARE
              </h1>
            </div>
            <p style={{ textAlign: "justify" }}>
              Powertec Engineering ( Formerly AIA Power Consultancy ) , based
              out of of New Delhi , was established to provide comprehensive
              project engineering and financial advisory services for power and
              other infrastructure projects on a concept to commissioning basis.
              Following acquisition of Mantech Synergies, the engineering centre
              of the company was relocated to Chennai. The engineering centre
              comprises of a team of qualified and experienced professionals and
              is fully equipped with licensed advanced engineering softwares.
              Over 130 assignments have been executed for a diversified range of
              projects that include coal, gas, cogeneration, diesel, biomass
              power projects, 100 MLD sea water based Desalination project etc.
              Powertec Infrastructure and Financial Advisory Services division
              (PIFAS) provides customized advisory services such as policy
              advisory, demand assessment, project structuring, project
              financing, risk analysis and mitigation strategies and capacity
              building.
            </p>
            <p style={{ color: "#0e132a", fontWeight: "500" }}>
            Powertec Infrastructure Holdings Pvt. Ltd. (PIHPL) is a group company that undertakes the entire gamut of project development services for infrastructure projects. PIHPL is also the investment arm of the group with equity and other investment in engineering assets, urban infrastructure, water and sanitation projects etc.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className={aboutStyles.since}>
              <span>2001</span>
              <p>SINCE</p>
            </div>
            <img className={aboutStyles.about_image} src={about} alt="about" />
          </div>
        </div>
      </section>
      <section className={aboutStyles.services}>
        <div className={aboutStyles.service_heading}>
          <h1 className={aboutStyles.back_text}>EXPERTS</h1>
          <h1 style={{ color: "#0e132a", fontWeight: "700", fontSize: "70px" }}>
            OUR TEAM
          </h1>
        </div>
        <div className={aboutStyles.teams}>
          <Card style={{ width: "25rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={about} />
            <Card.Body>
              <Card.Title>Dr. S. Srikumar</Card.Title>
              <Card.Subtitle className="mb-2">Managing Director</Card.Subtitle>
              <Card.Text>
              A distinguished career spanning over 25 years in the Power Sector with experience in manufacture of auxiliary equipment, EPC Contracts, project development, coordination and project engineering consultancy. He was formerly Director on the board of AIA Engineering Ltd, Ahmedabad and Promac Engineering Industries Ltd, Bangalore.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={about} />
            <Card.Body>
              <Card.Title>Mrs.Sujatha Srikumar</Card.Title>
              <Card.Subtitle className="mb-2">Director</Card.Subtitle>
              <Card.Text>
              Ms. Sujatha Srikumar, Promoter Director of Powertec Engineering Pvt Ltd, is an electronics engineer and a management graduate from Indian Institute of Management, Ahmedabad, having over 30 years of experience in infrastructure privatisation and financing.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={about} />
            <Card.Body>
              <Card.Title>Mr.A.Vijayaraman</Card.Title>
              <Card.Subtitle className="mb-2">CEO/Director</Card.Subtitle>
              <Card.Text>
              A. Vijayaraman, A power professional with more than 35 years of experience in the sector with more than 30 years spent in senior positions at National Thermal Power Corporation of India, India’s largest national power utility. For the past 5 years, Mr Vijayaraman has been heading the engineering services business at Powertec as Director and CEO."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
