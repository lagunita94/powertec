import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import style from "./gallery.module.css"
import Figure from "react-bootstrap/Figure"
import { photos } from "../components/companyGallery"
const gallery = () => {
  const width = 400;
  return (
    <Layout>
      <Container fluid>
        <Jumbotron as="div" className={style.container}>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "5px",
              padding: "0 10px",
              borderBottom: "2px solid #ff5f13",
            }}
          >
            <h1>Gallery</h1>
          </div>
        </Jumbotron>
        {photos.map((album, index) => (
          <Accordion key={index} style={{marginBottom: '10px'}}>
            <Card key={index + 1}>
              <Accordion.Toggle as={Card.Header} eventKey={`${index}`} key={index + 2}>
                {album.album}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${index}`} key={index + 3}>
                <Card.Body key={index + 4}>
                  {album.urls.map((url,i) => (
                    <Figure style={{padding:'0 10px'}} key={i}>
                      <Figure.Image
                        width={width}
                        height={180}
                        alt="171x180"
                        src={require(`../images/${album.album}/${url}`)}
                        key={i+1}
                      />
                    </Figure>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </Container>
    </Layout>
  )
}

export default gallery
