import React from "react";
import { Form } from "react-bootstrap";

function Contact() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="John Smith" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="company" placeholder="XYZ Organization" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reason for Outreach</Form.Label>
                <Form.Control as="select">
                    <option>Employment Opportunity</option>
                    <option>Free Agency Work</option>
                    <option>Misc.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Anything else?</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
    );
}

export default Contact;
