import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, id, picture, room, Degree, chamber, phone } = doctor;
    return (
        <div className="doctor">
            <Card className="container p-2">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{Degree}</p>
                        <p>Room: {room}</p>
                        <p>Chamber: {chamber}</p>
                        <p>Phone: {phone}</p>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Doctor;