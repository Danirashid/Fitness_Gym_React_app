import React, {useRef} from 'react'
import './join.css'
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_39ce8om', 'template_97z6c4m', form.current, 'DX4hjtSpymJnpDG2Q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
    <div className="join-us">
        <div className="left-join">
            <hr />
            <div>
                <span className='stroke-text'>Ready To</span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body</span>
                <span className='stroke-text'>With Us?</span>
            </div>
        </div>
        <div className="right-join">
            <form className='email-container' onSubmit={sendEmail}>
                <input type="text" name="user_email" placeholder='Enter your Email Address here' id="" />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>

  )
}

export default Join