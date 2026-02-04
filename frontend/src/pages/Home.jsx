import React from 'react'
import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Journey from '../components/home/Journey'
import WhyAustralia from '../components/home/WhyAustralia'
import Services from '../components/home/Services'
import WhatEsanteDoes from '../components/home/WhatEsanteDoes'
import FastTrackDegree from '../components/home/FastTrackDegree'
import FindYourPlace from '../components/home/FindYourPlace'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Journey/>
        <WhyAustralia/>
        <Services/>
        <WhatEsanteDoes/>
        <FastTrackDegree/>
        <FindYourPlace/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home