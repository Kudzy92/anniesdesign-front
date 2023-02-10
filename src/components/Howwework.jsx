import React from 'react'
import { howwework } from '../data/dummydata'

const Howwework = () => {
  return (
    <section className="how-we-work-inshort">
<div className="container">
{howwework.map((item,i)=>{
    return(
        <div key={i} className="hwwis-item">
<div className="hwwis-icon"><item.icon/></div>
<div className="hwwis-info">
<h3>{item.tittle}</h3>
<p>{item.description}</p>
</div>
</div>
    )
})}
    </div>
    </section>
  )
}

export default Howwework