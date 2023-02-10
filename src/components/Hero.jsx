import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {herobanner} from '../data/dummydata'
const Hero = () => {
  const [index, setIndex]=useState(0);
  const heroBannerLen=herobanner.length;
  return (
    
    <section className="home">
      {/*width:`${100* index}vw`style={{transform:`translateX(${-100*index}vw)`}}*/}
    <div className="slides-container">

<div  className="slide">
            <div className="content">
                <span>{herobanner[index].heading}</span>
                <h3>{herobanner[index].headingBig}</h3>
                <p>{herobanner[index].description}</p>
                <Link to={'#'} className="btn">{herobanner[index].bannerButtonText}</Link>
            </div>
            <div className="img">
                <img src={herobanner[index].bannerImg}  object-fit='cover' alt=""/>
            </div>
        </div>

      </div>
      <div className="home-nav-btn">
      {herobanner.map((item,i)=>{
          return(
i>0 ? <div key={i} className="rounded-btn active" onClick={()=>setIndex(i)}><span>0{i}</span></div> :<div key={i}></div> 
)})}

</div>
      </section>
  )
}

export default Hero