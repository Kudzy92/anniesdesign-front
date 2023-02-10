import React from 'react'
import  img1  from '../images/banner/banner-4.png'
import  img2  from '../images/banner/banner-5.png'


const MadeForBanner = () => {
  return (
    <section className="made-for-banner">
<div className="container">
<div className="left">
<div className="mfb-wrapper">
<div className="img-container">
<div className="rounded-offer">
<div className="rounded-offer-inner">
<h5 className="offer-name">Sale</h5>
<h3 className="offer-rate">40<span>%</span></h3>
<h5 className="offer-percent">off</h5>
</div>
</div>
<img className="img1" src={img1}  alt="made for"/>
<img className="img2" src={img2}  alt="made for"/>
</div>
</div>
</div>
<div className="right">
<div className="made-for-banner-content">
<h1>Made for the elite</h1>
<p>This chair is made for all ages to feel the comfort and relax and feel better.</p>
</div>
</div>
</div>
</section>
  )
}

export default MadeForBanner