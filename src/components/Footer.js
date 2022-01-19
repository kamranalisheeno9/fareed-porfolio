import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineMobile,AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si';
import './Footer.css'
const Footer = (props) => {
    return (
        <Container id="contact">
            <h1 className='header-title-card contact-text'>Contact</h1>
            <Container>
                <div className='contact-container'>
                    <Row className='justify-content-around contact-row'>
                        <Col md={5}>
                            <h3 className='contact-header'>Contact</h3>
                            <ul className='contact-ul'>
                                <li><span><AiOutlineMobile /></span>+92 331 2604127</li>
                                <li><span><AiOutlineMobile /></span>+92 308 2093588</li>
                            </ul>
                        </Col>
                        <Col md={5}>
                            <h3 className='contact-header'>Fiverr </h3>
                            <a className='fiverr-link' target="_blank" href="https://www.fiverr.com/fareed472" >   <span className='fiverr-icon'><SiFiverr /></span> Fareed472</a>
                        </Col>
                    </Row>
                    <Container>
                        <h3 className='contact-header social-links '>Social Links</h3>
                        <ul className='social-links-ul'>
                            <li><a href='https://www.facebook.com/fareed.bhurgri.3' target="_blank">
                                <AiFillFacebook /></a></li>
                            {/* <li><a href='' target="_blank"><AiFillLinkedin /></a></li> */}
                            {/* <li><a href='' target="_blank"><AiFillTwitterSquare /></a></li> */}
                            <li><a href='mailto:ahmedfareednindo@gmail.com' target="_blank"><AiFillGoogleCircle /></a></li>
                            <li><a href='https://www.instagram.com/bhurgrifareed/' target="_blank"><AiFillInstagram /></a></li>
                        </ul>
                    </Container>
                </div>
            </Container>
        </Container>
    );
}

export default Footer;