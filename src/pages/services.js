import React from "react"
import Layout from "../components/layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import style from "../pages/service.module.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from 'react-bootstrap/ListGroup'
const servicePage = () => {
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
          <h1>SERVICES</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col>
            <h1>Overview</h1>
            <p>
              Having both engineering and infrastructure management consultancy
              service divisions, Powertec has experience with wide ranging risk
              modelling covering: design risk, construction risk, risk
              assessment, operations risk, regulatory risk, financing risk etc.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Powertec has extensive experience in risk modelling across EPC and
              PPP projects and further understands risk perspectives from
              multiple perspectives:
            </p>
            <ListGroup style={{maxWidth:'500px'}}>
              <ListGroup.Item>Lender’s perspective</ListGroup.Item>
              <ListGroup.Item>Sponsor’s perspective </ListGroup.Item>
              <ListGroup.Item>
                Vendor or developer’s perspective
              </ListGroup.Item>
              <ListGroup.Item>Subcontractor perspectives and </ListGroup.Item>
              <ListGroup.Item>Beneficiary perspective</ListGroup.Item>
            </ListGroup>
            <p style={{marginTop:'1rem'}}>In the context of our infrastructure and financial advisory services (PIFAS), we have extensive experience across the value chain of financial modelling and assessment including risk assessment and advisory on raising of finance across the range of financial products.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default servicePage
