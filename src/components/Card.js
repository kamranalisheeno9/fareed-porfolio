import React,{useState} from 'react';
import { Container,Modal,Button } from 'react-bootstrap';
import './Card.css'
const Card = (props) => {

    const [show, setShow] = useState(false);
    const [currentImg, setCurrentImg] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (img) => {
        setShow(true)
        setCurrentImg(img.src)
    }  ;

    

    return (
        <Container className='card-container'>

            <div>
                <div className='card'>

                    <div className='img-box'>
                        <img onClick={(e)=>handleShow(e.target)} src={props.url} alt={props.name} />
                    </div>
                    <div className='content'>
                        <h2 className='card-name'>
                            {props.name}
                        </h2>
                        <p className='type-card'>{props.type}</p>
                    </div>
                </div>
            
            </div>

            <Modal
            centered
            show={show} onHide={handleClose}>
                <Modal.Body>
                    <img width="100%" style={{borderRadius:"10px"}} src={currentImg} alt='' />
                </Modal.Body>
               
            </Modal>
        </Container>
    );
}

export default Card;