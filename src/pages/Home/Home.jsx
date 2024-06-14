import React from 'react'
import './Home.css'
import OurRooms from '../../Components/OurRooms/OurRooms'
import Attractions from '../../Components/Attractions/Attractions'
import ScrollToTop from '../../utils/functions'
const Home = () => {
  ScrollToTop();
  return (
    <div>
        <div style={{marginTop:"100px"}}>
        <OurRooms/>
        </div>
        <Attractions/>
    </div>
  )
}

export default Home