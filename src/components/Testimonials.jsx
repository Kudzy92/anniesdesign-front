import React , {useState} from 'react'
import { Link } from "react-router-dom"
import {ArrowBackIos, ArrowForwardIos, Star, StarOutline} from '@mui/icons-material';
import { testimonial } from '../data/dummydata'
import testimonialImg from '../images/testimonials/Neutron-gold-coffee-table.jpg'

const Testimonials = () => {
    const [testimonialIndex, setTestimonialIndex]=useState(0);
    const testimonialLen=testimonial.length;
    const item =testimonial[testimonialIndex];
    console.log("Testimonial"+item);
    const handleTestimonialSlide=(dir)=>{
   if (dir==='prev') {
    //testimonialIndex>testimonialLen-1 ? setTestimonialIndex(0) :setTestimonialIndex(testimonialIndex-1)
    setTestimonialIndex(testimonialIndex !== 0 ? testimonialIndex-1 : testimonialLen-1)
   }
   if (dir==='next') {
    //(testimonialIndex>0 && testimonialIndex< testimonialLen) ? setTestimonialIndex(testimonialIndex+1) : setTestimonialIndex(0)
    setTestimonialIndex(testimonialIndex !== testimonialLen-1 ? testimonialIndex+1 : 0)
}
   console.log("Testimonial Index"+testimonialIndex);
    }
  return (
    <section className="testimonial">
<div className="container">
<div  className="adt-left">
<h3>Testimonials</h3>
<div className="adt-left-wrapper">
<div className="adt-left arrow" onClick={()=>handleTestimonialSlide('prev')}><ArrowBackIos /></div>
<div className="adt-right arrow" onClick={()=>handleTestimonialSlide('next')}><ArrowForwardIos /></div>

<div className="adt-item">
<div className="adt-rating stars">
<Star />
<Star />
<Star />
<StarOutline />
</div>
<p>{testimonial[testimonialIndex].description}</p>
<div className="adt-user">
<h5 className="name">{testimonial[testimonialIndex].name}</h5>
<span className="line"></span>
<h5 className="post">{testimonial[testimonialIndex].post}</h5>
</div>
<Link className='review-link' to={testimonial[testimonialIndex].url}>visit the review</Link>
</div>


</div>
</div>
<div  className="adt-right"><div className="adt-img-wrapper"><img src={testimonialImg} object-fit='contain' alt=''/></div></div>
</div>
</section>
  )
}

export default Testimonials