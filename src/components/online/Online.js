import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Online = () => {
    return (
        <div className="mt-5 pt-5">
            <h2>Online Booking</h2>
            <Form className="container">
                <Form.Control className="mt-5" type="text" placeholder="Doctor's Name" />
                <Form.Control className="mt-5" type="text" placeholder="Your Name" />
                <Form.Control className="mt-5" type="text" placeholder="Gender" />
                <Form.Control className="mt-5" type="text" placeholder="Age" />
                <Form.Control className="mt-5" type="text" placeholder="Phone Number" />
                <Form.Control className="mt-5" type="email" placeholder="Enter email" />
                <Button className="btn btn-primary mt-3" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Online;