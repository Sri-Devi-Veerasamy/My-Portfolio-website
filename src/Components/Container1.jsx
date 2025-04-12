import React, { useState } from 'react'
import './Container1.css';
import Typewriter from 'typewriter-effect';
import { Button, Nav, Toast, ToastContainer } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';


const Container1 = () => {
    const [showToast, setShowToast] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/sri.pdf'; // path relative to the public folder
        link.download = 'Sridevi.pdf'; // filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowToast(true);
    };

    const handleClick = () => {
        const phoneNumber = '+917339314128';
        const message = 'Hi, I saw your portfolio and I\'m interested in working with you.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };

    return (
        <div
            className='d-flex flex-column-reverse flex-lg-row'
            style={{
                height: '100vh',
                width: '100%',
                paddingLeft: 40,
                paddingRight: 40,
                gap: 20,
                background: 'linear-gradient(to right, #BBF7D1, #BFDCFE)',
            }}
        >


            <div
                className='text-container text-sm-center text-lg-start'
                style={{ width: '100%', paddingTop: '5%', textAlign: 'center', flex: 1 }}
            >
                <h1 className='name mt-lg-5'>Hello, I'm Sri Devi</h1>
                <div className='name1'>
                    <Typewriter
                        options={{
                            strings: ['Fresher', 'Looking for a job'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <p style={{ color: 'GrayText', fontWeight: '400' }}>
                    Aspiring professional ready to contribute.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        marginTop: '30px',
                    }}
                >
                    <Button onClick={handleClick} className='hireme'>
                        Hire Me
                    </Button>
                    <Button onClick={() => { handleDownload() }} className='Resume'>
                        Resume <FiDownload size={13} style={{ marginLeft: 5 }} />
                    </Button>
                </div>

                <div className='buttons' style={{ marginTop: 30 }}>
                    <Nav.Link href={`https://github.com/Sri-Devi-Veerasamy`} className="nav-link-hover fw-bold me-4"><BsGithub size={22} /></Nav.Link>
                    <Nav.Link href={`https://www.linkedin.com/in/sri-devi-veerasamy-674aa2268`} className="nav-link-hover fw-bold me-4"><BsLinkedin size={22} /></Nav.Link>
                    <Nav.Link href={`https://wa.me/${'+917339314128'}?text=${encodeURIComponent('Hi')}`} className="nav-link-hover fw-bold me-4"><FaWhatsapp size={22} /></Nav.Link>
                    <Nav.Link href={`tel:+917339314128`} className="nav-link-hover fw-bold me-4"><MdCall size={22} /></Nav.Link>
                </div>
            </div>

            <div
                className='image-container '
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    paddingLeft: '5%',
                    paddingTop: '5%',
                    textAlign: 'center',
                    flex: 1,
                }}
            >
                <img src={require('../images/pic.png')} alt='Brand Logo' width='100%' height='auto' />
            </div>
            <ToastContainer position="top-end" className="p-3">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                    bg="success"
                >
                    <Toast.Header>
                        <strong className="me-auto">Download</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white" >My resume is downloading...</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default Container1