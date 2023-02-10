import React, { useState, useRef } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Instagram, Facebook, Phone} from '@mui/icons-material'
import {Link}  from 'react-router-dom'
import emailjs  from '@emailjs/browser';
import PageHeader from '../components/PageHeader'

const Contact = () => {
  const form =useRef();
  const [fullname,setFullname]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');

  const [ isValidFullname,setIsValidFullname]=useState(false);
  const [isValidPhone,setIsValidPhone]=useState(false);
  const [isValidEmail,setIsValidEmail]=useState(false);
  const [isValidMsg,setIsValidMsg]=useState(false);
  const mapStyles = {        
      height: "100vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    }
    const handleOnFocusOut=(e,type)=>{
   
    const value=e.target.value;
    switch(type) {
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid ? setIsValidEmail(!setIsValidEmail) : setIsValidEmail(isValidEmail) ;
        break;
      case 'name':
          // /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/i
          const nameValid=value.match(/^[a-z ,.'-]+$/i);
       nameValid ? setIsValidFullname(!setIsValidFullname) : setIsValidFullname(isValidFullname) ;
        break;
      default:
        break;
    }
    console.log("VALUE"+e.target.value+"TYPE"+type+"Fullname"+fullname+"isValidFullname"+isValidFullname+'isValidEmail'+isValidEmail);
  }
  const handleSendEmail =(e)=>{
      e.preventDefault();
      emailjs.sendForm(process.env.EMAIL_SERVICE_ID,process.env.EMAIL_CONTACT_TEMPLATE_ID,
     form.current,process.env.EMAIL_PUBLIC_KEY).then((result) => {
              console.log(result.text+"public key"+process.env.EMAIL_PUBLIC_KEY);
          }, (error) => {
              console.log(error.text);
          });
  }
  const data=[
    {
        icon:Phone,
        tittle:'Contact us',
        page:'Contact us',
    }
];
return (
  <>
  <section className="contact-location">
  <PageHeader {...data}/>
 <div className="container-fluid">
 
<div className="mapouter"><div className="gmap_canvas">
  <iframe className="gmap_iframe"
   frameBorder="0"
   scrolling="no"
   marginHeight="0"
   marginWidth="0" 
  src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=annie's design&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
  
  </div>
  
  </div>
   </div>
</section>

<div className="ad-contact">
<div className="container">
<div className="left">
  <form id="contact_form" className="contact-form" ref={form}>
      <h3>get in touch</h3>
  
  <div className="form-container">
      <span>your name</span>
  <div className={'form-control'+ (isValidFullname ? ' isvalid': fullname!=='' ? ' isnotvalid':'')}>
  <span className="required">*</span>
      <input type="text" name='from_name' onBlur={(e)=>handleOnFocusOut(e,'name')} onChange={(e)=> setFullname(e.target.value)} className="box"/>
  </div>
  </div>
  <div className="form-container">
      <span>your phone</span>
  <div className={'form-control'+ (isValidPhone ? ' isvalid': phone!=='' ? ' isnotvalid':'')}>
  <span className="required">*</span>
      <input type="text" name='from_phone' onBlur={(e)=>handleOnFocusOut(e,'phone')} onChange={(e)=> setPhone(e.target.value)} className="box"/>
  </div>
  </div>
  <div className="form-container">
      <span>your email</span>
  <div className={'form-control'+ (isValidEmail ? ' isvalid': email!=='' ? ' isnotvalid':'')}>
      <input type="email" name='from_email' onBlur={(e)=>handleOnFocusOut(e,'email')} onChange={(e)=> setEmail(e.target.value)} className="box"/>
  </div>
  </div>
  <div className="form-container">
      <span>your message</span>
  <div className="msg form-control">
      <textarea className="box"  name="message" rows="15" />
  </div>
      </div>
      <button className="btn" onClick={(e)=>handleSendEmail(e)}>Send message</button>
  </form>
</div>
<div className="right">
<div className="contact-info">
<h3>Contact Information</h3>
<div className="row">
<h3>Address</h3>
<div className="content">
<span>Unit 20, New market Rd,</span>
<span>Northlands Deco park,</span>
<span>Randburg, South Africa</span>
</div>
</div>
<div className="row">
<h3>Phone</h3>
<div className="content">
<span>Cell : +27 68 463 1065</span>
<span>Tell : +27 10 220 5196</span>

</div>
</div>
<div className="row">
<h3>Email</h3>
<div className="content">
<span>info@anniesdesign.co.za</span>
</div>
</div>
<div className="row">
<h3>Operating time</h3>
<div className="content">
<span>Mon - Fri : 09 00am - 17 00pm</span>
<span>Saturday  : 09 00am - 16 00pm</span>
<span>Sunday    : 09 00am - 14 00pm</span>
</div>
</div>
<div className="row">
<ul className="social-link">
    
     <li><Link to="https://www.instagram.com/anniesdesign1"><Instagram /></Link></li>
     <li><Link to="https://www.facebook.com/anniesdesign1"><Facebook /></Link></li>
     </ul>
</div>

</div>


</div>
</div>
 
</div>
</>
  )
}

export default Contact