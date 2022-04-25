import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [service, setService]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='text-center'>
            <PageTitle title='details'></PageTitle>
            <h3>this is your booked service :{service.name}</h3>
            <Link to={`/checkout/${serviceId}`}>
            <button className='btn btn-primary'>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;