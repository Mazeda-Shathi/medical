import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('Fakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id="services">
            <h1 className="fw-bold text-danger mt-5 container"> Services!!!</h1>
            <div className="">
                <Row xs={1} lg={3}>
                    {
                        service.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div >

        </div>
    )
};

export default Services;