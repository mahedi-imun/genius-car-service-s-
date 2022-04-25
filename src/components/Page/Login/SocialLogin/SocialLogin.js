import React from 'react';
import googleLogo from '../../../../images/social/google-logo.png'
import appleLogo from '../../../../images/social/apple-logo.png'
import facebookLogo from '../../../../images/social/facebook-logo.png'
import auth from '../../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
const SocialLogin = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]=useToken(user)
    let errorElement;
    if(error){
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }
    if(token){
        navigate(from, { replace: true });
    }
    return (
        <>
            <div className='d-flex align-items-center px-2'>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>

            </div>
            <div className='text-center p-2'>
                {errorElement}
                <button
                    onClick={()=>signInWithGoogle()}
                    className='btn btn-light border mb-2 w-100'> <img style={{ width: "50px" }} src={googleLogo} alt="" />    continue with google</button>
                <button className='btn btn-dark mb-2 w-100'>
                    <img style={{ width: "50px" }} src={appleLogo} alt="" />
                    continue with apple</button>
                <button className='btn btn-light border mb-2 w-100'>
                    <img style={{ width: "40px" }} src={facebookLogo} alt="" />
                    continue with facebook</button>
            </div>
        </>
    );
};

export default SocialLogin;