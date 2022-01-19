import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Card from '../components/Card'
import './Main.css'
import { Row, Col, Container } from 'react-bootstrap';

import Logo1 from '../assets/images/logo1.jfif'
import Logo2 from '../assets/images/logo2.jfif'
import Logo3 from '../assets/images/logo3.jfif'
import Logo4 from '../assets/images/logo4.jfif'

import Flyer1 from '../assets/images/flyer1.jfif'

import Banner1 from '../assets/images/banner1.jfif'
import Banner2 from '../assets/images/banner2.jfif'
import Banner3 from '../assets/images/banner3.jfif'

import Character1 from '../assets/images/cartoon1.jfif'
import Character2 from '../assets/images/cartoon2.jfif'
import Character3 from '../assets/images/cartoon3.jfif'
import Character4 from '../assets/images/cartoon4.jfif'
import Character5 from '../assets/images/cartoon5.jfif'
import Character6 from '../assets/images/cartoon6.jfif'
import Character7 from '../assets/images/cartoon7.jfif'

import Card1 from '../assets/images/card1.jfif'
import Card2 from '../assets/images/card2.jfif'

import Product1 from '../assets/images/product1.jfif'
import Product2 from '../assets/images/product2.jfif'
import Product3 from '../assets/images/product3.jfif'

const MainPage = (props) => {

  const Data = [{
    Logos: [
      {
        name: "Logo 1",
        type: "T-Shirt",
        url: Logo1,
      },
      {
        name: "Logo 2",
        type: "T-Shirt",
        url: Logo2,

      },
      {
        name: "Logo 3",
        type: "Company",
        url: Logo3,

      },
      {
        name: "Logo 4",
        type: "Cartoon",
        url: Logo4,

      },

    ],
    Flyers: [
      {
        name: "Flyer 1",
        type: "Product",
        url: Flyer1,
      },


    ],
    Banner: [
      {
        name: "Banner 1",
        type: "3D",
        url: Banner1,
      },
      {
        name: "Banner 2",
        type: "Vintage",
        url: Banner2,

      },
      {
        name: "Banner 2",
        type: "Vintage",
        url: Banner3,

      },

    ],
    Product: [
      {
        name: "Product 1",
        type: "Oil",
        url: Product1,
      },
      {
        name: "Product 2",
        type: "Cream",
        url: Product2,

      },
      {
        name: "Product 3",
        type: "Mix",
        url: Product3,

      },

    ],
    Card: [
      {
        name: "Card 1",
        type: "ID",
        url: Card1,
      },
      {
        name: "Card 2",
        type: "ID",
        url: Card2,

      },

    ],
    Character: [
      {
        name: "Character 1",
        type: "Corn Man",
        url: Character1,
      },
      {
        name: "Character 2",
        type: "Gentle Monkey",
        url: Character2,

      },
      {
        name: "Character 3",
        type: "Gun Man",
        url: Character3,

      },
      {
        name: "Character 4",
        type: "Gangster",
        url: Character4,

      },
      {
        name: "Character 5",
        type: "Monkey",
        url: Character5,

      },
      {
        name: "Character 6",
        type: "Santa",
        url: Character6,

      },
      {
        name: "Character 7",
        type: "Monkey",
        url: Character7,

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
      <Container>
        <h1 className='header-title-card'>Banners</h1>
        <Row className='justify-content-center'>
          {Data.map((banners, id) => {
            return (
              banners.Banner.map((banner, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={banner.name} type={banner.type} url={banner.url} />
                  </Col>
                )
              })

            )
          })}

        </Row>
      </Container>
      <Container>
        <h1 className='header-title-card'>Characters</h1>
        <Row className='justify-content-center'>
          {Data.map((characters, id) => {
            return (
              characters.Character.map((character, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={character.name} type={character.type} url={character.url} />
                  </Col>
                )
              })

            )
          })}

        </Row>
      </Container>
      <Container>
        <h1 className='header-title-card'>Products</h1>
        <Row className='justify-content-center'>
          {Data.map((products, id) => {
            return (
              products.Product.map((product, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={product.name} type={product.type} url={product.url} />
                  </Col>
                )
              })

            )
          })}

        </Row>
      </Container>
      <Container>
        <h1 className='header-title-card'>Cards</h1>
        <Row className='justify-content-center'>
          {Data.map((cards, id) => {
            return (
              cards.Card.map((card, index) => {
                return (

                  <Col key={index} md={6} xl={4} >
                    <Card name={card.name} type={card.type} url={card.url} />
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