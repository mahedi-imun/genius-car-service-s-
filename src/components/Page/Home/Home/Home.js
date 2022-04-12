import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import Services from '../Services/Services';
import Experts from './Exparts/Exparts';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;