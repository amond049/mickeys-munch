import React from "react";
import Footer from '../Components/Footer';
import { Accordion } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import FAQ_bn from './FAQ-bn';

function FAQ(){
    return(
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <header>
                <h1 id="faq-header">FAQ</h1>
            </header>
            <section id="faq-section">
            <p id="change-language">Switch the language to: <a href="/FAQ/bn">Bengali</a></p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header alttext={"FAQ question"} id="faq-question">Do you take reservations?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        Yes! Mickey's Munch allows potential patrons to book a specific table at the restaurant or even book the entire venue for special events. You can book a specific table <a href="/reservations">here</a> or book the venue <a href="/hostoccasion">here</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Are you open on holidays?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        Yes, we remain open on every single holiday, feel free to enjoy your holiday by visiting Mickey's Munch!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Do you have vegetarian, vegan, gluten free options?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        Yes, you can browse our menu in the <a href="/takeout">takeouts</a> page where you can filter through the various dietary restrictions we accomodate for
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">I see gluten free options on your menu but do you prepare them in separate containers? Do you have a separate gluten free fryer?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        All meals that have some dietary restriction are prepared completely separately from the meals that do not have any dietary restrictions to ensure that all needs are met. We are certified by The Kashruth Council of Canada (COR) for our kosher dishes and are Zabiha certified for our halal dishes!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Do you have a kids menu?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        We unfortunately do not have a kids menu but South Asian cuisine can be easily enjoyed by individuals of all ages so feel free to bring the whole family down!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">I just got take out from here and there’s a mistake in my order. Can you fix it?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        We are sorry to hear that there has been a mistake with your order, feel free to call the restaurant at (613) 465-2390 to address your concern and we will send you a replacement order free of charge!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">How late are you open today? How early do you open tomorrow?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        We open every day at 8:30 AM on the dot and are open until 10:00 PM 7 days a week, even on holidays!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Are you handicap accessible? To wheelchairs too?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        We have ramps at every entrance and wheelchair accessible booths in our restaurant and should more accomodations be made you can call in advance and we shall try our best to ensure all of your needs are met
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Is there parking nearby?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        We do have parking in front of our restaurant, but there is a limited number of spots so it's first come first serve. There is a city parking lot a 2 minute walk away from the restaurant that charges $2.00/hour for parking.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header alttext={"FAQ question"} id="faq-question">Can you accommodate groups of ____ (15, 20, 30 people)? Do you have a private room? Will you stay open a bit later for a large group?</Accordion.Header>
                        <Accordion.Body alttext={"FAQ answer"} id="faq-answer">
                        Of course we can accomodate large groups, you can find more booking information in our <a href="/hostoccasion">host an occasion</a> page where you can book the entire restaurant as a venue. As for if we can stay open a bit later, that is not a problem as long as that is communicated to us well in advance. Hope we are your first choice when it comes to booking events!
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default FAQ;