import React from "react"
import Layout from "../../components/layout"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import style from "./powertec.module.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import bhel from '../../images/bhel.jpg'
import Image from 'react-bootstrap/Image'
import kpcl from '../../images/kpcl.png'
import bajaj from '../../images/bajaj.jpg'
import ces from '../../images/ces.png'
import aban from '../../images/aban.png'
import nta from '../../images/nta.jpg'
import ntpc from '../../images/ntpc.png'
import maha from '../../images/maha.png'
import udi from '../../images/udi.jpg'
import wbg from '../../images/wbg.png'
import infra from '../../images/infra.jpg'
import solar from '../../images/solar.jpg'
const powertec = () => {
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
          <h1>Powertec Engineering</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <p>
          Powertec Engineering (Formerly AIA Power Consultancy), based out of
          New Delhi, was established to provide comprehensive project
          engineering and financial advisory services for power and other
          infrastructure projects on a concept to commissioning basis.
        </p>
        <p>
          Following acquisition of Mantech Synergies, the engineering centre of
          the company was relocated to Chennai. The engineering centre comprises
          of a team of qualified and experienced professionals and is fully
          equipped with licensed advanced engineering software. Based on our
          team’s expertise, the engineering group provides myriad services for
          owners, EPC contractors as well as lenders including site studies,
          preparation of detailed project reports, vendor procurement, project
          management, assistance for statutory clearances, negotiation of
          concession agreements, assistance for achieving financial closure etc.
        </p>
        <p>Powertec Engineering provides the following services:</p>
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
            <Card.Header>Pre-project activities</Card.Header>
            <Card.Img variant="top" src={require('../../images/pre-project.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Site assessment, statutory clearances and Surveys
              </ListGroup.Item>
              <ListGroup.Item>Environment impact assessment</ListGroup.Item>
              <ListGroup.Item>Preliminary planning</ListGroup.Item>
              <ListGroup.Item>Evaluation of technologies</ListGroup.Item>
              <ListGroup.Item>System studies</ListGroup.Item>
              <ListGroup.Item>
                Feasibility and detailed project reports
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Design Engineering</Card.Header>
            <Card.Img variant="top" src={require('../../images/design.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Basic studies/engineering</ListGroup.Item>
              <ListGroup.Item>Design calculations and drawings</ListGroup.Item>
              <ListGroup.Item>Enquiry specifications</ListGroup.Item>
              <ListGroup.Item>Technical bid analysis</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Procurement Assessment</Card.Header>
            <Card.Img variant="top" src={require('../../images/procurement.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Vendor prequalification</ListGroup.Item>
              <ListGroup.Item>
                Issuing enquiries and receiving offers
              </ListGroup.Item>
              <ListGroup.Item>Commercial bid evaluation</ListGroup.Item>
              <ListGroup.Item>Purchase recommendation</ListGroup.Item>
              <ListGroup.Item>Purchase order preparation</ListGroup.Item>
              <ListGroup.Item>Vendor drawing review</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Project Management and co-ordination</Card.Header>
            <Card.Img variant="top" src={require('../../images/project-manage.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Project planning, scheduling and control
              </ListGroup.Item>
              <ListGroup.Item>Budgetary and cost control</ListGroup.Item>
              <ListGroup.Item>Communication management</ListGroup.Item>
              <ListGroup.Item>Interface co-ordination</ListGroup.Item>
              <ListGroup.Item>Contract administration</ListGroup.Item>
              <ListGroup.Item>
                Liaison with statutory authorities
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Inspection</Card.Header>
            <Card.Img variant="top" src={require('../../images/inspection.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Vendor appraisal</ListGroup.Item>
              <ListGroup.Item>Stage wise inspection</ListGroup.Item>
              <ListGroup.Item>Final inspection</ListGroup.Item>
              <ListGroup.Item>Expediting deliveries</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Construction Supervision</Card.Header>
            <Card.Img variant="top" src={require('../../images/construction.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>Vendor prequalification</ListGroup.Item>
              <ListGroup.Item>Planning of field activities</ListGroup.Item>
              <ListGroup.Item>
                Scheduling, monitoring and control of field activities
              </ListGroup.Item>
              <ListGroup.Item>Supervision &Certification</ListGroup.Item>
              <ListGroup.Item>Safety</ListGroup.Item>
              <ListGroup.Item>Site coordination</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "18rem" }}>
            <Card.Header>Commissioning Support</Card.Header>
            <Card.Img variant="top" src={require('../../images/commissioning.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Start-up and commissioning assistance
              </ListGroup.Item>
              <ListGroup.Item>Site performance tests</ListGroup.Item>
              <ListGroup.Item>O&M manual preparation</ListGroup.Item>
              <ListGroup.Item>As-built documentation</ListGroup.Item>
              <ListGroup.Item>Training of owner's personnel</ListGroup.Item>
              <ListGroup.Item>Troubleshooting</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card
            className={style.card}
            style={{ width: "20rem", marginBottom: "1rem" }}
          >
            <Card.Header>O&M consultancy</Card.Header>
            <Card.Img variant="top" src={require('../../images/o&m.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Develop project specific O&M philosophy
              </ListGroup.Item>
              <ListGroup.Item>
                Establish standards and bench marks for performance appraisal
              </ListGroup.Item>
              <ListGroup.Item>
                Contract documentation and management
              </ListGroup.Item>
              <ListGroup.Item>Spare parts management</ListGroup.Item>
              <ListGroup.Item>
                Periodic performance monitoring through on-site deployment of
                experts
              </ListGroup.Item>
              <ListGroup.Item>Optimization program</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "22rem" }}>
            <Card.Header>Desalination projects</Card.Header>
            <Card.Img variant="top" src={require('../../images/desalination.jpg')} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Independent Engineering consultancy covering basic /detailed
                engineering, on-site management up to commissioning.
              </ListGroup.Item>
              <ListGroup.Item>
                Supervision of trial run and PG test
              </ListGroup.Item>
              <ListGroup.Item>Claim settlement</ListGroup.Item>
              <ListGroup.Item>Lender’s engineer services.</ListGroup.Item>
              <ListGroup.Item>
                Independent engineering consultancy for O&M
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className={style.card} style={{ width: "24rem" }}>
            <Card.Header>Solar projects</Card.Header>
            <Card.Img variant="top" src={solar} />
            <ListGroup variant="flush">
              <ListGroup.Item>
                Development of roof top solar on BOOT basis
              </ListGroup.Item>
              <ListGroup.Item>EPC of solar projects</ListGroup.Item>
              <ListGroup.Item>
                Project development and implementation services
              </ListGroup.Item>
              <ListGroup.Item>Operation and Maintenance</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <p>
          Over 130 assignments have been executed for a diversified range of
          projects that include coal, gas, cogeneration, diesel, biomass power
          projects, 100 MLD sea water-based Desalination project, solar projects
          etc.
        </p>
        <h2>Select Clients</h2>
        <Container className={style.client} style={{marginBottom:"34px"}}>
          <Row style={{marginBottom:"20px"}} className="justify-content-md-center">
            <Col xs lg="4">
            <Image src={bhel} rounded />
            </Col>
            <Col xs lg="4">
            <Image src={kpcl} rounded />
            </Col>
          </Row>
          <Row style={{marginBottom:"20px"}} className="justify-content-md-center">
            <Col xs lg="4">
            <Image src={bajaj} rounded />
            </Col>
            <Col xs lg="4">
            <Image src={ces} rounded />
            </Col>
          </Row>
          <Row style={{marginBottom:"20px"}} className="justify-content-md-center">
            <Col xs lg="4">
            <Image src={aban} rounded />
            </Col>
            <Col xs lg="4">
            <Image src={nta} rounded />
            </Col>
          </Row>
          <Row style={{marginBottom:"20px"}} className="justify-content-md-center">
            <Col xs lg="4">
            <Image src={ntpc} rounded />
            </Col>
            <Col xs lg="4">
            <Image src={maha} rounded />
            </Col>
          </Row>
          <Row style={{marginBottom:"20px"}} className="justify-content-md-center">
            <Col xs lg="4">
            <Image src={udi} rounded />
            </Col>
            <Col style={{display:'flex',alignItems:'center'}} xs lg="4">
            <Image src={wbg} rounded />
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default powertec
