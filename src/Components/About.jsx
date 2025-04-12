import React from 'react'
import './About.css';
const About = () => {
  return (
    <div >
      <div className="about-section">
        <div className="container">
          <h2 className="heading"> ABOUT<span style={{ color: 'orange', marginLeft: 10 }}>ME</span> </h2>
          <div className="about content">
            <div className="personal">
              <h3>Personal Info</h3>
              <div>
                <ul>
                <li><strong>First Name:</strong> Sri Devi</li>
                <li><strong>Last Name:</strong> Veerasamy</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Address:</strong> 5/1979 Sourashtrapuram 6th street Vandiyur</li>
                <li><strong>Phone:</strong> +917339314128</li>
                <li><strong>Email:</strong>  srideviv1303@gmail.com</li>
                <li><strong>Languages:</strong> Tamil , English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
}

      export default About;