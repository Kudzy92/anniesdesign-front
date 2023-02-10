import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { payment} from '../data/dummydata';
import {NavigateNext, Star, StarOutlined,Visibility,ArrowRightAlt , KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { toast } from 'react-hot-toast'
import { dummyProductList } from '../data/productData'


const SingleProduct = () => {
    const { id } = useParams();
    const [product,setProduct]=useState({});
    const[largeImgPreview, setLargeImgPreview]=useState('');
    //const product  = productList.find((product)=> product._id === id);
    useEffect(() =>{
        async function fetchProduct() {
             //await axios.get(`http://localhost:3001/api/products/${id}`).then((res) =>{
              //console.log("SINGLE PRODUCT"+res.data);
             // setProduct(res.data);
              //setLargeImgPreview(res.data.img?.length>0 ? res.data.img[0]: res.data.img);
              const filteredArr = dummyProductList?.filter((data) => Object.values(data)?.includes(id));
     const sproduct=filteredArr[0];
 console.log("SINGLE PRODUCT from any array"+sproduct);
       setProduct(sproduct);
       setLargeImgPreview(sproduct.img?.length>0 ? sproduct.img[0]: sproduct.img);
              console.log("Large Image"+largeImgPreview);

              //setProductLoading(false);
           
            console.log("SINGLE PRODUCT"+product);
        }
        fetchProduct()

    },[])
  
    console.log("GET ID"+id+"PRODUCT"+product+"Productname"+product.name);
    const [price,setPrice]=useState(0);
    const [isSelectedItem,setSelectedItem]=useState('');
    const [quantity,setQuantity]=useState(1);
    const [fabricPrice,setFabricPrice]=useState(0);
    const [sizePrice,setSizePrice]=useState(0);
    const [selectedSizeItem,setSelectedSizeItem]=useState('');
    const [selectedFabricItem,setSelectedFabricItem]=useState('');
    const [selectedSizeOption,setSelectedSizeOption]=useState([]);
    const [selectedFabricOption,setSelectedFabricOption]=useState([]);
    
  const dispatch = useDispatch();
    const handleSizePriceChange=(name,price)=>{
      setSelectedSizeItem(name);
      setSizePrice(price);
      const newPrice=sizePrice+fabricPrice;
      setPrice(newPrice);
      if(selectedSizeItem===''){
        setSelectedSizeOption((prev)=>[...prev, selectedSizeItem]);
      }else{
        //setSelectedSizeOption(selectedSizeOption.filter((item)=> item!=setSelectedSizeItem));
      }
      console.log("Checked Option"+selectedSizeItem);
    }
    const handleFabricPriceChange=(name,price)=>{
      setSelectedFabricItem(name);
      setFabricPrice(price);
      const newPrice=sizePrice+fabricPrice;
      if(setSizePrice>0){
        //const newPrice=sizePrice+fabricPrice;
        setPrice(newPrice);
      }else{
        setPrice(newPrice);
      }
      if(selectedFabricItem===''){
        setSelectedFabricOption((prev)=>[...prev, selectedFabricItem]);
      }else{
        //setSelectedSizeOption(selectedFabricOption.filter((item)=> item!=setSelectedFabricItem));
      }
      
      console.log("Checked Option"+selectedFabricItem);
      
    }
    
      const handleQuantity=(operation)=>{
        if(operation='minus'){
          quantity >0 ? setQuantity(quantity -1):setQuantity(quantity)
      }
      if(operation='plus'){
          setQuantity(quantity +1);
      }
      }
    /*const product=[
        {
          name:'Headboard Name',
          category:'Bedroom',
          homestatus:'',
          selectoptionstatus:0,
          rating:3,
          nowprice:[900,1200,1500,1900,2500],
          wasprice:[1000,1500,1800,2300,2900],
          viewers:51,
          description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          count:5,
          sizeOptions:[
            {name:'3/4',price: 900},
            {name:'Single',price: 1200},
            {name:'Double',price: 1400},
            {name:'Queen',price: 1800},
            {name:'King',price: 2500},
          ],
          fabricOptions:[
            {name:'senetor velvet',img:fabImg1,price: 200},
            {name:'pluto velvet',img:"/images/fabric/pluto-velvet.jpg",price: 300},
            {name:'mustag velvet',img:"/images/fabric/mustang-velvet.jpg",price: 400},
            {name:'athens velvet',img:"/images/fabric/athens-velvet.jpg",price: 1800},
            {name:'bonded leather',img:"/images/fabric/bonded-leather.jpg",price: 2500},
            {name:'president velvet',img:"/images/fabric/president-velvet.jpg",price: 2500},
          ],
          points:['Free delivery for 5km radius from our shop and order above R3 000','Deliver new order for a maximum of 10- 14 working days','Free delivery for 5km radius from our shop and order above R3 000'],
          img:['/images/products/crest-2.jpg','/images/products/crest-2.jpg','/images/products/crest-3.jpg','/images/products/crest-4.jpg'],
      },
      ];*/
      //console.log("Prices"+product.nowprice[0]+"Pricing"+product.wasprice[0]);
      const nowPriceLen=product.nowprice?.length;
      const wasPriceLen=product.wasprice?.length;
      let wasPrice=0;
      let nowPrice=0;
      if(product.wasprice?.length){wasPrice=product?.wasprice[0]+' - '+ product?.wasprice[wasPriceLen-1];}else{wasPrice=product.wasprice;}
      if(product.nowprice?.length){nowPrice=product?.nowprice[0]+' - '+ product?.nowprice[nowPriceLen-1];}else{nowPrice=product?.nowprice;}
      
    
      console.log("PRODUCT"+product+"Img1"+product.img+"prodcut img"+product.name);
    const handleAddToCart=()=>{
      console.log("Checked Option"+selectedSizeItem+'QUANTITY'+quantity);
      console.log("Checked Option"+selectedFabricItem+"PRICE"+price);
    dispatch(addProduct({...product,selectedSizeItem,selectedFabricItem,price,quantity}));
    toast.success(` ${quantity} X ${product.name} successfully added to cart.`);
    }
    const handleProductPointsItem=(name)=>{
      setSelectedItem(name);
    }
    const category= product.category;
            const [productList, setProductList ]=useState([]);
useEffect(()=>{
  const fetchProducts= async ()=>{
    //http://localhost:3001
   const {data} = await axios.get("http://localhost:3001/api/products");
   setProductList(data);
  };
  fetchProducts();
 },[]);


 
 const handleProductThumbnails=(url)=>{
  setLargeImgPreview(url);
 }
 const relatedProducts=productList.filter((product)=>product.category===category);
      return (
      <section className="ad-single-product-container">
      <div className="product-navigation">
      <Link className="link-item" to="/">Home</Link><NavigateNext />
      <Link className="link-item" to="/shop">Shop</Link><NavigateNext />
      <Link className="link-item" to={`/category/${category}`}>{category}</Link><NavigateNext />
      <span className="link-item">Shop</span>
      </div>
      
      
      <div className="ad-product-img-content-wrapper">
      <div className="ad-product-img-wrapper">
  <div className="img-wrapper-left">
 
  {product.img?.length && product.img?.length>1 ? product.img.map((item,i)=>{
   
     return(
          <div key={i}  onClick={()=>handleProductThumbnails(item)} className="img-item-wrapper">
          
          <img src={item} object-fit='contain'  alt=""/>
          </div>
        )
      }): 
      <div  className="img-item-wrapper">
          
      <img src={product.img} object-fit='contain' onClick={()=>handleProductThumbnails(product.img)} alt=""/>
      </div>
    }
  
  
  </div>
  <div className="img-wrapper-right">
  <div className="ad-lg-img-wrapper">
  
  <img id="ad_lg_img_wrapper" object-fit='contain'  src={largeImgPreview} alt=""/>
  </div>
  </div>
  </div>
  
      
      
      <div className="ad-product-content-wrapper">
      <div className="row">
      <div className="ad-product-rating">
      <div className="rating">
      <Star className='full-star'/>
      <Star className='full-star' />
      <Star className='full-star' />
      <StarOutlined className='half-star' />
      <StarOutlined className='half-star'/>
      </div>
      <div className="rating-count"><span>(1 customer review)</span></div>
      </div>
      
      <div className="ad-product-content-item">
      <h3 className="p-title">{product.name}</h3>
      </div>
      
      <div className="ad-product-content-item">
      {price===0 ? <div className="ad-p-price"><span className="was">R {wasPrice}</span><span className="now">R {nowPrice}</span></div>: <div className="ad-p-price"><span className='now'>{price}</span> </div>}
      
      </div>
      <div className="row">
      <div className="ad-product-content-item blink-viewers">
      <span className="blink-eye"><Visibility /></span>
      <p className="pple-viewing">{product.viewers} people are viewing this right now</p>
      </div>
      <div className="ad-product-content-item">
      <p className="min-des">{product.description?.length>200 ? product.description.substring(0,200)+'...': product.description}</p>
      </div>
      {product.sizeOptions?.length>0 && <div className="ad-product-content-item selected-option-container">
      <h3>Slect the product size</h3>
        <div className='option-item-container'>
      {product.sizeOptions?.map((item)=>{
        return(
          <div key={item._id} className='size option-item'>
             {console.log("ITEM NAME"+item.name)}
          <span onClick={()=>handleSizePriceChange(item.name,item.price)} className={selectedSizeItem===item.name ? 'selected-option active' :'selected-option'}></span>
          <p>{item.name}</p>
        </div>
        )
      })}
      </div>
      </div>}
      {product.fabricOptions?.length>0 && <div className="ad-product-content-item selected-option-container">
      <h3>Select the fabric</h3>
      <div className='option-item-container'>
      {product.fabricOptions?.map((item)=>{
        return(
          <div key={item._id} className='fabric option-item'>
            {console.log("ITEM NAME"+item.name)}
         <div className={selectedFabricItem===item.name ? 'img active': 'img'} onClick={()=>handleFabricPriceChange(item.name,item.price)}><img src={item.img} alt=''/></div>
          <p>{item.name}</p>
        </div>
        )
      })}
      </div>
      </div>}
     
      <div className="ad-product-content-item">
      <div className="guranteed-checkout">
      <span>Guaranteed Safe Checkout</span>
      {payment.map((item,i)=>{
        return (
      <div key={i} className="pay-gateway-item"><img src={item.img} object-fit='contain' alt="visa"/></div>
      )
      })}
      </div>
      </div>
      <div className="ad-product-content-item qty-container">
      <div className='quantity-box'>
                          <span onClick={()=> handleQuantity('minus')}>-</span>
                          <span className='number'>{quantity}</span>
                          <span onClick={()=> handleQuantity('plus')}>+</span>
                      </div>
      </div>
      <div className="ad-product-content-item btn-container">
      {product.count<1 ? <button className="out-of-stock btn">Out of stock</button>:<button className="buy-now-stock btn">Buy now</button>}
      {product.count<1 ? <button className="notify-me-when-available btn">Notify me</button>: <button className="add-to-cart btn" onClick={handleAddToCart}>add to cart</button> }
      </div>
      <div className="ad-product-content-item">
      <div className="p-terms-conditions">
       
        {product.points?.map((item,i)=>{
          return(
            <div key={i} className={isSelectedItem===item.title ? "ptc-item active" : "ptc-item"}>
              <div className='title'><h3  onClick={()=>handleProductPointsItem(item?.title)}>{item.title} </h3>{isSelectedItem===item.title ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</div>
              <div className='des-item'><ArrowRightAlt /><p>{item?.description}</p></div>
              </div>
          )
        })}
  
      </div>
      </div>
      </div>
      {/*<div className="row">
      <div className="ad-product-content-item">
      <div className="product_meta">
      <span className="sku_wrapper">SKU: <span className="sku">D1114</span></span>
      <span className="posted_in">Categories: <Link to="/" rel="tag">Bathroom</Link>, <Link to="/" rel="tag">Living Room</Link>, <Link to="/" rel="tag">Office</Link></span>
      <span className="tagged_as">Tag: <Link to="/" rel="tag">Hot</Link><Link to="/" rel="tag">special</Link></span>
      </div>
      </div>
      <div className="ad-product-content-item">
      <div className="social"></div>
      </div>
      
      </div>*/}
      </div>
      
      </div>
      </div>
      <div className='related-products'>
        <h3>Related Products </h3>
        {relatedProducts?.length >0 ? <div  className='marquee'>
          <div className='related-product-wrapper'>
        <ProductCard productList={relatedProducts} />
        </div>
        </div>: <div className='related-pinfo-wrapper'><p>Currently no related product(s)</p></div> }
      </div>
      
      </section>
  )
}

export default SingleProduct