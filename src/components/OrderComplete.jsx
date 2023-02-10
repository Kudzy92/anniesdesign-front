import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

const OrderComplete = ({ orderInfo }) => {
    const cart= useSelector((state)=> state.cart);
  return (
    <div className='order-complete'>
        <div className='order-msg-feedback'>
            <p>Thank you for placing an order from our shop</p>
        </div>
        <div className='order-info-one'>
           <div className='of-info-box'>
            <p>Order number</p>
            <h3>#20221221AD240</h3>
           </div>
           <div className='of-info-box'>
            <p>Place Date</p>
            <h3>Wed, 21 Dec 2022</h3>
           </div>
           <div className='of-info-box'>
            <p>Order Total</p>
            <h3>R23 349.90</h3>
           </div>
           <div className='of-info-box'>
            <p>Payment method</p>
            <h3>Cash on delivery</h3>
           </div>
        </div>
        <div className='order-info-one'>
            <div className='title'><h3>Order details</h3></div>
            
            <table>
             <thead>
                <tr>
                   <th>Product</th>
                <th>Totals</th> 
                </tr>
                
             </thead>
             <tbody>
                <tr>
                    <td>Product name x 5</td>
                    <td>R 3 540.00</td>
                </tr>
                <tr>
                    <td>Product name x 5</td>
                    <td>R 3 540.00</td>
                </tr>
                <tr>
                    <td>Product name x 5</td>
                    <td>R 3 540.00</td>
                </tr>
                <tr>
                    <td>Product name x 5</td>
                    <td>R 3 540.00</td>
                </tr>
                <tr>
                    <td>Product name x 5</td>
                    <td>R 3 540.00</td>
                </tr>

                <tr>
                    <td>Subtotal</td>
                    <td>R 3 540.00</td>
                </tr>
                <tr>
                    <td>Delivery</td>
                    <td>R 540.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>R 4 540.00</td>
                </tr>
             </tbody>
            </table>
        </div>
    </div>
  )
}
export const getServerSideProps = async ({ params })=>{
    const res=await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: {order:res.data}
    }
}
export default OrderComplete