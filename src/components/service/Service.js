import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, picture, about } = service;
    return (
        <div>

            <Card className="container p-2">
                <Card.Img variant="top" src={picture} classname="W-75 h-75" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Link to={`/service/${_id}`}>
                        <Button variant="primary" className="btn btn-info">Details</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;

