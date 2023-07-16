import React from 'react'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import './Reasons.css'
const Reasons = () => {
  return (
    <div className="Reasons">
        <div className="left-r">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right-r">
            <span>Some Reasons</span>

            <div>
                <span className='stroke-text'>WHY</span>
                <span> CHOOSE US?</span>
            </div>
            <div className='detail-right'>
                <div><img src={tick} alt="" /><span>OVER 140+ EXPERT COACHS</span> </div>
                <div><img src={tick} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span> </div>
                <div><img src={tick} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span> </div>
                <div><img src={tick} alt="" /><span>RELIABLE PARTNERS</span> </div>
               
            </div>
            <span style={{
                fontSize: 'normal',
                color: 'var(--gray)'
            }}>Our Partners</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons