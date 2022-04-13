import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div className='text-center'>
            <h3>this is service details page {serviceId}</h3>
            <Link to='/checkout'>
            <button className='btn btn-primary'>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;