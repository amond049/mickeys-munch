import React from 'react';
import Footer from '../Components/Footer';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import NavBar from '../Components/NavBar';

function WorkWithUs(){
    const [show, setShow] = useState(false);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [resume, setResume] = useState('')
    const [coverLetter, setCoverLetter] = useState('')
    const [interview, setInterview] = useState('')
    
    const handleClose = () => {
        // Hide modal and clear inputs 
        setShow(false);
        setFullName('');
        setPhoneNumber('');
        setEmailAddress('');
        setResume('');
        setCoverLetter('');
        setInterview('');
    }
    const showConfirmationModal = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return(
    <div>
        <NavBar></NavBar>
        <br></br>
        <br></br>
        <br></br>
        <div id="application-form">
            <br></br>
            <br></br>
            <h1 id="application-form-header">Join our team!</h1>
            <p id="application-form-paragraph">All we need from you is some basic personal information and if we need someone and you meet all of the qualities we are looking for, we will get in touch!</p>
                <form onSubmit={showConfirmationModal} id="submit-application-form">
                    {/* Might have to use containers here to make the inputs side by side */}
                    <div id="name-number-input-div">
                        <div id="work-with-us-full-name-input">
                            <label id="wwu-full-name-input-label" for="full-name">Full Name: </label><br></br>
                            <input id="wwu-full-name-input" type="text" required value={fullName} onChange={(event) => {setFullName(event.target.value)}}></input>
                        </div>
                        <div id="work-with-us-phone-number-input">
                            <label id="wwu-phone-number-input-label" for="phone-number">Phone Number: </label><br></br>
                            <input id="wwu-phone-number-input" required type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='phone-number' placeholder='123-123-1234' value={phoneNumber} onChange={(event) => {setPhoneNumber(event.target.value)}}/>
                        </div>
                    <br></br>
                    </div>
                    <div id="wwu-encompassing-div">
                        <div id="wwu-email-input-div">
                            <label id="wwu-email-input-label" for="email">Email Address: </label><br></br>
                            <input id="wwu-email-input" type='email' required name="email" placeholder='someone@email.com' value={emailAddress} onChange={(event) => {setEmailAddress(event.target.value)}}></input>
                        </div>
                    </div>
                    <br></br>
                    <div id="wwu-resume-encompassing">
                        <div id="wwu-resume-input">
                            <label for="resume-file">Resume: </label>
                            <br></br>
                            <input required type="file" name="resume-file" value={resume} onChange={(event) => {setResume(event.target.value)}}></input>
                        </div>
                    </div>
                    <br></br>
                    <div id="wwu-cv-encompassing">
                        <div id="wwu-cv-input">
                            <label for="resume-file">Cover Letter: </label>
                            <br></br>
                            <input type="file" name="cv-file" value={coverLetter} onChange={(event) => {setCoverLetter(event.target.value)}}></input>
                        </div>
                    </div>
                    <br></br>
                    <div id="wwu-interview-encompassing">
                        <div id="wwu-interview-input">
                            <label for="interview-preference">Interview Preference: </label>
                            <br></br>
                            <select id="preference-dropdown" name="interview-preference" required value={interview} onChange={(event) => {setInterview(event.target.value)}}>
                                <option selected disabled value="">---</option>
                                <option value="on-site">On-site</option>
                                <option value="virtual">Virtual</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div id="submit-wwu-div">
                    <input id="submit-button-wwu" type="submit"></input>
                    </div>
                </form>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header id="work-with-us-modal-header" closeButton>Thank You for your Application!</Modal.Header>
            <Modal.Body id="work-with-us-modal-paragraph">
                Thank you for applying, we will get in touch with you as soon as possible should we need some extra helping hands! 
            </Modal.Body>
        </Modal>
        <Footer></Footer>
    </div>
    )
}

export default WorkWithUs;