import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const handleDelete = (id)=>{
        const proceed = window.confirm('are you sure delete?') 
        if(proceed){
            const url = `http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE'
              
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
                    <button onClick={()=>handleDelete(service._id)} className='btn border ms-2'>delete</button>
                    </h6>
                </div>)
            }
        </div>
    );
};

export default ManageService;