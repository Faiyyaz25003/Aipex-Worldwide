
import Benefits from '@/Components/Benefits/Benifits'
import Header from '@/Components/Header/Header'
import Hero from '@/Components/Hero/Hero'
//import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      {/* <Navbar/> */}
      <Hero />
      <Benefits/>
      
    </div>
  )
}

export default page
