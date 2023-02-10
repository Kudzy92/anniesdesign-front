import React from 'react'
import { category } from '../data/dummydata'
import { Link } from "react-router-dom"

const Category = () => {
  return (
    <section className="ad-category">
    <div className="container">
    <div className="ad-category-heading">
          <h2 className="title">Best Modern Home Furniture Category</h2>
     <span className="line"></span>			
    </div>
    <div className="ad-category-content">
{category.map((item,i)=>{
  return(
    <div key={i} className="ad-cat-item">
<div className="content-image">
<Link to="#">
<img   src={item.img} object-fit="cover" alt="Image Slider"/>
</Link>
</div>
<h2 className="ad-cat-badge">{item.name}</h2>
</div>
  )
})}

    </div>
</div>
</section>
  )
}

export default Category