import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../../assets'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='app__footer app__flex section__padding'>
      <div className="app__footer-container app__flex">
        <div className="app__footer-logo">
          <img src={logo} alt="" />
          <p className="p-text">
          A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="app__footer-container_links">
          <div className="app__footer-container_link">
            <h2>Usefull Links</h2>
            <p className="p-text">Content</p>
            <p className="p-text">How it Works</p>
            <p className="p-text">Create</p>
            <p className="p-text">Explore</p>
            <p className="p-text">Term & Services</p>
          </div>
          <div className="app__footer-container_link">
            <h2>Community</h2>
            <p className="p-text">Help Center</p>
            <p className="p-text">Partners</p>
            <p className="p-text">Suggestion</p>
            <p className="p-text">Blog</p>
            <p className="p-text">Newsletters</p>
          </div>
          <div className="app__footer-container_link">
            <h2>Partner</h2>
            <p className="p-text">Our Partner</p>
            <p className="p-text">Become Partner</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="app__footer-copyright">
        <p className="p-text">2021 HooBank. All Rights Reserved.</p>
        <div className="app__footer-copyright_icons">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer