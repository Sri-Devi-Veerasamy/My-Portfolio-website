import React from 'react'
import './About.css';
import { Nav } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
const About = () => {
  return (
    <div >
      <div className="about-section">
        <div className="container">
          <h2 className="heading"> ABOUT<span style={{ color: 'orange', marginLeft: 10 }}>ME</span> </h2>
          <div className="about content">
            <div className="personal">
              <h3>Personal Info</h3>
              <div className='d-flex flex-column flex-lg-row flex-wrap gap-3'>
                <div>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>First Name :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>
                      Sri Devi
                    </span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Last Name :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>
                      Veerasamy
                    </span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Marital status :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>Single</span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Nationality :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>Indian</span>
                  </li>

                </div>
                <div>

                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Phone :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>+91 7339314128</span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Email :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>srideviv1303@gmail.com</span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Languages :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>Tamil , English</span>
                  </li>
                  <li>
                    <strong style={{ color: 'orange', fontWeight: 'bold' }}>Address :</strong>
                    <span style={{ color: '#fff', fontFamily: 'Arial', fontSize: '16px', marginLeft: '5px' }}>5/1979 Sourashtrapuram 6th street Vandiyur, Madurai 20</span>
                  </li>
                </div>
                <div className='d-flex flex-row'>

                <div   onClick={() => window.location.href  =`https://wa.me/${'+917339314128'}?text=${encodeURIComponent('Hi')}`} className="running-text-container2">
                    <img
                      src={'https://img.icons8.com/?size=100&id=16713&format=png&color=000000'}
                      alt="Brand Logo"
                      className='imagesView1'
                    />
                    <p className="runText1">Whatsapp</p>
                  </div>
                  <div  onClick={() => window.location.href  =`https://www.linkedin.com/in/sri-devi-veerasamy-674aa2268`} className="running-text-container2">
                    <img
                      src={'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'}
                      alt="Brand Logo"
                      className='imagesView1'
                    />
                    <p className="runText1">Linkedin</p>
                  </div>

                  <div   onClick={() => window.location.href  ='https://github.com/Sri-Devi-Veerasamy'} className="running-text-container2">
                    <img
                      src={'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'}
                      alt="Brand Logo"
                      className='imagesView1'
                    />
                    <p className="runText1">GitHub</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;