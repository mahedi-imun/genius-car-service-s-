import React from 'react';
import { useForm } from 'react-hook-form';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        const url = `https://obscure-hollows-03844.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' type='text' {...register('name', { required: true })} placeholder='service name' />
                <input className='mb-2' type='number' {...register('price', { required: true })} placeholder='price' />
                <textarea className='mb-2' type='text' placeholder='descriptions' {...register('description', { required: true })} />
                <input className='mb-2' {...register('img')} placeholder='img url' />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default AddService;