import React from 'react'
import Hero from '../components/Hero'
import Bussection from '../components/Bussection'
import HeroAbout from '../components/HeroAbout'
import Routes from '../components/Routes'
import CoustomersReview from '../components/CoustomersReview'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <Bussection />
      <Routes/>
      <HeroAbout />
      <CoustomersReview />
      <FinalCTA/>
      
    </div>
  )
}

export default Home
