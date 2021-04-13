import React from "react"
import Layout from "../../components/layout"
import style from "./powertec.module.css"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Jumbotron from "react-bootstrap/Jumbotron"
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
          <h1>Powertec Engineering Projects</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Project Development</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Project Development Services
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>125 MW coal-based power plant</td>
              <td>Dakar, Senegal</td>
              <td>Compagnie d’Electricite du Senegal</td>
            </tr>
            <tr>
              <td>2 X 660 MW Coal Fired Super Critical Power Plant</td>
              <td>Kakinada, Andhra Pradesh </td>
              <td>Spectrum Power Generation Limited</td>
            </tr>
            <tr>
              <td>2 X 500 MW Coal Based Power Station</td>
              <td>Marwah, Chhattisgarh </td>
              <td>NBCC </td>
            </tr>
            <tr>
              <td>70 MW lignite-based plant</td>
              <td>Gurah,Rajasthan</td>
              <td>RVPN</td>
            </tr>
            <tr>
              <td>3X660 MW coal-based plant</td>
              <td>Lalitpur, UP</td>
              <td>BIDCO</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Feasibility Report</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Feasibility Report/Detailed Project Report
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4000 (5X800) MW Coal Based Coastal Thermal Power Plant</td>
              <td>Tamil Nadu</td>
              <td>IL&FS</td>
            </tr>
            <tr>
              <td>2X660 MW Captive Thermal Power Plant</td>
              <td>Tamil Nadu </td>
              <td>New Tirupur Area Development Corporation Ltd</td>
            </tr>
            <tr>
              <td>2X300 MW Coal Based Thermal Power Plant</td>
              <td>Chitrakoot, Uttar Pradesh</td>
              <td>Creative Thermolite Power Pvt Ltd</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>EPC Engineering</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            EPC Engineering Services
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2X660 MW Design Consultancy for Coal Handling Plant</td>
              <td>Meja, Uttar Pradesh</td>
              <td>BHEL</td>
            </tr>
            <tr>
              <td>
                1X500 MW Design Consultancy for 1000 TPH Coal Handling Plant for
                Bellary - 2.
              </td>
              <td>Bellary, Karnataka</td>
              <td>BHEL - PSSR</td>
            </tr>
            <tr>
              <td>70 MW Lignite Based Thermal Power Plants (Case 2 Bid)</td>
              <td>Gurha, Rajasthan</td>
              <td>SPML</td>
            </tr>
            <tr>
              <td>500 MW Unchahar</td>
              <td>Unchahar,UP</td>
              <td>NBPPL</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Owner’s Engineering</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Owner’s Engineering Services
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3X660 MW coal-based plant</td>
              <td>Lalitpur, UP</td>
              <td>BIDCO</td>
            </tr>
            <tr>
              <td>2x660 MW Supercritical Plant</td>
              <td>Chhattisgarh</td>
              <td>IFFCO</td>
            </tr>
            <tr>
              <td>330 MW CC Gas Based Power Plant</td>
              <td>Dholpur, Rajasthan</td>
              <td>Rajasthan Rajya Vidyut Utpadan Nigam Ltd (RRVUNL)</td>
            </tr>
            <tr>
              <td>125 MW coal-based power plant</td>
              <td>Dakar, Senegal</td>
              <td>Compagnie d’Electricite du Senegal</td>
            </tr>
            <tr>
              <td>330 MW CC Gas Based Power Plant</td>
              <td>Pillaiperumanallur, Tamil Nadu</td>
              <td>PPN Power Generating Co Ltd</td>
            </tr>
            <tr>
              <td>160 MW CC Gas Based Plant</td>
              <td>Ramgarh, Rajasthan </td>
              <td>RRVUNL</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Lender’s Engineering</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Lender’s Engineering Services
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>67 MW Coal Based Power Plant for Inland Power Ltd</td>
              <td>Gola, Jharkhand</td>
              <td>Consortium of Banks led by State Bank of India</td>
            </tr>
            <tr>
              <td>300 MW Coal Based Plant for Kaizen Power Ltd</td>
              <td>Vishakhapatnam, Andhra Pradesh</td>
              <td>Consortium of Banks led by UCO Bank</td>
            </tr>
            <tr>
              <td>2x660 MW Plant for NSL Nagapatnam Power & Infratech Ltd</td>
              <td>Talcher, Orissa</td>
              <td>REC Ltd</td>
            </tr>
            <tr>
              <td>100 MLD Water Desalination Plant for Chennai Water Desalination Ltd</td>
              <td>Minjur, Chennai</td>
              <td>Canara Bank</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Review Engineering</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Review Engineering Services
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2X 600 MW Project for CHP </td>
              <td>North Chennai</td>
              <td>BHEL - ISG </td>
            </tr>
            <tr>
              <td>2X800 MW Thermal Power Project for CHP & AHP for Review Engineering</td>
              <td>Yermaras, Karnataka</td>
              <td>BHEL - ISG</td>
            </tr>
            <tr>
              <td>10X45 MW Coal Based Power Plant</td>
              <td>Uttar Pradesh </td>
              <td>Bajaj Infrastructure Development Company Ltd</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Solar Energy</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Solar Energy & Renewables
          </h1>
        </div>
        <p>Powertec undertakes engineering work in solar renewables through special arrangement with SunAura (specialist firm in renewables)</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Management Consultancy for 4.5 MW solar project</td>
              <td>Tamil Nadu</td>
              <td>Indian Oil Corporation Limited</td>
            </tr>
            <tr>
              <td>Project Management Consultancy for 8 MW solar project</td>
              <td>Gujarat</td>
              <td>Indian Oil Corporation Limited</td>
            </tr>
            <tr>
              <td>Preparation of tender document bid management support Project management for 2 MW project</td>
              <td>Namrup, Assam</td>
              <td>Assam Power Generating Company Limited(APGCL)</td>
            </tr>
            <tr>
              <td>Detailed Design Engineering, Project Management Consultancy and Commissioning Assistance for 1 MW project</td>
              <td>Bhankheri, Narnaul, Haryana</td>
              <td>Utrecht Solar Private Limited</td>
            </tr>
            <tr>
              <td>Site Analysis, Technology selection, Basic and detailed design & engineering, Preparing of RFP & technical specifications, Project supervision, Pre-commissioning tests, and Preparation of O & M manual for 1 MW project</td>
              <td>Greater Noida, Uttar Pradesh</td>
              <td>Elcomponics Technologies India Pvt Ltd</td>
            </tr>
            <tr>
              <td>Project feasibility study, Preparation of DPR, Technology selection & Technical support in procurement, Basic and detailed design & engineering, and Project supervision for 1 MW project</td>
              <td>Ujjain, Madhya Pradesh</td>
              <td>Sai Saburi Urja Pvt. Ltd.</td>
            </tr>
            <tr>
              <td>Site Analysis, Basic Design and Engineering, Finalization of Technical specifications of system components, Project techno-economic feasibility analysis, and Preparation of DPR for 100 MW project</td>
              <td>Nellore, Andhra Pradesh</td>
              <td>Archer Business Solutions Pvt. Ltd.</td>
            </tr>
            <tr>
              <td>Detailed design and engineering for 500 kW project</td>
              <td>Pune, Maharashtra</td>
              <td>Addwatt Power Solutions Pvt. Ltd.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export default powertec
