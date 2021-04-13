import React from "react"
import Layout from "../../components/layout"
import style from "./infra.module.css"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import Jumbotron from "react-bootstrap/Jumbotron"
const infra = () => {
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
          <h1>Powertec Infrastructure and Financial Advisory Services Project</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Business & Finance</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Business Plans & Financing Strategies
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Business & Financing Plan for National Capital Region Planning
                Board (NCRPB) Under Capacity Development Program
              </td>
              <td>Asian Development Bank (ADB)/ IPE Global</td>
            </tr>
            <tr>
              <td>
                Business and Financing Plan for Urban Water Supply & Sanitation
                Sector in Rajasthan
              </td>
              <td>The World Bank/ Government of Rajasthan</td>
            </tr>
            <tr>
              <td>Business Plan for Urban Infrastructure PPP Fund</td>
              <td>KfW/ Ministry of Urban Development </td>
            </tr>
            <tr>
              <td>
                Financing Strategies and Advice for 7 ULBs in Greater Mumbai
              </td>
              <td>Government of Maharashtra/ The World Bank</td>
            </tr>
            <tr>
              <td>
                Business & Financing plan for Madhya Pradesh Urban
                Infrastructure Fund
              </td>
              <td>Government of Madhya Pradesh / DFID / ICF International</td>
            </tr>
            <tr>
              <td>Design of City Sanitation Fund, India</td>
              <td>Bill Gates and Melinda Foundation/ CEPT University</td>
            </tr>
            <tr>
              <td>
                Assessment of Selected Financial Institutions for Sanitation
                Credit, India
              </td>
              <td>Bill Gates and Melinda Foundation/ CEPT University</td>
            </tr>
            <tr>
              <td>Nepal Infrastructure Sector Assessment Program</td>
              <td>The World Bank/ Government of Nepal</td>
            </tr>
            <tr>
              <td>
                Strengthening the Investment Climate for Infrastructure Projects
                in India
              </td>
              <td>Department of Economic Affairs, Ministry of Finance</td>
            </tr>
            <tr>
              <td>
                Advisory Services to Jana Small Finance Bank for infrastructure
                credit
              </td>
              <td>Jana Small Finance Bank</td>
            </tr>
            <tr>
              <td>PPP Scenarios in India</td>
              <td>Korean Infrastructure Development Institute</td>
            </tr>
            <tr>
              <td>Business Plan for National Green Urban Mobility Fund</td>
              <td>Ministry of Housing and Urban Affairs</td>
            </tr>
            <tr>
              <td>Advisory Services to National Development Fund</td>
              <td>
                The National Development Fund (NDF), Kingdom of Saudi Arabia
              </td>
            </tr>
            <tr>
              <td>Financing Facility for Rural Transformation</td>
              <td>KfW/ National Bank for Agriculture and Rural Development</td>
            </tr>
            <tr>
              <td>Restructuring USD 1.2 Billion Line of Credit to IIFCL</td>
              <td>
                The World Bank/ Indian Infrastructure Finance Company Ltd.
              </td>
            </tr>
            <tr>
              <td>Regional Infrastructure for Growth Project, Philippines</td>
              <td>The World Bank/ Development Bank of Philippines</td>
            </tr>
            <tr>
              <td>Lessons from the Indian Municipal Bonds Experience</td>
              <td>
                The World Bank/ Public-Private Infrastructure Advisory Facility
                (PPIAF)
              </td>
            </tr>
            <tr>
              <td>Municipal Bond Initiative – Bangladesh</td>
              <td>United Nations Capital Development Fund</td>
            </tr>
            <tr>
              <td>Regional Infrastructure for Growth Project, Philippines</td>
              <td>The World Bank/ Development Bank of Philippines</td>
            </tr>
            <tr>
              <td>Regulatory framework for Municipal Borrowing</td>
              <td>The World Bank/ Ministry of Urban Development</td>
            </tr>
            <tr>
              <td>
                PPIAF program support evaluation in Uganda; Support for private
                sector participation in infrastructure
              </td>
              <td>The World Bank/ PPIAF</td>
            </tr>
            <tr>
              <td>
                Support Programs for Urban Reforms (SPUR) Project in Bihar
              </td>
              <td>Government of Bihar, India</td>
            </tr>
            <tr>
              <td>Preparation of India Smart Cities Project</td>
              <td>The World Bank/ Ministry of Housing and Urban Affairs</td>
            </tr>
            <tr>
              <td>
                Financial and Market Assessment of Water Supply and Sanitation
                in Two ULBs
              </td>
              <td>The World Bank/ Government of Orissa</td>
            </tr>
          </tbody>
        </Table>
        <div className={style.service_heading}>
          <h1 className={style.back_text}>Sanitation</h1>
          <h1
            style={{
              color: "#0e132a",
              fontWeight: "700",
              fontSize: "50px",
            }}
          >
            Water, Waste Water & Sanitation
          </h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South Asia Water Sector Assessment</td>
              <td>International Finance Corporation</td>
            </tr>
            <tr>
              <td>
                Rapid assessment of Karnataka Waste Water Reuse Opportunity
              </td>
              <td>International Finance Corporation</td>
            </tr>
            <tr>
              <td>Study on the Solid Waste Management Sector – Bangladesh</td>
              <td>International Finance Corporation</td>
            </tr>
            <tr>
              <td>
                Developing a PPP Model for 24x7 Water Supply Project in Thane
                Municipal Corporation
              </td>
              <td>The World Bank</td>
            </tr>
            <tr>
              <td>White Paper on Urban Waste Water PPPs</td>
              <td>International Finance Corporation</td>
            </tr>
            <tr>
              <td>Terminal Life assessment of 20 MLD STP</td>
              <td>IVRCL</td>
            </tr>
            <tr>
              <td>
                100 MLD Desalination Plant at Minjur in Chennai for CMWSSB
              </td>
              <td>IVRCL</td>
            </tr>
            <tr>
              <td>
                Feasibility Study for reuse of 550MLD, STP treated water from
                Bengaluru for Peri-Urban Agriculture in Ramanagaram District,
                Karnataka
              </td>
              <td>International Finance Corporation</td>
            </tr>
            <tr>
              <td>
                4 MLD Sea Water Desalination Plant for Sendou TPP 1x125MW
                Senegal
              </td>
              <td>CES, Dakar, Senegal</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export default infra
