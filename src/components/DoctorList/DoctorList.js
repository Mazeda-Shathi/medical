import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor';

const DoctorList = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('DoctorData.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div id="doctor">
            <h1 className="fw-bold text-danger m-5 p-5">Doctor List</h1>
            <div className="">
                <Row xs={1} lg={2}>
                    {
                        doctor.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </div >

        </div>
    );
};

export default DoctorList;