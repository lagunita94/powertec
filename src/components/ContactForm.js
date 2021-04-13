import React, { useState } from "react"
import "./form.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import InputGroup from 'react-bootstrap/InputGroup'
const ContactForm = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    console.log(event)
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div>
      <Card style={{ width: "100%", boxShadow: "4px 5px 5px #3abcff" }}>
        <Card.Header
          as="h5"
          style={{ backgroundColor: "#2d3573", color: "white" }}
        >
          Tell us your queries
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label as="h5">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label as="h5">Email address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicDesignation">
              <Form.Label as="h5">Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Designation"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid destination.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label as="h5">City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label as="h5">Describe</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContactForm
