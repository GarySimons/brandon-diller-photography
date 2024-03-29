import React from 'react'
import './HomeImageStyles.css'

const HomeImage = () => {
  return (
    <div className='background-image'>
      <div className='tint-overlay'></div>
        <div className='content-container'>
          <h1 className='intials'>BD</h1>
          <h2 className='subhead'>ARCHITECTURAL PHOTOGRAPHY</h2>
          <p className='name'>Brandon Diller</p>
        </div>
    </div>
  )
}

export default HomeImage