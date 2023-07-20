import React, {useState} from 'react';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banquet_Image from '../Graphics/banquet_hall.jpg';
import { Modal } from 'react-bootstrap';
import NavBar from '../Components/NavBar';

// May have to use useState to make elements appear as the previous one is filled out
function HostOccasion(){
    const [showPatron, setShowPatron] = useState(false);
    const [showParking, setShowParking] = useState(false);
    const [selectedParkingState, setSelectedParking] = useState(false);
    const [selectedCateringState, setSelectedCatering] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const [clearEvent, setClearEvent] = useState('')
    const [clearNumber, setClearNumber] = useState('')
    const [clearParking, setClearParking] = useState('')
    const [clearCatering, setClearCatering] = useState('')
    const [clearEmail, setClearEmail] = useState('')
    const [clearPhoneNumber, setClearPhoneNumber] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => {

        // Close the modal and set all input fields back to being invisible 
        setShow(false);
        setClearEvent('');
        setClearNumber('');
        setClearParking('');
        setClearCatering('');
        setClearPhoneNumber('');

        setShowPatron(false);
        setShowParking(false);
        setSelectedParking(false);
        setSelectedCatering(false);
        setShowPhoneNumber(false);
        setShowSubmitButton(false);
    }
    
    const showModal = (e) => {
        // Will need to show the confirmation modal here
        e.preventDefault();
        setShow(true);
    }

    const selectedPatrons = (event) => {
        setShowParking(true);
        setClearNumber(event.target.value);
    }

    const selectedDropdown = (event) => {
        setShowPatron(true);
        setClearEvent(event.target.value);
    }

    const selectedParking = (event) => {
        setSelectedParking(true);
    }

    const selectedCatering = (event) => {
        setSelectedCatering(true);
    }

    const inputEmail = (event) => {
        setShowPhoneNumber(true);
        setClearEmail(event.target.value);
    }

    const inputPhoneNumber = (event) => {
        setShowSubmitButton(true);
        setClearPhoneNumber(event.target.value);
    }


    // Could use form switch element to make the toggle switch!
    return(
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
           <Container id="host-an-occasion-container">
            <Row>
                <Col xs={4} id="host-occasion-image">
                    <img src={Banquet_Image}></img>
                </Col>
                <Col xs={8} id="host-occasion-form">
                    <p id="caption">Please enter the following information as they pop up to complete your application: </p>
                    <form onSubmit={showModal}>
                        <select onChange={selectedDropdown} id="event-type-input" value={clearEvent}>
                            <option value="" selected disabled>Event Type:</option>
                            <option value="JubileeCelebration">Jubilee Celebration</option>
                            <option value="BirthdayParty">Birthday Party</option>
                            <option value="GenderReveal">Gender Reveal</option>
                            <option value="Graduation">Graduation Party</option>
                            <option value="Wedding">Wedding Reception</option>
                            <option value="CorporateParty">Corporate Event</option>
                            <option value="FamilyReunion">Family Reunion</option>
                        </select>
                        <br></br>
                        {showPatron ?
                        <div>
                        <div id="label-div"><label id="number-of-attendees-label">Number of Attendees:</label></div>
                        <div id="patronGroupButton" onChange={selectedPatrons} value={clearNumber}>
                            
                            <input type='radio' name='patronGroup' value='100' id='100'/><label for="100" id="patron">&lt;100</label>
                            <input type='radio' name='patronGroup' value='200' id='200'/><label for="200" id="patron">100 - 200</label>
                            <input type='radio' name='patronGroup' value='300' id='300'/><label for="300" id="patron">200 - 500</label>
                            <input type='radio' name='patronGroup' value='400' id='400'/><label for="400" id="patron">500+</label>
                        </div>
                        </div> : null}

                        {showParking ?
                        <div id="enclosing-parking-div">
                            <div id="parking-div" onChange={selectedParking} value={clearParking}>
                                <label id="parking-div-label">Parking Required: </label>
                                <input type="radio" name="parkingGroup" value="yes" /><label id="yes-button-parking-label">Yes</label>
                                <input type="radio" name="parkingGroup" value="no" /><label id="no-button-parking-label">No</label>
                            </div>
                            <br></br>
                        </div> : null }

                        {selectedParkingState ?
                        <div id="enclosing-catering-div">
                        <div id="catering-div" onChange={selectedCatering}>
                                <label id="catering-div-label">Catering Required: </label>
                                <input type="radio" name="cateringGroup" value="yes" /><label id="yes-button-catering-label">Yes</label>
                                <input type="radio" id="no-button-catering" name="cateringGroup" value="no" /><label id="no-button-catering-label">No</label>
                            </div>
                            <br></br>
                        </div> : null }

                        { selectedParkingState && selectedCateringState ?
                        <div id="email-address-div" onChange={inputEmail} value={clearEmail}>
                            <label id="email-address-label" for='email-address-input'>Email address of organizer: </label><br></br>
                            <input id="email-address-input" type='email' name='email-address-input' required placeholder="Format: someone@email.com"/>
                        </div>
                        : null }

                        <br></br>

                        {/*Maybe add some input validation here */}
                        {showPhoneNumber ?
                        <div id="phone-number-div" onChange={inputPhoneNumber}>
                            <label id="phone-number-label" for='phone-number-input'>Phone number of organizer: </label><br></br>
                            <input id="phone-number-input"placeholder='Format: 123-123-1234' type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='phone-number-input' required value={clearPhoneNumber}/>
                        </div> : null}
                        <br></br>
                        { showSubmitButton ?
                        <div id="submit-button-occasion">
                            <input id="submit-occasion-request" type="submit" value="Submit Request"/>
                        </div> : null}
                    </form>
                </Col>
            </Row>
           </Container>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header id="host-occasion-modal-header" closeButton>
                    <Modal.Title>Thank You for Booking!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="host-occasion-modal-paragraph">
                    Thank you for putting in a request for booking the restaurant. We will get back in touch with you shortly with the next steps! 
                </Modal.Body>
           </Modal>
           <Footer></Footer>
        </div>

    )
}

export default HostOccasion;