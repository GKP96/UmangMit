import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'

import  HeroImg  from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Events = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HeroImage/> */}
      <HeroImg heading="EVENTS" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Events