import React from "react"
import {Carousel } from 'react-bootstrap';
import Image from "./image"
import {useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
const CarouselComponent = () => {
  const data = useStaticQuery(graphql`
  query {
    slide01: file(relativePath: { eq: "bike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02: file(relativePath: { eq: "market.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide03: file(relativePath: { eq: "scene.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (  
<Carousel interval={2000}>
  <Carousel.Item>
  <Img fluid={data.slide01.childImageSharp.fluid}/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Img fluid={data.slide02.childImageSharp.fluid}/>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Img fluid={data.slide03.childImageSharp.fluid}/>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}



export default CarouselComponent