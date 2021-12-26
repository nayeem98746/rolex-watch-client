import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, price, description, img}= service

    return (
        <div>
            <Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Name:{name}</Card.Title>
    <Card.Text>
      description:{description}
    </Card.Text>
    <Card.Title>price:{price}$</Card.Title>
    <Link as={Link} to="/purchase" ><Button variant="warning">Purchase  </Button></Link>
    
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;