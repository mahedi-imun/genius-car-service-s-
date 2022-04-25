import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Checkout = () => {
    const {serviceId} = useParams()
    const [user] = useAuthState(auth);
    const [service, setService]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    const handlePlaceOrder =(event)=>{
        event.preventDefault();
        const order = {
            service: service.name ,
            serviceId:serviceId,
            email: user.email,
            address:event.target.address.value,
            phone:event.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(res=>{
            console.log(res);
            const {data}=res;
            console.log(data);
            if(data.insertedId){
                toast('successfully order')
                event.target.reset()
            }
            
        })
    }
    return (
        <div className='text-center w-50 mx-auto'>
            <PageTitle title='checkout'></PageTitle>
            <h3>please add your shipping info !!{service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name='name' placeholder='full name' value={user?.displayName} readOnly disabled />
                <br />
                <input  className='w-100 mb-2' type="email" name='email' placeholder='Enter an email' value={user?.email} readOnly disabled />
                <br />
                <input  className='w-100 mb-2' type="text" name='serviceName' value={service.name} readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="number" name='phone' placeholder='number' required />
                <br />
                <input type="submit" value="add " className='w-100 btn btn-primary' />
            </form>
            
        </div>
    );
};

export default Checkout;