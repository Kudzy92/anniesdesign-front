import React from 'react'
import Hero from '../components/Hero'
import HomeBanner from '../components/HomeBanner'
import Howwework from '../components/Howwework'
import MadeForBanner from '../components/MadeForBanner'
import Category from '../components/Category'
import HomeShop from '../components/HomeShop'
import Testimonials from '../components/Testimonials'

const Home = () => {
  window.scrollTo(0,0);
  return (
    <>
    <Hero />
    <HomeBanner />
    <Howwework />
    <MadeForBanner />
    <Category />
    <HomeShop />
    <Testimonials />
    </>
  )
}

export default Home