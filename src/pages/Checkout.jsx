import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ShoppingBag } from '@mui/icons-material'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/cartSlice'
import PageHeader from '../components/PageHeader'

const Checkout = () => {
    const navigate= useNavigate();
  const dataInfo=[
    {
        icon:ShoppingBag,
        tittle:'Our Checkout',
        page:'Checkout',
    }
  ];
  const dispatch=useDispatch();
  const cart= useSelector((state)=> state.cart);
  const [paymethod,setPaymethod] =useState('eft');
  const [productDetails,setProductDetails]=useState([]);
  const [fullname,setFullName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [houseaddress,setHouseAddress]=useState('');
  const [roomnumber,setRoomNumber]=useState('');
  const [msg,setMsg]=useState('');
  const [customerOrderDetails, setCustomerOrderDetails]=useState({});
  const [data, setData]=useState({});

  function  generateOrderId(){
 let newDate=new Date();
 let date_raw=newDate.getDate();
 let month_raw=newDate.getMonth()+1;
 let year_raw=newDate.getFullYear();
 var day,month,code,orderid='';
 if(date_raw<10){
    day="0"+date_raw.toString();
 }else{
  day=date_raw.toString();
 }
 if(month_raw<10){
  month="0"+month_raw.toString();
}else{
month=month_raw.toString();
}
let rand_code=Math.random()*50;
if(rand_code<10){
  code="0"+rand_code.toFixed().toString();
}else{
code=rand_code.toFixed().toString();
}
orderid="AD"+year_raw+month+day+"NEW"+code;
      return orderid;
  }
  let pDetails=[];
  const pd={
      pid:"Barcaf54454blackHeardboard",
      size:"Queen",
      material:"Pluto velvet",
      price:'3400',
      qty:5,
      
  }
  pDetails.push(pd);
  let pdStr='ghhdhfgdhhdhg';
  const handleSaveCheckout = async()=>{
      const address=" ,Room "+roomnumber+" "+houseaddress,
       orderid=generateOrderId(),
      deliverycharge=500,
         transporter='FM Forget',
        price=cart.total,
        quantity=cart.quantity;
        let pid='',size='',material,qty_des='',price_total=0,cart_price=0;
        cart.products?.map((item,i)=>{
          pid=item._id;
          size =item.selectedSizeItem && item.selectedSizeItem.length ?   item.selectedSizeItem : '';
          material=item.selectedFabricItem && item.selectedFabricItem.length ? item.selectedFabricItem: '';
          cart_price=item.nowprice?.length>0 ? cart.customPrice[i] : item.nowprice;
         
          price_total=item.nowprice?.length ? cart.customPrice[i] * item.quantity: item.nowprice*item.quantity;
          qty_des=item.quantity+' X '+ cart_price+"="+price_total;
          pdStr+=pid+"-"+material+"-"+"-"+qty_des+"-";
          console.log("Data object pid"+pid+"-material"+material+"-cart price"+cart_price+"-qty des"+qty_des+"-price total"+price_total)
          const pd={
            pid:pid,
            size:size,
            material:material,
            price:cart_price,
            qty:item.quantity,
          }
          pDetails.push(pd);
         //setProductDetails(oldArray => [...oldArray,pd]);
        });
        
     console.log("Save Checkout"+fullname+phone+email+address+msg+paymethod+pdStr+"Order ID"+orderid+"  pDetails"+pDetails);
     // setSelectedPage('completed');
      
      setCustomerOrderDetails({
          orderid:orderid,
          fullname:fullname,
          phone:phone,
          email:email,
          msg:msg,
          paymethod:paymethod
      });
  const order={
      orderid,
        fullname,
         phone,
        email,
           address,
         msg,
        paymethod,
          deliverycharge,
        transporter,
        pDetails,
        price,
        quantity,
  }
      /*setOrderInfo({
          customer:customerOrderDetails,
      });*/
      setData({
          customer:customerOrderDetails,
          cart:cart,
      });
     
              try {
                  const res = await axios("http://localhost:3001/api/orders/save",{
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(order)}).then(res => {
                      console.log(res);
                      console.log(res.data);
                      console.log("res.status"+res.status);
                      if (res.status === 201) {
                         dispatch(reset());
                        navigate(`/orders/${res.data._id}`);
                      }
                      });
                     
                } catch (err) {
                  console.log(err);
                }
          
     
  }
  return (
    <section className='ad-checkout'>
      <PageHeader {...dataInfo} />
      <div className='checkout-section'>
    <div className='checkout-left'>
       <div className='checkout-row'>
        <h3 className='title'>Billing details</h3>
       </div>

       <div className='checkout-row'>
       <div className="form-container">
        <span>your full name</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"  
        className="box" 
        onChange={(e)=>setFullName(e.target.value)}
        />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className="form-container">
        <span>your phone number</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text" 
         className="box"
         onChange={(e)=>setPhone(e.target.value)}
         />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className="form-container">
        <span>your email address</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="email"  
        className="box"
        onChange={(e)=>setEmail(e.target.value)}
        />
		</div>
		</div>
       </div>

      

       <div className='checkout-row'>
       <div className="form-container">
        <span>your street address</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"
         placeholder='House number and street name' 
         className="box" 
         onChange={(e)=>setHouseAddress(e.target.value)}
         />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className="form-container">
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"
        placeholder='Apartment, suite, unit, etc.' 
        className="box"
        onChange={(e)=>setRoomNumber(e.target.value)}
        />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className="form-container">
        <span>your message</span>
		<div className="textarea form-control isvalid">
		
        <textarea   
        className="box" 
        onChange={(e)=>setMsg(e.target.value)}
        rows='5'
        />
		</div>
		</div>
       </div>


    </div>
    <div className='checkout-right'>
        <div className='box-item'>
            <div className='box-item-row'><h3 className='title'>Selected Products</h3></div>
            
            {cart.products?.map((item,i)=>{
                return(
                    <div key={i} className='box-item-row'>
                    <div className='checkout-product'>
                    <div className='cp-left'>
                      <div className='img-box'><img src={item.img?.length>0 ? item.img[0]: item.img} alt='' object-fit='content'/></div>
                    <div className='cp-details'>
                        <h3>{item.name}</h3>
                        {item.selectedSizeItem && item.selectedSizeItem.length ? <span>{item.selectedSizeItem +" size "}</span> : ''}
                         {item.selectedFabricItem && item.selectedFabricItem.length ? <span>{item.selectedFabricItem}</span>: ''}
                        <span className='qty'> {item.quantity+' X '+ (item.nowprice?.length>0 ? cart.customPrice[i] : item.nowprice)}</span>
                    </div>
                    </div>
                        <div className='cp-right'>
                        <span>{item.nowprice?.length ? cart.customPrice[i] * item.quantity: item.nowprice*item.quantity}</span>
                        </div>
                    </div>
                </div>
                )
            })}
            



            <div className='box-item-row'>
                <h3 className='total'>Subtotal</h3>
                <span className='total'>R {cart.total}</span>
            </div>
            <div className='box-item-row'>
                <h3 className='total'>Delivery</h3>
                <span className='total'>R 5 00.00</span>
            </div>
            <div className='box-item-row'>
                <h3 className='total'>Total</h3>
                <span className='total'>R 5 000.00</span>
            </div>

        </div>
        <div className='box-item pay-method'>
        <div className='box-item-row'><h3 className='title'>Choose payment method</h3></div>
        
        <div className='box-item-row'>
            <span className={paymethod==='eft'?'selected-option active':'selected-option'} onClick={()=>setPaymethod('eft')}>Direct bank transfer</span>
            {paymethod==='eft' ? <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be deliverd until the funds have cleared in our account.</p> : ''}
        </div>
        
        <div className='box-item-row'>
            <span className={paymethod==='cash'?'selected-option active':'selected-option'} onClick={()=>setPaymethod('cash')}>Cash on delivery</span>
            {paymethod==='cash' ? <p>Pay with cash upon delivery.</p>: ''}
        </div>

        <div className='box-item-row'>
            <span className={paymethod==='payfast'?'selected-option active':'selected-option'} onClick={()=>setPaymethod('payfast')}>Pay via payfast</span>
            {paymethod==='payfast' ? <p>Kindly use payfast as the payment gateway</p>: ''}
        </div>

        <div className='box-item-row'>
            <span className={paymethod==='peach'?'selected-option active':'selected-option'} onClick={()=>setPaymethod('peach')}>Pay via peach payments</span>
            {paymethod==='peach' ? <p>Kindly use payfast as the payment gateway.</p>: ''}
        </div>

        </div>
        <div className='box-item'>
            <div className='box-item-row'>
                <Link href={paymethod==='payfast' ? 'https://www.payfast.co.za/anniesdesign' :''}>
                    <span className='btn' onClick={handleSaveCheckout}>
                    {paymethod==='eft' ? 'Place order' : ''}
                    {paymethod==='cash' ? 'Place order' : ''}
                    {paymethod==='payfast' ? 'Proceed to payfast' : ''}
                    {paymethod==='peach' ? 'Proceed to peach' : ''}
                </span></Link>
            </div>
        </div>
    </div>
  </div>
    </section>
  )
}

export default Checkout