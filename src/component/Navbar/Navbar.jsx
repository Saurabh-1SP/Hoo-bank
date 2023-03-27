import React, { useState } from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi'

import { logo } from '../../assets'
import './Navbar.css'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='app__navbar app__flex' >
      <div className="app__navbar-img app__flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__navbar-container app__flex">
        <ul className="app__navbar-container_links app__flex">
          {['Home','About', 'Features', 'Solution'].map((items,index)=>(
            <li className="app__navbar-container_link" key={items+index} >
              <a href={`#${items}`}>{items}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__navbar-menu">
          {/* <HiMenuAlt4 onClick={()=> setToggle(true)} /> */}

          {toggle ? (
            <div>
              <HiX onClick={()=> setToggle(false)}/>
              <ul > 
          {['Home','About', 'Features', 'Solution'].map((items,index)=>(
            <li key={`link-${items}${index}`} onClick={()=> setToggle(false)}
            className=' app__flex p-text'>
              <a href={`#${items}`}>{items}</a>
            </li>
          ))}
          </ul>
              </div>
            ): (
                <HiMenuAlt4 onClick={()=> setToggle(true)} />
            )

            }
      </div>
    </div>
  )
}

export default Navbar