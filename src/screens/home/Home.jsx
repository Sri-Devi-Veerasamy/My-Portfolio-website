import React from 'react'
import Header from '../../Components/Header'
import Container1 from '../../Components/Container1'
import CareerObjective from '../../Components/CareerObjective'
import Skills from '../../Components/Skills'
import Education from'../../Components/Education'
const Home = () => {
  return (
    <div>
      <Header />
      <Container1 />
      <CareerObjective />
    
      <Education/>
      <div style={{ height: 200 }}></div>
    </div>
  )
}

export default Home
