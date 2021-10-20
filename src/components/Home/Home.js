import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../banner.jpg'
import Services from '../service/Services';
const Home = () => {
    return (
        <div id="home">
            <Image src={img} className="w-100 pt-3"></Image>
            <div id="#service">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;