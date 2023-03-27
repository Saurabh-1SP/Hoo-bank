import React from 'react'
import './Stats.scss'

const Stats = () => {
  return (
    <div className='app__stats app__flex section__padding'>
      <div className="stat app__flex">
        <h2>3800+</h2>
        <p className="text-gradient">USER ACTIVE</p>
      </div>
      <div className="bar"></div>
      <div className="stat app__flex">
        <h2>230+</h2>
        <p className="text-gradient">TRUSTED BY COMPANY</p>
      </div>
      <div className="bar"></div>
      <div className="stat app__flex">
        <h2>$230M+</h2>
        <p className="text-gradient">TRANSACATION</p>
      </div>
    </div>
  )
}

export default Stats