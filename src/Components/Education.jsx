import React from 'react'
import './Education.css';
const Education = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h2>EDUCATION</h2>
      </div>
      <div className="right-section">

        <div className="cardbox">
          <div className='new'>
            <div className="year">2022-2025</div>
            <div className="content">
              <h3>BACHELOR OF SCIENCE (PHYSICS)</h3>
              <p className="company">THIAGARAJAR COLLEGE</p>
              <p className='description'> In college, I gained proficiency in MS Word, Excel, and PowerPoint, along with strong discipline and technical skills. I also developed teamwork and communication abilities through organizing events like the Science Expo and intercollegiate meet. </p>
            </div>
          </div>
        </div>
        <div className="cardbox">
          <div className='new'>
            <div className="year">2022</div>
            <div className="content">
              <h3>HIGHER SECONDARY CERTIFICATE</h3>
              <p className="company">SOURASHTRA GIRLS HIGHER SECONDARY SCHOOL</p>
              <p>Percentage/CGPA - 82%</p>
              <p className='description'>During my Higher Secondary education, I pursued the Bio-Maths group, which enhanced my analytical skills and discipline. Participating in various activities also improved my communication and sparked my interest in the IT field..</p>
            </div>
          </div>
        </div>
        <div className="cardbox">
          <div className='new'>
            <div className="year">2020</div>
            <div className="content">
              <h3> SECONDARY SCHOOL LEAVING CERTIFICATE</h3>
              <p className="company">GOVERNMENT HIGH SCHOOL,VANDIYUR</p>
              <p>Percentage/CGPA - 96%</p>
              <p className='description'>During my SSLC education, I built a strong academic foundation and improved my study habits. I also developed soft skills like communication and teamwork through active participation in school activities..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Education;