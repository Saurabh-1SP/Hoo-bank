import React from 'react'
import { arrowUp, discount, robot } from '../../assets'
import './Header.css'

const Header = () => {
  return (
    <div id='Home' className='app__header app__flex section__padding'>
      <div className="app__header-container app__flex">
        <div className="app__header-container_discount app__flex bg-discount-gradient">
          <img src={discount} alt="" />
          <p><span style={{color: 'white'}}>20%</span> DISCOUNT FOR <span style={{color: 'white'}}>1 Montth</span> ACCOUNT</p>
        </div>
        <div className="app__header-container_head">
          <div>
            <h2>The Next <br/><span className='text-gradient'>Generation</span></h2>
          
          </div>
          <h2>Payment Method</h2>
        <p className="p-text">
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
        </p>
        </div>
      </div>
      <div className="app__header-img">
        <img src={robot} alt="robot" />
      </div>
    </div>
  )
}

export default Header