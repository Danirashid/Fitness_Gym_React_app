import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const mobile = window.innerWidth <= 786 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />

      {menuOpened === false && mobile === true ? (
        <div
        style={{padding: '0.5rem', borderRadius: '5px', backgroundColor: 'var(--appColor)'}}
        onClick={()=>setMenuOpened(!menuOpened)}
        >
          <img src={bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ): (
        <ul className='header-menu'>
        <li>
        <Link
        onClick={()=> setMenuOpened(false)}
        to='home'
        activeClass='active'
        span={true}
        smooth={true}
        >Home</Link></li>
        <li>
          <Link
          onClick={()=> setMenuOpened(false)}
          to='programs'
          span={true}
          smooth={true}
          >
          Programs</Link>
          </li>
        <li>
          <Link
          onClick={()=> setMenuOpened(false)}
          to='why_us'
          span={true}
          smooth={true}
          >
          Why us</Link>
          </li>
        <li>
          <Link
          onClick={()=> setMenuOpened(false)}
          to='plans'
          span={true}
          smooth={true}
          >
          Plans</Link>
          </li>
        <li>
          <Link
          onClick={()=> setMenuOpened(false)}
          to='testimonials'
          span={true}
          smooth={true}
          >Testimonials</Link>
          </li>
        
      </ul>
      )}

      

      
    </div>
  )
}

export default Navbar