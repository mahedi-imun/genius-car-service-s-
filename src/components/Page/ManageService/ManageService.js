import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://obscure-hollows-03844.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure delete?')
        if (proceed) {
            const url = `https://obscure-hollows-03844.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => console.log(data))

        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h4>manage all services{services.length}

            </h4>
            {
                services.map(service => <div key={service._id}

                >
                    <h6>{service.name}
                        <button onClick={() => handleDelete(service._id)} className='btn border ms-2'>delete</button>
                    </h6>
                </div>)
            }
        </div>
    );
};

export default ManageService;