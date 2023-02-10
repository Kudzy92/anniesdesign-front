import React from 'react'
import {NavigateNext} from '@mui/icons-material';
import { Link } from "react-router-dom"

const PageHeader = (props) => {
    console.log("PageHeader Props"+props[0].tittle);
    const item=props[0];
  return (
    <div className='page-header'>

   
        <div className='container'>
     <div className='page-icon'><item.icon /></div>
     <div className="page-navigation"> <Link to='/'>home</Link> <NavigateNext /> <span>{item.page?.length>0 ? item.page :item.tittle}</span> </div>
     <div className='page-tittle'>
        <h3>{item.tittle}</h3>
     </div>
     </div>
    </div>
  )
}

export default PageHeader