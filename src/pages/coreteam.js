import React from "react"
import Layout from "../components/layout"
import coreTeamStyles from "../pages/coreteam.module.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import logo from "../images/Srikumar.jpg"
import Card from "react-bootstrap/Card"
import { members } from "../components/memberData"
import CardDeck from "react-bootstrap/CardDeck"

const CoreTeam = () => {
  return (
    <Layout>
      <Jumbotron as="div" className={coreTeamStyles.container}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "5px",
            padding: "0 10px",
            borderBottom: "2px solid #ff5f13",
          }}
        >
          <h1>CORE TEAM</h1>
        </div>
      </Jumbotron>
      <Container fluid>
        <div className={coreTeamStyles.board}>
          <h1 className={coreTeamStyles.back_text}>Directors</h1>
          <h1>Board of Directors</h1>
        </div>
        <CardDeck>
          {members[0].value.map((team, idx) => (
            <Card key={idx}>
              <Card.Img variant="top" src={team.url} style={{height:"309px"}}/>
              <Card.Body>
                <Card.Title>{team.NameoftheEmployee}</Card.Title>
                <Card.Subtitle>{team.Designation}</Card.Subtitle>
                <Card.Text>{team.bio}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <div className={coreTeamStyles.board}>
          <h1 className={coreTeamStyles.back_text}>Members</h1>
          <h1>Team Members</h1>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
          {members[1].value.map((team, idx) => (
            <Card key={idx} style={{ width: "18rem" }} className="mb-2">
              <Card.Img variant="top" src={team.url} style={{height:"309px"}}/>
              <Card.Body>
                <Card.Title>{team.NameoftheEmployee}</Card.Title>
                <Card.Title>{team.Designation}</Card.Title>
                <Card.Text className="mb-2">
                  {team.Qualification ? team.Qualification : ""}
                </Card.Text>
                <Card.Text className="mb-2">{team.AreaofExpertise}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default CoreTeam
