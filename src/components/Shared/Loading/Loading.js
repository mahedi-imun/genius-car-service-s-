import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex align-items-center w-100 h-100 justify-content-center'>
            <Spinner className='text-center' animation="border" />
        </div>
    );
};

export default Loading;