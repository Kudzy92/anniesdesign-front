import React from 'react'

const FaqItem = ({item}) => {
  return (
    <div className='ad-faq-item'>
        <div className='ad-faq-tittle'><h3>{item.title}</h3></div>
        <div className='ad-faq-des'>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default FaqItem