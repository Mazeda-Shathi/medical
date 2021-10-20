import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const [service, setService] = useState([]);
    const { details } = useParams();
    useEffect(() => {
        fetch('/Fakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const data = service?.find(item => details === (item._id))


    console.log(data)

    return (
        <div className="mt-5 pt-5">
            {data &&
                <Card className="container p-2 m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.picture} classname="W-75 h-75" />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Title>Avialable Seat:{data.seat}</Card.Title>
                        <Card.Title>Fee:{data.fee}</Card.Title>
                        <Card.Text>
                            {data.about}
                        </Card.Text>
                    </Card.Body>
                </Card>}
        </div>
    );
};

export default Details;