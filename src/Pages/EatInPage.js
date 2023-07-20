import React from 'react';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import NavBar from '../Components/NavBar';

let currentDate = new Date();
let currentYear = currentDate.getFullYear()
let currentMonth = ("0" + (currentDate.getMonth()+1)).slice(-2)
let currentDay = ("0" + currentDate.getDate()).slice(-2);

const min = currentYear + "-" + currentMonth + "-" + currentDay;

function EatInPage(){
    const [fullName, setFullName] = useState('');
    const [numberPatrons, setNumberPatrons] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [date, setDate] = useState('');
    const [showError, setShowError] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setFullName("")
        setNumberPatrons("")
        setTimeSlot("");
        setDate("");
        setShowError(false);
    }

    const displayConfirmationModal = (e) => {

        e.preventDefault();
        if (date < min){
            setShowError(true);
        } else {
            // This is where the modal should pop up!
            setShow(true);

        }
    }


    return (
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="eat-in-form-div">
                <form id="reservation-form" onSubmit={displayConfirmationModal}>
                    <h1>TABLE BOOKING</h1>
                    <input type='text' placeholder='Name' id="name-input" required value={fullName} onChange={(event) => setFullName(event.target.value)}></input>
                    <br></br>
                    <label id="num-of-people-label" for="num-of-people">Please enter the number of attendees: </label>
                    <select name="num-of-people" id="num-of-people" required value={numberPatrons} onChange={(event) => setNumberPatrons(event.target.value)}>
                        <option disabled selected value="">---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                    <br></br>
                    <label id ="time-selection-label" for="time-selection">Please enter the time slot you are looking to reserve: </label>
                    <select name="time-selection" id="time-selection" required value={timeSlot} onChange={(event) => setTimeSlot(event.target.value)}>
                        <option disabled selected value="">--</option>
                        <option value="8:30AM">8:30 AM</option>
                        <option value="9:00AM">9:00 AM</option>
                        <option value="9:30AM">9:30 AM</option>
                        <option value="10:00AM">10:00 AM</option>
                        <option value="10:30AM">10:30 AM</option>
                        <option value="11:00AM">11:00 AM</option>
                        <option value="11:30AM">11:30 AM</option>
                        <option value="12:00PM">12:00 PM</option>
                        <option value="12:30PM">12:30 PM</option>
                        <option value="1:00PM">1:00 PM</option>
                        <option value="1:30PM">1:30 PM</option>
                        <option value="2:00PM">2:00 PM</option>
                        <option value="2:30PM">2:30 PM</option>
                        <option value="3:00PM">3:00 PM</option>
                        <option value="3:30PM">3:30 PM</option>
                        <option value="4:00PM">4:00 PM</option>
                        <option value="4:30PM">4:30 PM</option>
                    </select>

                    <label id ="date-input-label" for="date-input">Please enter the date of your reservation: </label>
                    { showError ?
                    <div id="error-div">
                        <p id="error-message">Please input a date that has not yet passed! </p>
                    </div>
                   :
                    null }
                    <input id="date-input" type='date' value={date} onChange={(event) => setDate(event.target.value)}></input>
                    <br></br>

                     <input type='submit'></input>
                </form>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header id="eat-in-modal-header" closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="eat-in-modal-paragraph">
                    Thank you for booking a reservation, you will receive a confirmation email soon!
                </Modal.Body>
            </Modal>
            <Footer></Footer>
        </div>

    )
}

export default EatInPage;