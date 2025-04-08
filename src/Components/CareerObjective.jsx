
import React from 'react'
import './CareerObjective.css';

const CareerObjective = () => {
  return (
    <div>
      {/* scetion 1 */}
      <div className='d-flex flex-column  flex-lg-row pt-lg-5 pt-sm-2' style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <div className='text-container pe-lg-5' style={{ width: '100%', flex: 1 }} >
          <h3 className='title mt-3'>React Developer (Fresher) |<br /> HTML, CSS, JavaScript, React.js</h3>
          {/* <div style={{ width: '100%', height: 1.3, marginTop: 10, backgroundColor: 'rgb(231, 235, 252)' }}></div> */}
          <p className='mt-4' style={{ textAlign: 'justify' }}>Hi, I’m Sri Devi, a passionate and dedicated React Developer looking to kickstart my career in web development. I specialize in building dynamic, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.js.</p>
          <p className='mt-3' style={{ textAlign: 'justify' }}>As a fresher, I am eager to learn and apply my knowledge of front-end technologies to create scalable, fast, and interactive web applications. My focus is on writing clean, efficient code, and continuously improving my skills by staying up-to-date with the latest trends in web development. I’m also comfortable working with version control tools like Git and leveraging platforms like GitHub for collaboration.</p>
          <p className='mt-3' style={{ textAlign: 'justify' }}>I’m excited to contribute my skills and energy to building high-quality web applications, and I’m always eager to grow and learn from experienced developers. If you're looking for a motivated, detail-oriented developer with a strong foundation in web technologies, let's connect!</p>
        </div>
        <div
          className='image-container p-lg-4'
          style={{
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            flex: 1,
          }}
        >
          <img src={require('../images/react1.png')} alt='Brand Logo' width='100%' height='auto' />
        </div>
      </div>

      {/* scetion 2 */}
      <div className='d-flex flex-column flex-lg-row justify-content-between' style={{ paddingLeft: '30px', paddingRight: '30px' }}>

        <div className='' style={{ width: '50%', }}>
          <h3 className='title ' style={{ color: '#000' }}>Technical Skills</h3>
          <div className="running-text" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Ensure flex-wrap works */}

            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">HTML</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=21278&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">CSS</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Bootstrap</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Javascript</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">React js</p>
            </div>

            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">C++</p>
            </div>


            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=hGdCwhSHUe6L&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Python</p>
            </div>

          </div>
        </div>

        <div className='' style={{ width: '45%', }}>
          <h3 className='title' style={{ color: '#000' }}>Source Code Management & Other skills</h3>
          <div className="running-text" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Ensure flex-wrap works */}
            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Git</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">GitHub</p>
            </div>
            <div className="running-text-container1" style={{}}>
              <img
                src={'https://img.icons8.com/?size=100&id=13674&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Word</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=117561&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">Excel</p>
            </div>
            <div className="running-text-container1">
              <img
                src={'https://img.icons8.com/?size=100&id=81726&format=png&color=000000'}
                alt="Brand Logo"
                width="50px"
                height="50px"
              />
              <p className="runText">PowerPoint</p>
            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default CareerObjective
















{/* Running Text */ }
// <div className="running-text-container">
//   <div className="running-text">
//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">HTML</p>
//     </div>
//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=21278&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">CSS</p>
//     </div>
//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">Bootstrap</p>
//     </div>
//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">Javascript</p>
//     </div>
//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">React js</p>
//     </div>

//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">C++</p>
//     </div>


//     <div className="running-text-container1">
//       <img
//         src={'https://img.icons8.com/?size=100&id=hGdCwhSHUe6L&format=png&color=000000'}
//         alt="Brand Logo"
//         width="50px"
//         height="50px"
//       />
//       <p className="runText">Python</p>
//     </div>
//   </div>
// </div>