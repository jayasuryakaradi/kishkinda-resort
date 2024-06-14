import React from 'react'
import Navbar from '../Components/Navabr/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../utils/functions'

const Layout = () => {
 
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

        
    </div>
  )
}

export default Layout