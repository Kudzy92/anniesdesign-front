import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { Star, Visibility, ShoppingCartCheckout, Favorite, Settings, ArrowRightAlt } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import pImg from '../images/products/tulip.png'
import { toast } from 'react-hot-toast'

const ProductCard = ({ productList }) => {
  const [quantity,setQuantity]=useState(1);
  const [product,setProduct]=useState([]);
  const dispatch = useDispatch();
  const handleAddToCart=(item)=>{
    setProduct(item);
    const price =item.nowprice;
    console.log("ITEM"+product);
    dispatch(addProduct({...item,price,quantity}));
    toast.success(` ${quantity} X ${product.name} successfully added to cart.`);
    }
  return (
    <>
    {productList.length>0 ? <div className='product-card-container'>
        {productList.map((item)=>{
          const nowPriceLen=item.nowprice.length;
          const wasPriceLen=item.wasprice.length;
          const wasPrice=item.wasprice[0]+' - '+ item.wasprice[wasPriceLen-1];
        const nowPrice=item.nowprice[0]+' - '+ item.nowprice[nowPriceLen-1];
        const len=(item.sizeOptions.length-1)+(item.fabricOptions.length-1)+(nowPriceLen-1)+ (wasPriceLen-1);
        console.log("LEN"+len);
            return(
              <div key={item._id} className="product-box">
            <div className="icons">
                {len>0 ? <Link to={`/products/${item._id}`}><Settings className='icon-btn' /></Link> :<ShoppingCartCheckout className='icon-btn' onClick={()=>handleAddToCart(item)} />}
                <Favorite className='icon-btn' />
                <Link to={`/products/${item._id}`}><Visibility className='icon-btn' /></Link>
            </div>
            <div className="img">
                <img src={item.img[0]} alt=""/>
            </div>
            <div className="content">
                <div className='price-container'><span className="price was">R {wasPriceLen>1 ? wasPrice: item.nowprice[0]}</span>
               <span className="price now">R {nowPriceLen>1 ? nowPrice : item.nowprice[0]}</span></div>
                <h3>{item.name}</h3>
                <div className="stars">
                   <Star />
                   <Star />
                   <Star />
                   <Star />
                   <Star />
                </div>
            </div>
        </div>
                
            )
        })} 
    </div> : <div className='not-found-products'><p>May you kindly not that the above selected category is not yet available. Please visit the our stour to shop</p><span className='btn'>return to shop <ArrowRightAlt /></span></div>}
    </>
  )
}

export default ProductCard