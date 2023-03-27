import React from 'react'
import { shield, star } from '../../assets'
import './Business.scss'

const Business = () => {
  return (
    <div id='About' className='app__business app__flex section__padding'>
      <div className="app__business-head app__flex">
        <h2>You do the business, we’ll handle the money.</h2>
        <p className="p-text">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className='bg-blue-gradient'>Get Started</button>
      </div>
      <div className="app__business-container app__flex">
        <div className="app__business-container_content">
          <div className='app__business-container_img' ><img src={star} alt="" /></div>
          <div className="app__business-container_content_texts">
            <h3>Rewards</h3>
            <p className="p-text">
            The best credit cards offer some tantalizing combinations of promotions and prizes
            </p>
          </div>
        </div>
        <div className="app__business-container_content">
          <div className='app__business-container_img' ><img src={shield} alt="" /></div>
          <div className="app__business-container_content_texts">
            <h3>100% Secured</h3>
            <p className="p-text">
            We take proactive steps make sure your information and transactions are secure.
            </p>
          </div>
        </div>
        <div className="app__business-container_content">
          <div className='app__business-container_img' ><img src={star} alt="" /></div>
          <div className="app__business-container_content_texts">
            <h3>Balance Transfer</h3>
            <p className="p-text">
            A balance transfer credit card can save you a lot of money in interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business