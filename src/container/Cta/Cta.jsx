import React from 'react'
import './Cta.scss'

const Cta = () => {
  return (
    <div className="app__flex">
      <div className='app__cta app__flex section__padding'>
        <div className="app__cta-text">
          <h2>Let’s try our service now!</h2>
          <p className="p-text">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='bg-blue-gradient'>Get started</button>
      </div>
    </div>
  )
}

export default Cta