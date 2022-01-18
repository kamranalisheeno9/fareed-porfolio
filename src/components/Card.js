import React from 'react';
import { Container } from 'react-bootstrap';
import './Card.css'
const Card = (props) => {




    return (
        <Container>

            <div>
                <div className='card'>

                    <div className='img-box'>
                        <img src={props.url} alt={props.name} />
                    </div>
                    <div className='content'>
                        <h2 className='card-name'>
                            {props.name}
                        </h2>
                        <p className='type-card'>{props.type}</p>
                    </div>
                </div>
            </div>

        </Container>
    );
}

export default Card;