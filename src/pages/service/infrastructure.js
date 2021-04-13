import React from "react"
import style from "./infra.module.css"
import worldbank from "../../images/worldbank.png"
import worldbankgroup from "../../images/worldbankgroup.png"
import dfid from "../../images/dfid.jpg"
import iifcl from "../../images/iifcl.jpg"
import ppiaf from "../../images/ppiaf.jpg"
import kfw from "../../images/kfw.png"
import ifc from "../../images/ifc.png"
import adb from "../../images/adb.png"
import Layout from "../../components/layout"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import infra from '../../images/infra.jpg'

const infrastructure = () => {
  return (
    <Layout>
      <Jumbotron as="div" className={style.container}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "5px",
            padding: "0 10px",
            borderBottom: "2px solid #ff5f13",
          }}
        >
          <h1>Powertec Infrastructure and Financial Advisory Services</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <p>
          Powertec Infrastructure and Financial Advisory Services (PIFAS) boasts of a highly experienced team of infrastructure and finance experts who oversee hands-on execution of assignments by incorporating their deep understanding of bond markets, municipal bonds, credit rating and capital market regulations.
        </p>
        <p>
        The team carries out assignments in the fields of the design and management of infrastructure funds by leveraging their in-depth knowledge of the institutional and regulatory framework governing the water, wastewater, transportation and municipal sectors, their familiarity with global best practices in infrastructure and municipal finance and privatization and their close working relationships with regulators, policy makers, credit rating agencies, investment banks, financial institutions and private equity funds. This involvesassessment of value chain of infrastructure project development, financial modeling and project structuring, credit assessment, risk evaluation and mitigation as well as advisory services for raising finances across a gamut of financial products. 
        </p>
        <p>PIFAS provides the following services:</p>
        <div
          className="df"
          style={{
            alignItems: "baseline",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Card
            className={style.card}
            style={{ width: "18rem", marginBottom: "1rem" }}
          >
            <Card.Header>Market Analysis, financial scoping and investment strategy</Card.Header>
            <Card.Img variant="top" src={require('../../images/market_analysis.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
              Sector Assessment Studies
              </ListGroup.Item>
              <ListGroup.Item>Identification of Investment Opportunity</ListGroup.Item>
              <ListGroup.Item>Demand Estimation Studies</ListGroup.Item>
              <ListGroup.Item>Market Development Strategies</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Project Structuring and Financing</Card.Header>
            <Card.Img variant="top" src={require('../../images/project-structure.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Arranging Debt and Equity Funding for Infrastructure Projects</ListGroup.Item>
              <ListGroup.Item>Financial Modelling, Design of Project Financing Structures, Credit Enhancements and Specific Financial Instruments</ListGroup.Item>
              <ListGroup.Item>Preparation of Investment Banking reports, Information Memorandum, Offer documents for debt and equity instruments</ListGroup.Item>
              <ListGroup.Item>Evaluation of concession, financing agreements, input supply and other relevant contracts</ListGroup.Item>
              <ListGroup.Item>Commercial and financial evaluation, assessment of project, sponsor acquisition etc.</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Policy Advisory</Card.Header>
            <Card.Img variant="top" src={require('../../images/policy.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Infrastructure and Policy Advisory</ListGroup.Item>
              <ListGroup.Item>
              Infrastructure Regulations
              </ListGroup.Item>
              <ListGroup.Item>Institutional and Policy Reforms</ListGroup.Item>
              <ListGroup.Item>Restructuring of Public Utilities</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Training and Capacity Building</Card.Header>
            <Card.Img variant="top" src={require('../../images/training.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
              Institutional Strengthening and Organisational Restructuring
              </ListGroup.Item>
              <ListGroup.Item>Training Needs Assessment Studies</ListGroup.Item>
              <ListGroup.Item>Design and Structuring of Training Programmes</ListGroup.Item>
              <ListGroup.Item>Preparation of Toolkits</ListGroup.Item>
              <ListGroup.Item>Personnel Training Workshops and Seminars</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <p>
        PIFAS has extensive experience in structuring PPP transactions and bid process management across sectors including energy, water supply, waste-water, and sanitation, urban transportation, roads, ports and airports and is reputed for delivering high quality, customized advisory solutions.   
        </p>
        <h2>Select Clients</h2>
        <Container className={style.client} style={{ marginBottom: "34px" }}>
          <Row
            style={{ marginBottom: "20px" }}
            className="justify-content-md-center"
          >
            <Col md lg="5">
              <Image style={{objectFit: 'contain', width: '250px'}} src={require('../../images/uncdf.jpg')} rounded />
            </Col>
            <Col md lg="5">
              <Image src={worldbankgroup} rounded />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "20px" }}
            className="justify-content-md-center"
          >
            <Col xs lg="5">
              <Image src={ppiaf} rounded />
            </Col>
            <Col xs lg="5">
              <Image src={ifc} rounded />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "20px" }}
            className="justify-content-md-center"
          >
            <Col xs lg="5">
              <Image src={iifcl} rounded />
            </Col>
            <Col xs lg="5">
              <Image src={kfw} rounded />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "20px" }}
            className="justify-content-md-center"
          >
            <Col xs lg="5">
              <Image src={adb} rounded />
            </Col>
            <Col xs lg="5">
              <Image src={dfid} rounded />
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default infrastructure
