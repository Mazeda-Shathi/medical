import React from 'react';
import img from "../campaign.jpg";
import img2 from "../campaign2.jpg";
import './Campaign.css'

const Campaign = () => {
    return (
        <div className="container mt-2 pt-5" id="campaign">
            <h2 className="text-danger">Blood Donation Campaign</h2>
            <div className="campaign d-flex">
                <img src={img}></img>
                <img src={img2}></img>
            </div>


        </div>
    );
};

export default Campaign;