import React, { useState, useRef } from 'react'
import PageHeader from '../components/PageHeader'
import { Help, Close } from '@mui/icons-material'
import { toast } from 'react-hot-toast'
import img1 from '../images/products/crest-1.jpg'
import axios from 'axios'
import emailjs  from '@emailjs/browser';




const Reupholstery = () => {
  const form =useRef();
  const [fullname, setFullName]=useState('');
const [phone, setPhone]=useState('');
const [email, setEmail]=useState('');
const [address, setAddress]=useState('');
const [message, setMessage]=useState('');
const reply_amount=0, reply_msg=0;
const [imagesArray, setImagesArray]=useState([]);
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
orderid="AD"+year_raw+month+day+"REU"+code;
       return orderid;
   }
const data=[
  {
      icon:Help,
      tittle:'Furniture reuphostery & repairs',
      page:'Furniture reuphostery & repairs',
  }
];
  const handleDeleteReeupImg=(id)=>{
    toast.error('Image sucessfully deleted !');
  }
  
  let imagesStr='';
   if(imagesArray.length>0){
    imagesArray.map((item)=>{
      return imagesStr+=item+',';
    })
   }
   console.log("imagesArray"+imagesArray.length+"ImagesStr"+imagesStr);
  const handleSubmitReuphostery= async ()=>{
    const orderid=generateOrderId();
    const reuphostery={
      orderid,
        fullname,
         phone,
        email,
           address,
         message,
         imagesArray,
          reply_amount,
          reply_msg,
  }
    try {
     await axios.post("/api/reuphostery/save", reuphostery).then(res => {
          console.log(res);
          console.log(res.data);
          if (res.status === 201) {
            toast.success("Details sucessfully submitted");
            sendEmail();
          }
         
          });
          //const {data} = await axios.get("/api/reuphostery");
   ///setReuphosteryList(data);
     
    } catch (err) {
      console.log(err);
    } 
  }
  const sendEmail =()=>{
    emailjs.sendForm(process.env.EMAIL_SERVICE_ID,process.env.EMAIL_REUPHOSTERY_TEMPLATE_ID,
      form.current,process.env.EMAIL_PUBLIC_KEY).then((result) => {
               console.log(result.text);
               toast.success("Email sucessfully sent");
           }, (error) => {
               console.log(error.text);
               toast.error("Email unsucessfully sent");
           });
  }
 const handleFileUpload= async (e)=>{
  if(e.target.files && e.target.files[0]){
   const data= new FormData();
   data.append('file',e.target.files[0]);
   data.append('upload_preset','div6jhzn');
   data.append("api_key", '461439183556933');
    data.append("cloud_name", 'dmx8izzoq');
    //formData.append("signature", signature);
    //formData.append("timestamp", timestamp);
   let data_url='';
   try {
    
  await axios.post(`https://api.cloudinary.com/v1_1/dmx8izzoq/image/upload`,data).then((response)=>{
    data_url= response.data['secure_url'];
    console.log("Images upload sucessfully"+data_url);
    setImagesArray((prev)=> [...prev,data_url]);
  })
   } catch (error) {
    console.log("Error upload"+error);
    
   }
  }
 }
  return (
    <section className='page-container'>
<PageHeader {...data}/>
<div className='section-content'>
    <div className='reupholstery-content-wrapper'>
    <div className='details-reupholstery-box reupholstery-box-row'>
        <h3 className='title'>Customer details</h3>
        <form ref={form}>
       <div className='reup-row'>
        
       <div className="form-container">
        <span>your full name</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"  
        className="box" 
        name='fullname'
        onChange={(e)=>setFullName(e.target.value)}
        />
		</div>
		</div>

       </div>
       <div className='reup-row'>
        
       <div className="form-container">
        <span>your phone</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"  
        className="box" 
        name='phone'
        onChange={(e)=>setPhone(e.target.value)}
        />
		</div>
		</div>

    <div className="form-container">
        <span>your email</span>
		<div className="form-control isvalid">
		<span className="required">*</span>
        <input 
        type="text"  
        className="box" 
        name='email'
        onChange={(e)=>setEmail(e.target.value)}
        />
		</div>
		</div>

       </div>
       <div className='reup-row'>
       <div className="form-container">
        <span>your address</span>
		<div className="form-control isvalid">
		 <input 
        type="text"  
        className="box" 
        name='address'
        onChange={(e)=>setAddress(e.target.value)}
        />
		</div>
		</div>
       </div>
       <div className='reup-row'>
       <div className="form-container">
        <span>your message</span>
		<div className="textarea form-control isvalid">
		
        <textarea   
        className="box" 
        rows='5'
        name='message'
        onChange={(e)=>setMessage(e.target.value)}
        />
		</div>
		</div>
       </div>
       </form>

       </div>
       <div className='upload-reuphostery-img-wrapper reupholstery-box-row'>
       <h3 className='title'>Furniture details</h3>
       <div className='top-upload'>
       <div className='reup-row'>
       <div className='upload-container'>
        <span> Choose Image</span>
        <input type='file' className='upload-file-input' onChange={handleFileUpload}/>
        </div>
        </div>
        </div>
        <div className='bottom-upload'>
        <div className='reup-row'>
        {imagesArray?.map((item,i)=>{
          return(
            <div key={i} className='preview-uploaded-item'>
        <span className='delete-reuph-img' onClick={()=>handleDeleteReeupImg(item)}><Close /></span>
        <img src={item} alt='reupholstery img'/>
       </div>
          )
        })}
       <div className='preview-uploaded-item'>
        <span className='delete-reuph-img' onClick={()=>handleDeleteReeupImg(1)}><Close /></span>
        <img src={img1} alt='reupholstery img'/>
       </div>
       <div className='preview-uploaded-item'>
        <img src={img1}alt='reupholstery img'/>
       </div>
       <div className='preview-uploaded-item'>
        <img src={img1} alt='reupholstery img'/>
       </div>

        </div>
        </div>

       </div>

      



  </div>
  <div className='reup-btn-container'>
        <span className='btn' onClick={handleSubmitReuphostery}>Submit the reupholstery details</span>
        </div>
  </div>
  </section>
  )
}

export default Reupholstery
