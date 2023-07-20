import React from 'react';
import Footer from '../Components/Footer';
import ReviewCards from '../Components/ReviewCards';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Gordon_Ramsay_Image from '../Graphics/gordon_ramsay.jpg';
import Bangladesh_Image from '../Graphics/bangladesh.jpg';
import Kumail_Nanjiani_Image from '../Graphics/kumail_nanjiani.jpg';
import Anonymous from '../Graphics/anonymous.jpg';
import NavBar from '../Components/NavBar';


function HomePage (){
    return (
        <div>
          <NavBar></NavBar>
          <br></br>
          <br></br>
          <div id="welcome-background">
            <div id="welcome-message-div">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>Welcome to</p>
              <h1 id="welcome-banner">Mickey's Munch!</h1>
            </div>
          </div>
          {/* Maybe have a div for who we are? */}
          <div id="who-we-are">
            <Container fluid>
              <Row>
                <Col xs={6}>
                  <h1>From humble beginnings...</h1>
                  <p>Mickey's Munch came into fruition as a passion project. Having recently immigrated to Canada from Bangladesh, the founders missed a taste of home and figured others in the same situation felt the exact same way. Instead of sulking, they decided to bring a bit of Bangladesh and South-east Asian cuisine to Canada to apppease not only themselves, but everyone else in the same position. And did it appease, having been in the business since 2003 with resounding success, Mickey's Munch has become a household name in today's day and age.</p>
                </Col>
                <Col xs={6} id="who-we-are-image">
                  <img src={Bangladesh_Image}></img>
                </Col>
              </Row>
            </Container>
          </div>
          <h1 id="review-segway-header">Won't take it from us?</h1>
          <p id="review-segway-paragraph">Read about what other people have said about their visits to Mickey's Munch</p>
          <div id="testimonials">
            <Container id="roomfac">
              <Row>
                <Col xs={4}>
                  <ReviewCards image={Gordon_Ramsay_Image} name={"Gordon Ramsay"} content={"\"I needed only one visit to Mickey's Munch to be able to tell what they are doing for the art of Indian cuisine is truly special. Highly recommend this place to anyone looking to try some top quality Indian food! I'll definitely be returning in the future and am looking forward to it\""}></ReviewCards>
                </Col>
                <Col xs={4}>
                  <ReviewCards image={Kumail_Nanjiani_Image} name={"Kumail Nanjiani"} content={"\"As someone who is from Pakistan, it is great to see that a hint of the food that I grew up on is present somewhere other than the source. I remember being skeptical because a lot of restaurants will be \"just the right thing\" but Mickey's Munch definitely lives up to the statement, highly recommend!\""}></ReviewCards>
                </Col>
                <Col xs={4}>
                  <ReviewCards image={Anonymous} name={"Anonymous Citizen"} content={"\"I remember craving some Indian food one evening and decided to give this place a shot, and it was one of the greatest decisions of my life. I don't think I've ever experienced flavours like this before and I'm constantly finding myself ordering takeout from Mickey's Munch. It is the best Indian spot in Ottawa!\""}></ReviewCards>
                </Col>
              </Row>
            </Container>
            <h1 id="incentive-header">So what are you waiting for?</h1>
            <p id="incentive-paragraph">We'd love to serve you today!</p>
            <br></br>
            <br></br>
          </div>
          <Footer></Footer>
        </div>
    )
}

export default HomePage;