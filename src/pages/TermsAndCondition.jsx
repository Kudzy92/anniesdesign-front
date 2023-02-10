import React , { useState, useEffect} from 'react'
import PageHeader from '../components/PageHeader'
import FaqItem from '../components/FaqItem'
import {Help} from '@mui/icons-material';
import axios from 'axios'


const TermsAndCondtion = () => {
  const data=[
    {
        icon:Help,
        tittle:'Frequently Asked Questions',
        page:'FAQ',
    }
];
const [tcList, setTcList ]=useState([]);
useEffect(()=>{
  const fetchTcs= async ()=>{
   const {data} = await axios.get("/api/terms-and-conditions");
   setTcList(data);
  };
  fetchTcs();
 },[]);
 const tcGeneral=tcList.filter((tc)=>tc.tctype==='general');
 const tcReturn=tcList.filter((tc)=>tc.tctype==='returns');
 const tcDelivery=tcList.filter((tc)=>tc.tctype==='delivery');
return (<section className='page-container'>
<PageHeader {...data}/>
<div className='section-content'>
  
    <div className='faq-item-container'>
      <div className='faq-item-box'>
        <div className='heading'><h3>01. Orders and online shopping</h3></div>
    {tcGeneral.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    <div className='faq-item-box'>
        <div className='heading'><h3>02. Delivery and Shipping 02. Special, discount and promotion </h3></div>
    {tcDelivery.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    <div className='faq-item-box'>
        <div className='heading'><h3>03 Return, refunds and exchanges.</h3></div>
    {tcReturn.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    

    </div>
    
 
</div>

</section>
  )
}

export default TermsAndCondtion