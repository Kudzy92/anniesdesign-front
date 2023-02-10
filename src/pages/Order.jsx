import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Shop2, ArrowRightAlt } from '@mui/icons-material'
import axios from 'axios'

const Order = () => {
    const { id } = useParams();
    
    const [order,setOrder]=useState({});
    const data=[
        {
            icon:Shop2,
            tittle:'Order Status',
            page:'Order Status',
        }
      ];
      useEffect(() =>{
        async function fetchOrder() {
            console.log("USEPARAMS ID inside"+id);
             await axios.get(`http://localhost:3001/api/orders/${id}`).then((res) =>{
              console.log("SINGLE ORDER"+res.data);
              setOrder(res.data);
            })
        }
        fetchOrder()

    },[])
  return (
    <section>
<PageHeader {...data} />
<div className='order-complete'>
        {order !== null ? <><div className='order-msg-feedback'>
            <p>Thank you for placing an order from our shop</p>
        </div>
        <div className='order-details order-info-one'>
           <div className='of-info-box'>
            <p>Order number</p>
            <h3>{order.orderid}</h3>
           </div>
           <div className='of-info-box'>
            <p>Place Date</p>
            <h3>Wed, 21 Dec 2022</h3>
           </div>
           <div className='of-info-box'>
            <p>Order Total</p>
            <h3>R {order.price+order.deliverycharge}</h3>
           </div>
           <div className='of-info-box'>
            <p>Payment method</p>
            <h3>{order.paymethod}</h3>
           </div>
        </div>
        <div className='order-product-details order-info-one'>
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
        </>: <div className='not-found-products'><p>Please note that no such order is valia ble in our database. Please visit the our store to create new order.</p><span className='btn'>return to shop <ArrowRightAlt /></span></div>}
    </div>

    </section>
  )
}

export default Order