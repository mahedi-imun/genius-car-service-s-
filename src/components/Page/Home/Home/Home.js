import React from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import HeroArea from '../HeroArea/HeroArea';
import Services from '../Services/Services';
import Experts from './Exparts/Exparts';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <HeroArea></HeroArea>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;