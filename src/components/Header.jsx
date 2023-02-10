import React, {useState} from 'react'
import {LogoDev,ShoppingCartCheckout, MenuOpen,Close} from '@mui/icons-material';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [selectedPage, setSelectedPage] = useState('home');
  const quantity = useSelector(state=> state.cart.quantity);
  console.log("HEADER QTY"+quantity);
  return (
    
    <header className='header'>
      <div className='container'>
      <div className='ad-logo'>
        <div className='logo-icon'><LogoDev /></div>
        <div className='logo-content'>
          <h3>annie's <span>Design</span></h3>
          <p><span>home of</span> modern furniture</p>
        </div>
      </div>
       <div className={responsive ? "mobile-ad-navigation": 'lg-ad-navigation'}>
        <div className='nav-wrapper'>
        <span className='close-btn' onClick={()=>setResponsive(!responsive)}>{responsive  ? <Close /> : '' }</span>
       <ul>
        <li><Link to='/' className={selectedPage==='home' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('home')}>Home</Link></li>
        <li><Link to='/about'  className={selectedPage==='about' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('about')}>about</Link></li>
        <li><Link to='/shop'  className={selectedPage==='shop' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('shop')}>shop</Link></li>
        <li><Link to='/trackorder'  className={selectedPage==='trackorder' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('trackorder')}>track order</Link></li>
        <li><Link to='/faq'  className={selectedPage==='faq' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('faq')}>faq</Link></li>
        <li><Link to='/reuphostery'  className={selectedPage==='reuphostery' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('reuphostery')}>reuphostery</Link></li>
        <li><Link to='/contact'  className={selectedPage==='contact' ? 'nav-link active': 'nav-link' } onClick={()=>setSelectedPage('contact')}>contact</Link></li>
       </ul>
       </div>
       </div>
       <div className='header-action-btn'>
       <Link to='/cart'>
       <div className='ad-cart-btn'>
        <ShoppingCartCheckout />
        <span className='ad-cart-count'>{quantity}</span>
       </div>
       </Link>
        <div className='nav-menu-btn' onClick={()=>setResponsive(!responsive)}><MenuOpen /></div>
        </div>
      </div>
    </header>
  )
}

export default Header