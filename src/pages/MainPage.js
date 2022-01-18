import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Card from '../components/Card'
import './Main.css'
import { Row, Col, Container } from 'react-bootstrap';

const MainPage = (props) => {

  const Data = [{
    Logos: [
      {
        name: "Logo 1",
        type: "3D",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      },
      {
        name: "Logo 2",
        type: "Vintage",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      },
      {
        name: "Logo 3",
        type: "Mascot",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      },
      {
        name: "Logo 4",
        type: "3D",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      },
      {
        name: "Logo 5",
        type: "Vintage",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      },
      {
        name: "Logo 6",
        type: "Mascot",
        url: 'https://previews.123rf.com/images/cienpies/cienpies1811/cienpies181100219/112128832-merry-christmas-and-happy-new-year-folk-art-greeting-card-bird-illustration-scandinavian-vintage-sty.jpg',
      }
    ],
    Flyers: [
      {
        name: "Flyer 1",
        type: "3D",
        url: 'https://www.fivesquid.com/pics/t2/1623479623-173634-1-1.jpg',
      },
      {
        name: "Flyer 2",
        type: "Vintage",
        url: 'https://www.fivesquid.com/pics/t2/1623479623-173634-1-1.jpg',

      },
      {
        name: "Flyer 3",
        type: "Mascot",
        url: 'https://www.fivesquid.com/pics/t2/1623479623-173634-1-1.jpg',

      },
      {
        name: "Flyer 4",
        type: "3D",
        url: 'https://www.fivesquid.com/pics/t2/1623479623-173634-1-1.jpg',
      },
      {
        name: "Flyer 5",
        type: "Vintage",
        url: 'https://graphicsfamily.com/wp-content/uploads/2020/07/Dark-Corporate-Flyer-Template-scaled.jpg',

      },
      {
        name: "Flyer 6",
        type: "Mascot",
        url: 'https://www.fivesquid.com/pics/t2/1623479623-173634-1-1.jpg',

      },

    ],
  }]


  return (
    <div>
      <Header />
      <Profile />
      <Container id="my-work">
        <h1 className='header-title-card'>Logos</h1>
        <Row className='justify-content-center'>
          {Data.map((logos, id) => {
            return (
              logos.Logos.map((logo, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={logo.name} type={logo.type} url={logo.url} />
                  </Col>
                )
              })

            )
          })}

        </Row>
      </Container>
      <Container>
        <h1 className='header-title-card'>Flyers</h1>
        <Row className='justify-content-center'>
          {Data.map((flyers, id) => {
            return (
              flyers.Flyers.map((flyer, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={flyer.name} type={flyer.type} url={flyer.url} />
                  </Col>
                )
              })

            )
          })}

        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MainPage;