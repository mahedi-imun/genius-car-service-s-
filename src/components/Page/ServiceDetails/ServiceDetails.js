import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h3>this is service details page {serviceId}</h3>
        </div>
    );
};

export default ServiceDetails;