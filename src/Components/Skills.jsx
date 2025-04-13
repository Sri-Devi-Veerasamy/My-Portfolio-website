import React from 'react'
import './Skills.css';

const Skills = () => {
  return (
    <div>
      <div className='d-flex flex-column flex-lg-row justify-content-between' style={{ paddingLeft: '30px', paddingRight: '30px' }}>

        <div className='overallcontainers' >
          <h3 className='title ' style={{ color: '#000' ,fontWeight:'bolder' }}>Technical Skills</h3>
          <div className="running-text" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Ensure flex-wrap works */}

            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'}
                alt="Brand Logo"
                className='imagesView'
             

              />
              <p className="runText">HTML</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=21278&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">CSS</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Bootstrap</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Javascript</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">React js</p>
            </div>

            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">C++</p>
            </div>


          </div>
        </div>

        <div className='overallcontainers'>
          <h3 className='title' style={{ color: '#000' }}>Source Code Management & Other skills</h3>
          <div className="running-text" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Ensure flex-wrap works */}
            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Git</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">GitHub</p>
            </div>
            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=13674&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Word</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=117561&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Excel</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=81726&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">PowerPoint</p>
            </div>

            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000'}
                alt="Brand Logo"
                  className='imagesView'
              />
              <p className="runText">Canva</p>
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Skills












