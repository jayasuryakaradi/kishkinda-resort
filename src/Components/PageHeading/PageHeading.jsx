import React from 'react'
import './PageHeading.css'
const PageHeading = ({image, title}) => {
  return (
    <div className='page-heading-container'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
    </div>
  )
}

export default PageHeading