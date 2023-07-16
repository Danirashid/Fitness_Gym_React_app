import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=786 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Navbar />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? '160px':"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>your<span></span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='5' preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={987} start={879} delay='4' preFix='+' />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* Hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}    
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero Image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />
        {/* Calories */}
        <motion.div
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
