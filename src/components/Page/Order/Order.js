import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Order = () => {
    const navigate = useNavigate()
    const [order, setOrder] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getOrder = async () => {
            const url = `http://localhost:5000/order?email=${user?.email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrder(data)
            }
            catch(error){
                if(error.response.status === 403 ||error.response.status ===401 ){
                    signOut(auth)
                    navigate('/login')

                }
                

            }
        }
        getOrder()

    }, [user])




    return (
        <div>
            all your order {order.length}

        </div>
    );
};

export default Order;