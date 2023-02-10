import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowRightAlt} from '@mui/icons-material';

const NotFound = () => {
  return (
    <section className="page-not-found">
    <div className="page-not-found-content">
        <h1>404</h1>
        <h3>Oops! That page can't be found.</h3>
        <p>We're really sorry but we can't seem to find the page you were looking for.</p>
         <Link to='/'><span className='btn'>return back to home <ArrowRightAlt /></span></Link>
    </div>
</section>
  )
}

export default NotFound