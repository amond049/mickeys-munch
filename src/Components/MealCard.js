import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

function MealCard({title, image, rating, price, description, isVisible=true}){

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const addToCart = (event, title, price) => {

        let item = [title, price];
        sessionStorage.setItem(title, item);
    }

    const addToCartConfirmation = (
        <Tooltip>
            <p>Added to cart!</p>
        </Tooltip>
    )

    return (
        <div>
            {isVisible ?
            <div>
                    <Card>
                        <div id="card-image-div">
                            <Card.Img variant='top' src={image}/>
                        </div>
                        <Card.Body>
                            <Card.Title id="title-text">{title}</Card.Title>
                            <Card.Text id="rating-text">{rating} of people liked this dish</Card.Text>
                            <Card.Text id="price-text">${price.toFixed(2)}</Card.Text>
                            <div id="card-button-div">
                                <div id="learn-more-button-div">
                                    <Button id="learn-more-button" onClick={handleShow}>Learn More</Button>
                                </div>
                                <div id="add-to-cart-button-div">
                                    <OverlayTrigger trigger="focus" placement="top" overlay={addToCartConfirmation}>
                                        <Button id="add-to-cart-button" onClick={(event) => addToCart(event, title, price.toFixed(2))}>Add to Cart</Button>
                                    </OverlayTrigger>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
            </div> :
            null
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header id="takeout-modal-header" closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img id="meal-modal-image" variant='top' src={image}/>
                    <p id="takeout-modal-paragraph">{description}</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MealCard;