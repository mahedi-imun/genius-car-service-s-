import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://obscure-hollows-03844.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id='services' className='services mt-5'>
            <h2 className='text-center mb-5 text-primary'>Our Services</h2>
            <div className='container'>
                <div className="row g-5">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;