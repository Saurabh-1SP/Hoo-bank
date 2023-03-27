import React from 'react'
import { apple, bill, google } from '../../assets'
import './Billing.scss'

const Billing = () => {
  return (
    <div id='Features' className='app__bill app__flex section__padding'>
      <div className="app__bill-img">
        <img src={bill} alt="" />
      </div>
      <div className="app__bill-container">
        <h2>Easily control your billing & invoicing.</h2>
        <p className='p-text'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div>
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Billing