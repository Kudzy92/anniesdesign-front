import React from 'react'
import { Link } from "react-router-dom"
import {ArrowRightAlt, Facebook, Twitter, Instagram} from '@mui/icons-material';
import { payment } from '../data/dummydata';

const Footer = () => {
  const location=`Unit 20, New market Rd,\n Northlands Deco park, \n  Randburg, South Africa`;
  return (
    <>
    <section className="footer">

<div className="box-container">

    <div className="box">
        <h3>About us</h3>
  
  <div className="about-footer-wrapper-item">
  <ul className="list-item-container">
          <li className="list-item">
                <Link to={'#'} className="list-text">{location}</Link>
              </li>
            <li className="list-item">
                <Link to={'#'} className="list-text">Cell : +27 68 463 1065</Link>
              </li>
              <li className="list-item">
                <Link to={'#'} className="list-text">Tel  : +27 10 220 5196</Link>
              </li>
            <li className="list-item">
                <Link to={'#'} className="list-text">Email: info@anniesdesign.co.za</Link>
              </li>
        </ul>
       <ul className="social-link">
 
   <li><Link to="https://www.instagram.com/anniesdesign1"><Instagram /></Link></li>
   <li><Link to="https://www.facebook.com/anniesdesign1"><Facebook /></Link></li>
     <li><Link to={'#'}><Twitter/></Link></li>
   </ul>
    </div>
    </div>

    <div className="box">
        <h3>extra links</h3>
        <Link to={'#'}> <ArrowRightAlt /> my wishlist</Link>
        <Link to={'#'}> <ArrowRightAlt /> my account</Link>
        <Link to={'#'}> <ArrowRightAlt /> my favorite</Link>
        <Link to={'#'}> <ArrowRightAlt /> terms of user</Link>
    </div>

    <div className="box">
        <h3>Help</h3>
        <Link to={'#'}><ArrowRightAlt /> FAQ</Link>
        <Link to={'#'}><ArrowRightAlt /> Delivery</Link>
        <Link to={'#'}><ArrowRightAlt /> Returns</Link>
        <Link to={'#'}><ArrowRightAlt /> Order status</Link>
    </div>

    <div className="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <div className="newsletter-form">
            <div className="form-control">
    <input type="email" placeholder="Enter your email" className="box"/>
</div>
           <button className="btn">Subscribe</button>
        
    </div>

</div>
<a href="https://wa.me/27684631065?text=Good%20day%20I%20hope%20you%20are%20very%20well" target="_blank" rel='noreferrer' className="whatsapp-chat"></a>
</div>
<div className="ad-rights-reserved">
<p>© Copyright 2022 - Annies DESIGN. All rights reserved. Prices and products displayed on this site may vary from time to time. Annies DESIGN shall in no way be held responsible for any errors or misstatements emanating from this website.</p>
</div>
</section>
<section className="credit">

    <div className="developer-info"><p>Powered by <Link to="kudzy.me">kudzy.me</Link> | all rights reserved!</p></div>
	<div className="payments">
    {payment.map((item,i)=>{
      return (
<div key={i} className="pay-item"><img src={item.img} object-fit='contain' alt={item.name}/></div>
      )
    })}

	</div>
</section>
 </>
  )
}

export default Footer