import React from 'react'
import { card } from '../../assets'
import './Card.scss'

const Card = () => {
  return (
    <div id='Solution' className='app__card app__flex section__padding'>
      <div className="app__card-container">
        <h2>Find a better card deal in few easy steps.</h2>
        <p className="p-text">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button className='bg-blue-gradient'>Get Started</button>
      </div>
      <div className="app__card-img">
        <img src={card} alt="card" />
      </div>
    </div>
  )
}

export default Card