import React from 'react'
import './Container1.css';
import Typewriter from 'typewriter-effect';
import { Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';


const Container1 = () => {
 return (
  <div style={{ height: 700, flexDirection: 'row', gap: 20, display: 'flex', width: '100%', paddingLeft: '40px', paddingRight: '40px', background: 'linear-gradient(to right, #BCF6D0, #BFDCFA)' }}>
   {/* name container */}
   <div style={{ height: '100%', width: '50%',paddingLeft:'5%' }}>
    <h1 className='name'>Hello, I'm Sri Devi</h1>

    <div className='name1'>
     <Typewriter
      options={{
       strings: ['Fresher', 'Looking for a job'],
       autoStart: true,
       loop: true,
      }}
     />
    </div>
    <p>Aspiring professional ready to contribute.</p>


    <div className='buttons'>
     <button className='button1'>Hire Me</button>
     <button className='button2'>Resume</button>
    </div>

    <div className='buttons' style={{ marginTop: 30 }}>
     <Nav.Link href={`https://github.com/Sri-Devi-Veerasamy`} className="nav-link-hover fw-bold me-4"><BsGithub size={22} /></Nav.Link>
     <Nav.Link href={`https://www.linkedin.com/in/sri-devi-veerasamy-674aa2268`} className="nav-link-hover fw-bold me-4"><BsLinkedin size={22} /></Nav.Link>
     <Nav.Link href={`https://wa.me/${'+917339314128'}?text=${encodeURIComponent('Hi')}`} className="nav-link-hover fw-bold me-4"><FaWhatsapp size={22} /></Nav.Link>
     <Nav.Link href={`tel:+917339314128`} className="nav-link-hover fw-bold me-4"><MdCall size={22} /></Nav.Link>

    </div>




   </div>
   {/* image container */}
   <div style={{ height: '100%', width: '50%', paddingLeft: '7%',  }}>
    <img src={require('../images/pic.png')} alt="Brand Logo" width="500px" height="auto" />
   </div>

  </div>
 )
}

export default Container1