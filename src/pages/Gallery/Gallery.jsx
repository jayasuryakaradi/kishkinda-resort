import React from 'react'
import './Gallery.css'
import image1 from '../../assets/rooms/slide6.jpg'
import PageHeading from '../../Components/PageHeading/PageHeading'
import ScrollToTop from '../../utils/functions'
const Gallery = () => {
  ScrollToTop()
  return (
    <>
      <PageHeading title={"GALLERY"} image={image1}/>
      
    </>
  )
}

export default Gallery