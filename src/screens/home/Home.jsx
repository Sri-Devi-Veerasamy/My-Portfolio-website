import React, { useRef } from 'react'
import Header from '../../Components/Header'
import Container1 from '../../Components/Container1'
import CareerObjective from '../../Components/CareerObjective'
import Education from '../../Components/Education'
import Skills from '../../Components/Skills'
import Internship from '../../Components/Internship'
import About from '../../Components/About'

const Home = () => {

  const homeRef = useRef(null)
  const objectiveRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const internshipRef = useRef(null)
  const aboutRef = useRef(null)


  const scrollTohome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToObjective = () => {
    objectiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToEducation = () => {
    educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const scrollToInternship = () => {
    internshipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };


  return (
    <div>
      <Header scrollToHome={scrollTohome} scrollToObjective={scrollToObjective} scrollToSkills={scrollToSkills} scrollToEducation={scrollToEducation} scrollToInternship={scrollToInternship} scrollToAbout={scrollToAbout} />
      <div id='home' ref={homeRef}>
        <Container1 />
      </div>
      <div ref={objectiveRef}>
        <CareerObjective />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={internshipRef}>
        <Internship />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
   
   {/* <About/> */}
    </div>
  
  )
}

export default Home
