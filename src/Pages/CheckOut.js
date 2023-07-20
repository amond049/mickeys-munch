import React from 'react';
import Footer from '../Components/Footer';
import { Button, Container, OverlayTrigger } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import ItemEntry from '../Components/ItemEntry';
import NavBar from '../Components/NavBar';
import { Modal } from 'react-bootstrap';

function CheckOut(){
    const [review, setReview] = useState('')
    let cart = [];
    let subTotal = 0;
    let feeTotal = 0;
    const DELIVERY_FEE = 5.00;

    const [cardNumber, initCardNumber] = useState('');
    const [cvv, initCVV] = useState('');
    const [exp, initExp] = useState('');

    const [hasSetCardNumber, setCardNumber] = useState(false);
    const [hasSetCVV, setCVV] = useState(false);
    const [hasSetExp, setExp] = useState(false);

    const [showCardNumberError, setCardNumberError] = useState(false);
    const [showCVVError, setCVVError] = useState(false);
    const [showExpError, setExpError] = useState(false);

    const [showModal, setShowModal] = useState(false);

    // Need to load the cart with what is currently in the session storage
    for (let i = 0; i < sessionStorage.length; i++){
        let intermediateString = sessionStorage.getItem(sessionStorage.key(i));
        let title = intermediateString.split(",")[0];
        let price = intermediateString.split(",")[1];
        let priceFloat = parseFloat(price);

        subTotal += priceFloat;
        // We need the title, the price and the quantity
        cart.push([title, price]);
    }

    
    let tax = 0.13 * subTotal;
    feeTotal = subTotal + tax + DELIVERY_FEE;

    const completeCheckout = () => {
        if (hasSetCardNumber && hasSetCVV && hasSetExp) {
            setCardNumberError(false);
            setCVVError(false);
            setExpError(false);
            // May need a confirmation modal here?
            setShowModal(true);
        } else {
            if (hasSetCardNumber === false){
                setCardNumberError(true);
            } else {
                setCardNumberError(false);
            }
            if (hasSetCVV === false){
                setCVVError(true);
            } else {
                setCVVError(false);
            }
            if (hasSetExp === false){
                setExpError(true);
            } else {
                setExpError(false);
            }
        }
    }

    // Will need to add some error handling here!
    const enteredCardNumber = (event) => {
        initCardNumber(event.target.value);
        if (cardNumber.length === 15 || cardNumber.length === 17){
            setCardNumber(true);
        } else {
            setCardNumber(false);
        }
    }

    const enteredCVV = (event) => {
        initCVV(event.target.value);

        if (cvv.length === 2 || cvv.length === 4){
            setCVV(true);
        } else {
            setCVV(false);
        }
    }

    const enteredExpDate = (event) => {
        initExp(event.target.value);

        if (exp.length === 3 || exp.length === 5){
            setExp(true);
        } else {
            setExp(false);
        }
    }

    const tooltip = (
        <Tooltip id="cvv-information">
            <p id="tool-tip-text">CVV is a three digit code that can be found on the back, usually inside or above signature strip</p>
        </Tooltip>
    )

    const reviewConfirmation = (
        <Tooltip>
            <p>Thank you for your review!</p>
        </Tooltip>
    )

    const handleReviewSubmission = (e) => {
        e.preventDefault();
        setReview('');
    }

    const handleClose = () => {
        setShowModal(false);
        cart = [];
        sessionStorage.clear();
        window.location.reload(false);
    }

    return(
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>

            <div id="checkout-page-div">
                <Container>
                    <Row id="order-summary-pricing-info-row">
                        <Col>
                            <Row>
                                <Col>
                                    <div id="card-details">
                                        <h1>Card Details</h1>
                                        <form>
                                            {/* Use the use state to determine if this has been filled out correctly! */}
                                            <label id="credit-card-input-label" for="credit-card-number">Card Number</label>
                                            <br></br>
                                            <input id="credit-card-number" type="number" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" name="credit-card-number" maxLength={16} placeholder='Format: 0123456789012345' onChange={enteredCardNumber}></input>
                                            {showCardNumberError ?
                                                <p id="error-message-card">Please enter a valid credit card number!</p>
                                                : null }
                                            <br></br>
                                            <div id="cvv-expiry-date-encompassing">
                                                <div id="cvv-input-div">
                                                    <label for="cvv" id="cvv-input-label">CVV
                                                    <OverlayTrigger placement='top' overlay={tooltip}>
                                                        <p id="cvv-help">i</p>
                                                    </OverlayTrigger>
                                                    </label>
                                                    <br></br>
                                                    <input id="cvv-input" type="number" maxLength={3} name="cvv" placeholder='Format: 000' onChange={enteredCVV}></input>
                                                    { showCVVError ?
                                                    <p id="error-message-card">Please enter a valid CVV with the following format: 000</p> : null}
                                                </div>
                                                <div id="expiry-date-input-div">
                                                    <label id="date-input-label" for="date-input">Expiry Date</label><br></br>
                                                    <input id="expiry-date-input" type="number" placeholder="Format: MMYY" name="date-input" onChange={enteredExpDate}></input>
                                                    {showExpError ? 
                                                    <p id="error-message-card">Please enter a valid expiry date with the following format: MMYY</p> : null}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row id="card-details-row">
                                <Col>
                                    <h5 id="review-header">Like what you saw? Feel free to leave a review with your thoughts! </h5>
                                    <form onSubmit={handleReviewSubmission}>
                                        <textarea id="review-text-area" required value={review} onChange={(event) => {setReview(event.target.value)}}></textarea>
                                        <div id="submit-button-div">
                                            <OverlayTrigger trigger="focus" placement="top" overlay={reviewConfirmation}>
                                                <input id="submit-review-button" type="submit"></input>
                                            </OverlayTrigger>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h1 id="pricing-info-h1">Pricing Info</h1>
                            <div id="pricing-info">
                                <p id="items-label">Items: </p>
                                {cart.map(cartItem =>
                                    <ItemEntry title={cartItem[0]} price={cartItem[1]}></ItemEntry>
                                )}
                                <p id="taxes-label">Taxes + Auxiliary Fees:</p>
                                <ItemEntry title={"HST/GST"} price={tax.toFixed(2)}></ItemEntry>
                                <ItemEntry title={"Delivery Fee"} price={DELIVERY_FEE.toFixed(2)}></ItemEntry>
                                <p id="total-price-text">Total: ${feeTotal.toFixed(2)}</p>
                                <div id="checkout-button-div">
                                    <Button onClick={completeCheckout} id="checkout-button">Checkout</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header id="host-occasion-modal-header" closeButton>
                    <Modal.Title>Thank You for Purchasing!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="host-occasion-modal-paragraph">
                   Thank you for ordering take out from Mickey's Munch! We will begin working on your order shortly and have it in your hands in no time!
                </Modal.Body>
            </Modal>
            <Footer></Footer>
        </div>
    )
}

export default CheckOut;