import React from 'react'
import PageHeader from '../components/PageHeader'
import FaqItem from '../components/FaqItem'
import {Help} from '@mui/icons-material';
import {faqOrdersData,faqPromotionData,faqDeliveryData,faqReturnData} from '../data/dummydata'

const Faq = () => {
  const data=[
    {
        icon:Help,
        tittle:'Frequently Asked Questions'
    }
];

return (<section className='page-container'>
<PageHeader {...data}/>
<div className='section-content'>
  
    <div className='faq-item-container'>
      <div className='faq-item-box'>
        <div className='heading'><h3>01. Orders and online shopping</h3></div>
    {faqOrdersData.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    <div className='faq-item-box'>
        <div className='heading'><h3>02. Special, discount and promotion </h3></div>
    {faqPromotionData.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    <div className='faq-item-box'>
        <div className='heading'><h3>03. Delivery and Shipping</h3></div>
    {faqDeliveryData.map((item,i)=>{
      return(
      <FaqItem key={i} item={item} />
      )
    })}
    </div>
    <div className='faq-item-box'>
        <div className='heading'><h3>04. Returns, exchanges and complaints</h3></div>
    {faqReturnData.map((item,i)=>{
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

export default Faq