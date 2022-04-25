import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return (
            <div>
                <h5>your email is not verified </h5>
                <h6>please verify your email </h6>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                 send again  Verify email
                </button>
            </div>
        )
    }
    return children
};

export default RequireAuth;