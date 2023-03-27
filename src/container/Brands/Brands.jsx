import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../../assets'

import './Brands.css'

const Brands = () => {
  return (
    <div className='app__brands app__flex section__padding'>
        <div className='app__flex' ><img src={airbnb} alt="" /></div>
        <div className='app__flex' ><img src={binance} alt="" /></div>
        <div className='app__flex' ><img src={coinbase} alt="" /></div>
        <div className='app__flex' ><img src={dropbox} alt="" /></div>
    </div>
  )
}

export default Brands