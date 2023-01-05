import "./HeroImageStyle.css";
import React from "react";
import BackgroundSlider from "../lib/BackgroundSlider";
import { Link } from "react-router-dom";
import i1 from "./Assest/badmi.jpg";
// import i2 from './Assest/bolly.jpg'
import i3 from "./Assest/bollyball.jpg";
import i4 from "./Assest/f4.jpg";
import i5 from "./Assest/cricket.jpg";
import i6 from "./Assest/table.jpg";
import i7 from "./Assest/chess.jpg";
import Time from './Time.js'
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <BackgroundSlider
          images={[i1, i5, i3, i4, i6, i7]}
          duration={3}
          transition={1}
        />
        {/* <img className="into-img" src={i4} alt="IntroImg"/>     */}
      </div>

      <div className="content">
        
        <p></p>
        <h1> UMANG' 2022</h1>
        <img className="data" src={"https://i.imgur.com/fnIUJxK.png"} alt='imghairebaba'></img>
        <h4>MIT,MUZAFFARPUR</h4>
        {/* <h2>REGISTER NOW</h2> */}
        <a href="https://forms.gle/HniKrDwCRTCxv9ve7" target="_blank" rel='noreferrer' className="btn">
          Accomodation
        </a>
        <Link to="/Events" className="btn">
          EVENTS
        </Link>
        <h4>Registration Closes in</h4>
        <h1 ><Time/></h1>
        
      </div>
    </div>
  );
};

export default HeroImage;
