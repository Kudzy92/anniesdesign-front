import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { dummyProductList } from '../data/productData'
import ProductCard from './ProductCard'
//{productList}
const HomeShop = () => {
  
  

  const [productList, setProductList ]=useState([]);
useEffect(()=>{
  const fetchProducts= async ()=>{
    //http://localhost:3001
   const {data} = await axios.get("http://localhost:3001/api/products");
   setProductList(data);
  };
  fetchProducts();
 },[]);
  
 if(productList.length===0){
  setProductList(dummyProductList)
 }
 console.log("ProductList"+productList);
 
  const [productStatus, setProductStatus]=useState('featured');
 const selectedProducts=productList.filter((product)=>product.homestatus===productStatus);
 const selectedProductFeatured=productList.filter((product)=>product.homestatus==='featured');
 const selectedProductSpecial=productList.filter((product)=>product.homestatus==='special');
 const selectedProductArrival=productList.filter((product)=>product.homestatus==='arrival');
 const selectedProductTopselling=productList.filter((product)=>product.homestatus==='topselling');

 const pCount=selectedProducts.length;
 const pCountFeatured=selectedProductFeatured.length;
 const pCountSpecial=selectedProductSpecial.length;
 const pCountArrival=selectedProductArrival.length;
 const pCountTopselling=selectedProductTopselling.length;
  return (
    <section className='home-shop'>
      
      <div className='filter-container'>
        <ul>
          <li><span onClick={()=> setProductStatus('featured')} className={productStatus==='featured' ? 'filter-nav-btn active':'filter-nav-btn'}>Featured {pCountFeatured}</span></li>
          <li><span onClick={()=> setProductStatus('special')} className={productStatus==='special' ? 'filter-nav-btn active':'filter-nav-btn'}>Special {pCountSpecial}</span></li>
          <li><span onClick={()=> setProductStatus('arrival')} className={productStatus==='arrival' ? 'filter-nav-btn active':'filter-nav-btn'}>Arrival {pCountArrival}</span></li>
          <li><span onClick={()=> setProductStatus('topselling')} className={productStatus==='topselling' ? 'filter-nav-btn active':'filter-nav-btn'}>Top selling {pCountTopselling}</span></li>
        </ul>
      </div>
<ProductCard productList={selectedProducts} />
    </section>
    
  )
}

export default HomeShop