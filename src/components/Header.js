import React,{useState} from 'react';
import './Header.css'
import { Container,Offcanvas } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';
const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='header-li'>

        <ul>
            <li>
                <a href='#home'>
                    Home
                </a>
            </li>
            <li>
                <a href='#my-work'>
                    My Work
                </a>
            </li>
            <li>
                <a href='#contact'>
                    Contact
                </a>
            </li>
        </ul>
        <AiOutlineMenu onClick={handleShow} className='menu-icon' />
        

      <Offcanvas className='responsive-nav' show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <ul>
            <li>
                <a>
                    Home
                </a>
            </li>
            <li>
                <a>
                    My Work
                </a>
            </li>
            <li>
                <a>
                    Contact
                </a>
            </li>
        </ul>
         
        </Offcanvas.Body>
      </Offcanvas>

        </div>
    );
}

export default Header;