import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if(user){
        navigate(from, { replace: true });
    }

    const handleFromSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)


    }
    return (
        <div className=' w-50 rounded mx-auto Regular shadow mt-4'>
            <h3 className='text-center text-primary'>login</h3>
            <Form onSubmit={handleFromSubmit} className=' p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='p-0'>new to genius car ? <Link to='/signup' >Create account</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;