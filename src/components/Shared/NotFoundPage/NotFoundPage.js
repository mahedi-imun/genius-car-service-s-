import React from 'react';
import img from '../../../images/error-404-animacion-CSS.webp'
const NotFoundPage = () => {
    return (
        <div className='text-center '>
            <h3 className='mt-2 text-danger'> Page not found !😔 😔 😔 </h3>
            <img className='rounded-3 img-fluid' src={img} alt="" />
            
        </div>
    );
};

export default NotFoundPage;