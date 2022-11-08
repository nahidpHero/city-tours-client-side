import React from 'react';
import Banner from './Banner/CarsorCard';
import Employee from './Employee/Employee';
import Products from './products/Products';
import Section from './Section/Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Section></Section>
            <Employee></Employee>
        </div>
    );
};

export default Home;