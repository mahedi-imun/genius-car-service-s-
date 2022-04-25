import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate()
    const [checkBox, setCheckBox] = useState(false)
    const [updateProfile, updating,] = useUpdateProfile(auth);
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token]=useToken(user)
    console.log(user);
    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>;

    }
    if(token){
        navigate('/home')
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('successful create account');
        


    }
    return (
        <div className='w-50 mx-auto Regular shadow mt-4'>
            <PageTitle title='Sign up'></PageTitle>
            <h3 className='text-center text-primary'>SignUp</h3>
            <Form onSubmit={handleFormSubmit} className='p-3'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {errorElement}
                    <p className='p-0 m-0'>already have account ? <button onClick={() => navigate('/login')} className='text-primary border-0 btn btn-primary-outline p-0 m-0'>login</button></p>
                </Form.Group>
                <Form.Check
                    onClick={() => setCheckBox(!checkBox)}
                    type="checkbox"
                    label="accept trams and condition"
                    className={checkBox ? 'text-primary' : "text-danger"}
                />

                <Button
                    disabled={!checkBox}
                    className='mt-3 w-50 d-block mx-auto'
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;