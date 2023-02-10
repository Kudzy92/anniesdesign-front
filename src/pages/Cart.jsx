import React, {useState} from 'react'
import {ShoppingCart,Close,ArrowRightAlt} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader'
import { Link } from "react-router-dom"


const Cart = () => {
    const cart= useSelector((state)=> state.cart);
    const[cartQuantity,setCartQuantity]=useState(1);
 const [orderInfo , setOrderInfo]=useState({});
    //const[seletedPage,setSelectedPage]=useState('cart');
    const dispatch=useDispatch();
      
  console.log("HEADER QTY CART"+cartQuantity);
    console.log("CART products"+cart.products);
    const data=[
      {
          icon:ShoppingCart,
          tittle:'Our Cart',
          page:'Cart',
      }
    ];
   
    const handleQuantity=(operation)=>{
     console.log("OPERATION"+operation+"CartPage"+cart.product);
    if(operation='minus'){
        cartQuantity >0 ? setCartQuantity(cartQuantity -1):setCartQuantity(cartQuantity)
    }
    if(operation='plus'){
        setCartQuantity(cartQuantity +1);
    }
    }

const handleProceedToCheckout = ()=>{
    //setSelectedPage('checkout');
}
  return (
    
  <>
  {/*<section className='section-cart-checkout'>

        <div className='top-bar'>
            <ul className='cart-nav'>
                <li><span className={seletedPage==='cart' ? 'cart-nav-link active':'cart-nav-link'} onClick={()=>setSelectedPage('cart')}>cart</span></li>
                <li><NavigateNext /><span className={seletedPage==='checkout' ? 'cart-nav-link active':'cart-nav-link'} onClick={()=>setSelectedPage('checkout')}>checkout</span></li>
                <li><NavigateNext /><span className={seletedPage==='completed' ? 'cart-nav-link active':'cart-nav-link'} onClick={()=>setSelectedPage('complete')}>complete</span></li>
            </ul>
        </div>
        <div className='bottom-bar'>
{seletedPage==='cart' && <CartPage  setSeletedPage={setSelectedPage} />}
{seletedPage==='checkout' && <Checkout  setSeletedPage={setSelectedPage} setOrderInfo={setOrderInfo} />}
{seletedPage==='completed' && <OrderComplete orderInfo={orderInfo} />}
        </div>
  </section>*/}
  <section className='ad-cart-page'>
    <PageHeader  {...data}/>
  <div className='cart-section'>
  <div className='left-cart'>
  
  {(cart.products && cart.products.length) ? <table className='cart-table'>
     <thead>
         <tr>
             <th className='cart-product-name'>Product</th>
             <th className='cart-product-price'>Price</th>
             <th className='cart-product-qty'>Quanity</th>
             <th className='cart-product-subtotal'>Subtotal</th>
             <th className='cart-product-remove'></th>
         </tr>
     </thead>
     <tbody>
     {console.log("Cart product"+cart.products)}
       {cart.products.map((item,i)=>{
      
        
         return(
             <tr key={i}>
             <td>
              <div className='cart-product-details'>
              <div className='img-container'>
                  <img src={item.img?.length>0 ? item.img[0] : item.img} object-fit='contain' alt={item.name} />
              </div>
              <div className='details'>
                  <h5>{item.name}</h5>
                  <div className='description'>
                  {item.selectedSizeItem && item.selectedSizeItem.length ? <span>{item.selectedSizeItem +" size "}</span> : ''}
                  {item.selectedFabricItem && item.selectedFabricItem.length ? <span>{item.selectedFabricItem}</span>: ''}
                  </div>
              </div>
              </div>
              </td>
              <td>{item.nowprice?.length>0 ? cart.customPrice[i] : item.nowprice}</td>
              <td>
                  <div className='quantity-box'>
                      <span onClick={()=> handleQuantity('minus')}>-</span>
                      <span className='number'>{cartQuantity}</span>  
                      <span onClick={()=> handleQuantity('plus')}>+</span>
                  </div>
              </td>
              <td>{item.nowprice?.length ? cart.customPrice[i] * item.quantity: item.nowprice*item.quantity}</td>
              <td><span className='cart-remove'><Close /></span></td>
            </tr>
         )
       })}
    


      <tr>
         <td colSpan='3'>
             <div className='cart-coupon-box'>
                 <div className='coupon-form-box'>
                     <input type='text' placeholder='coupon code' />
                     <span className='btn'>Apply coupon</span>
                 </div>
             </div>
         </td>
         <td colSpan='3'>
             <Link to='/shop'><span className='btn'>continue shopping</span></Link>
         </td>
      </tr>
     </tbody>
  </table> : 
<div className='no-cart-item'>
<p>Unfortunately no producted have being added to the cart</p>
<Link to='/shop' ><span className='btn'>return to shop <ArrowRightAlt /></span></Link>
</div>
     }
  </div>
  {(cart.products && cart.products.length) ? <div className='right-cart'>
  <div className='cart-total'>
     <div className='cart-row'><div className='title'><h3>Cart totals</h3></div></div>
     <div className='cart-row'>
         <div className='title'><h3>Cart totals</h3> </div>
         <div className='right'><span className='cart-subtotal'>{cart.total}</span></div>
     </div>
     <div className='cart-row'>
         <div className='title'><h3>Delivery</h3> </div>
         <div className='right'><div className='cart-subtotal'>choose the guy to deliver</div></div>
     </div>
     <div className='cart-row'>
         <div className='title'><h3>Total</h3> </div>
         <div className='right'><span className='cart-subtotal'>R 3 000.00</span></div>
     </div>
     <div className='cart-row'>
         <Link to='/checkout'><span className='btn' onClick={handleProceedToCheckout}>proceed to checkout</span></Link>
  </div>
   </div>
   </div>: ''}
 </div>
 </section>
 </>
  )
  
}

export default Cart