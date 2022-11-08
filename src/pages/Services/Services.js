import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const data=useLoaderData()
    console.log(data.name)
    return (
        <div>
            
        </div>
    );
};

export default Services;