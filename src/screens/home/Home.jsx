import React, { useRef } from 'react'
import Header from '../../Components/Header'
import Container1 from '../../Components/Container1'
import CareerObjective from '../../Components/CareerObjective'
import Education from '../../Components/Education'
import Skills from '../../Components/Skills'

const Home = () => {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)

  const scrollTohome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToEducation = () => {
    educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };



  return (
    <div>
      <Header scrollToHome={scrollTohome} scrollToAbout={scrollToAbout} scrollToSkills={scrollToSkills} scrollToEducation={scrollToEducation} />
      <div id='home' ref={homeRef}>
        <Container1 />
      </div>
      <div ref={aboutRef}>
        <CareerObjective />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
   
    </div>
  )
}

export default Home
