import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook_icon from '../Graphics/facebook_icon.png';
import instagram_icon from '../Graphics/instagram_icon.png';
import twitter_icon from '../Graphics/twitter_icon.png';
import youtube_icon from '../Graphics/youtube_icon.png';
import google_maps_image from '../Graphics/google_maps_image.PNG';

function Footer() {
    return (
        <Container fluid id='footer'>
            <Row>
                <Col xs={4} id="location-info">
                    <p id="location-info-header">You can find us at: </p>
                    <p id="location-info">3275 McCarthy Road</p>
                    <p id="location-info">Ottawa, ON</p>
                    <p id="location-info">K1V 0X5</p>
                    <p id="location-info">(613) 465-2390</p>
                </Col>
                <Col xs={4} id="social-media-contact">
                    <Row>
                        <Col xs={2}>
                            <img id="social-media-icon-first" src={facebook_icon}></img>
                        </Col>
                        <Col xs={10}>
                            <p id="social-media-handle-first">@mickeysmunch</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <img id="social-media-icon" src={instagram_icon}></img>
                        </Col>
                        <Col xs={10}>
                            <p id="social-media-handle">@mickeysmunch</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <img id="social-media-icon" src={twitter_icon}></img>
                        </Col>
                        <Col xs={10}>
                            <p id="social-media-handle">@mickeysmunch</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <img id="social-media-icon" src={youtube_icon}></img>
                        </Col>
                        <Col xs={10}>
                            <p id="social-media-handle">@mickeysmunch</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} id="location-screen-capture">
                    <img id="google-maps-embed" src={google_maps_image}></img>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;