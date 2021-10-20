import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../banner.jpg'
import Brances from '../brances/Brances';
import Campaign from '../campaingn/Campaign';
import Services from '../service/Services';
const Home = () => {
    return (
        <div id="home" className="pt-5 mt-4">
            <Image src={img} className="w-100"></Image>
            <div>
                <Services></Services>
                <Campaign></Campaign>
                <Brances></Brances>
            </div>
        </div>
    );
};

export default Home;