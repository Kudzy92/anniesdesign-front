import React from 'react'
import { Link } from "react-router-dom"
import { homebanner } from '../data/dummydata'


const HomeBanner = () => {
  
  return (
    <section className="banner-container">
      {homebanner.map((item,i)=>{
            return(
                <div key={i} className="banner">
        <img src={item.bannerImg} width='200' height='200' alt=""/>
        <div className="content">
            <span>{item.bannerText}</span>
            <h3>{item.bannerDiscount}</h3>
            <a to={'#'} className="btn">{item.bannerButtonText}</a>
        </div>
    </div>
            )
        })
      }
        </section>
  )
}

export default HomeBanner