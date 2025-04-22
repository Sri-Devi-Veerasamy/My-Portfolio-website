import React from 'react'
import './Education.css';

const Education = () => {

  const list = [
    {
      year: '2022 - 2025',
      std:  'Bachelor Of Science ( Physics )',
      clg: 'Thiagarajar College',
      description: 'In college, I gained proficiency in MS Word, Excel, and PowerPoint, along with strong discipline and technical skills. I also developed teamwork and communication abilities through organizing events like the Science Expo and intercollegiate meet.'
  
    },
    {
      year: '2022',
      std: 'Higher Secondary Certificate',
      clg: 'Sourashtra Girls Higher Secondary School',
      description: 'During my Higher Secondary education, I pursued the Bio-Maths group, which enhanced my analytical skills and discipline. Participating in various activities also improved my communication and sparked my interest in the IT field..'
    },
    {
      year: '2020',
      std: 'Secondary School Leaving Certificate',
      clg: 'Government High School, Vandiyaur',
      description: 'During my SSLC education, I built a strong academic foundation and improved my study habits. I also developed soft skills like communication and teamwork through active participation in school activities..'
    },
  ]




  return (
    <div className="overallbox w-100">

      <h2 className='subtitle' style={{fontWeight:'bolder'}}>Education</h2>
      <div className='d-flex flex-column flex-lg-row gap-lg-5 gap-sm-3 mt-lg-5 mt-sm-4'>
        {
          list.map((item, index) => {
            return (
              <div className='cardbox'>
                <div className="year">{item?.year}</div>
                <div className="content">
                  <p className='subtitle1'>{item?.std}</p>
                  <p className="company">{item?.clg}</p>
                  <p className='description'>{item?.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>

  )
}
export default Education;