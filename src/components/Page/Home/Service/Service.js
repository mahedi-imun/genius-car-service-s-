import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigate = useNavigate()
    const { price, description, img, name ,id} = service;
    const handleServiceDetail = (id)=>{
        navigate(`service/${id}`)

    }
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <CardGroup>
            <Card style={{height:'500px'}}>
                <Card.Img  variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>price: ${price}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 text-center'>
                    <Button  onClick={()=>handleServiceDetail(id)} >book now</Button>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>


    );
};

export default Service;