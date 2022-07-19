import React from 'react'
import { navigate } from 'react-router-dom'
import Carousel from 'react-responsive-carousel'


function HeroBanner({banner}) {
    console.warn(JSON.stringify(banner))
  return (
    <Carousel showArrows={true} >
        <div>
            <h3>{banner?.title}</h3>
            <img src={banner?.logo} />
            <p className="legend">{banner?.description}</p>
        </div>
    </Carousel>
  )
}

export default HeroBanner