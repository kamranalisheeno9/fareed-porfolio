import React, { Profiler } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ProfilePic from '../assets/images/profile2.jpg'
import './Profile.css'
const Profile=(props)=> {
    return (
        <Container>
            <Row className='profile-container' id="home">
                <Col xs={11} sm={12} lg={6}>
                <div className='wrapper'>
                    <div className='static-content'>
                    I'm 
                    </div>
                    <ul className='dynamic-content'>
                        <li><span>Fareed </span></li>
                        <li><span>Ahmed</span></li>
                        <li style={{color:"#6E788F"}}><span>A Graphics</span></li>
                        <li style={{color:"#6E788F"}}><span>Designer</span></li>
                        <li style={{color:"#FAA55A"}}><span>& Video</span></li>
                        <li style={{color:"#FAA55A"}}><span>Editor</span></li>
                    </ul>
                </div>
                    <div className='more-details'> I Will Design Professional Logos, Flyers , Brouchers , Business Card , Video Editing , Visual Efects , VFX And Many More...    </div>
                </Col>
                <Col style={{textAlign:"center"}} xs={12} sm={8} lg={5}>
                    <img className='profile-pic' src={ProfilePic} alt='' />
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;