import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
    return (
        <div className='col-12 col-md-4 d-flex justify-content-center text-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={expert.img} />
                <Card.Body>
                    <Card.Title>{expert.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text >
                    <Button variant="primary">see more</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Expert;