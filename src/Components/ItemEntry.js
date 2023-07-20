import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ItemEntry({title, price}){
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={8}>
                        <p id="checkout-page-entry-title">{title}</p>
                    </Col>
                    <Col xs={4}>
                        <p id="checkout-page-entry-price">${price}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemEntry;