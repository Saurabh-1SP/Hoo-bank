import React from 'react'
import { people01, people02, people03, quotes } from '../../assets'
import './Testimonials.scss'


const comments =[
  {
    message: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name:'Herman Jensen',
    post: 'Founder & Leader',
    pimg: people01,
  },
  {
    message: `Money makes your life easier. If you're lucky to have it, you're lucky.`,
    name:'Steve Mark',
    post: 'Founder & Leader',
    pimg: people02,
  },
  {
    message: 'It is usually people in the money business, finance, and international trade that are really rich.',
    name:'Kenn Gallagher',
    post: 'Founder & Leader',
    pimg: people03,
  },
]

const Testimonials = () => {
  return (
    <div className='app__testimonials app__flex section__padding'>
      <div className="app__testimonials-head app__flex">
        <h2>What people are saying about us</h2>
        <p className="p-text">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="app__testimonials-comments">
        {comments.map((items,index)=>(
        <div className="app__testimonials-comment app__flex" key={items.name+index}>
          <img src={quotes} alt="quotes" />
          <p>{items.message}</p>
          <div className="app__testimonials-comment_profile app__flex">
            <div><img src={items.pimg} alt="img" /></div>
            <div className='comment_profile-text'>
            <h3>{items.name}</h3>
            <p className="p-text">{items.post}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials