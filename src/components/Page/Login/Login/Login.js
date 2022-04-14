import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [sendPasswordResetEmail,] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    let errorElement;
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>;

    }
    const handleFromSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)


    }
    const handleForgotPass = async (e) => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }else{
            toast('please give your email address')
        }
    }
    return (
        <div className=' w-50 rounded mx-auto Regular shadow mt-4'>
            <h3 className='text-center text-primary'>login</h3>
            <Form onSubmit={handleFromSubmit} className=' p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                {errorElement}
                <p className='p-0'>new to genius car ? <Link to='/signup' >Create account</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <button onClick={(e) => handleForgotPass(e)} className='btn btn-link'>forgot password ?</button>
            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;