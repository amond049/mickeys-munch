import React from 'react';
import Card from 'react-bootstrap/Card';

function ReviewCards({image, name, content}){
    return (
        <Card id="reviewer-card" style={{ width: '18rem', border: '1px solid #941B0C'}}>
        <Card.Img id = "card-image" variant="top" src={image} />
        <Card.Body>
            <Card.Title id="reviewer-name">{name}</Card.Title>
            <Card.Text id="reviewer-thoughts">
            {content}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default ReviewCards;