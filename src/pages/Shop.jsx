import React , { useState, useEffect} from 'react'
import { category,productMaterial,productSize } from '../data/dummydata'
import { Link, useParams }  from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Store } from '@mui/icons-material'
import ProductCard from '../components/ProductCard'
import { dummyProductList } from '../data/productData'
import axios from "axios"

const Shop = () => {
     const { params } = useParams();
     const [productList, setProductList ]=useState([]);
     useEffect(()=>{
      const fetchProducts= async ()=>{
       const {data} = await axios.get("http://localhost:3001/api/products");
       setProductList(data);
      };
      fetchProducts();
     },[]);
     if(productList.length===0){
      setProductList(dummyProductList)
     }
     console.log("ProductList"+productList);
     const [sizeList, setSizeList ]=useState(productSize);
    const [selectedCat, setSelectedCat]=useState('all');
    const [layout, setLayout]=useState('list');
    const [selectedMaterial, setSelectedMaterial]=useState('all');
    const [selectedSize, setSelectedSize]=useState('all');
    const data=[
        {
            icon:Store,
            tittle:'Our Shop',
            page:'Shop',
        }
      ];
      const handleCatItem=(e)=>{
        e.preventDefault();
        const cat_name=e.currentTarget.innerHTML;
        setSelectedCat(cat_name.toLowerCase());
        setSizeList(productSize.filter((size)=>size.name.toLowerCase()===cat_name));
        console.log("SelectedCat"+selectedCat);

        setProductList(productList.filter((product)=>product.category.toLowerCase()===cat_name));
      }
      const handleMaterialItem=(e)=>{
        e.preventDefault();
        const mat_name=e.currentTarget.innerHTML;
        setSelectedMaterial(mat_name.toLowerCase());
        console.log("SelectedMaterial"+selectedMaterial)
      }
      const handleSizeItem=(e)=>{
        e.preventDefault();
        const size_name=e.currentTarget.innerHTML;
        setSelectedSize(size_name.toLowerCase());
        console.log("SelectedSize"+selectedSize);
      }
      
      
  return (
    <section className='page-container'>
<PageHeader {...data}/>
<div className='shop-section-content'>

    <div className='shop-left'>
    <div className='filter-item-wrapper'>
     <div className='filter-title'><h3>Categories</h3></div>
     <ul className='filter-content'>

      
        <li><Link  to={'#'}><span onClick={handleCatItem}  className={selectedCat==='all' ? 'cat-item active': 'cat-item' }>All</span></Link ></li>
            {category.map((item,i)=>{
                return(
                    <li key={i}><Link   to={'#'}><span onClick={handleCatItem} className={selectedCat===item.name.toLowerCase() ? 'cat-item active': 'cat-item' }>{item.name}</span></Link ></li>
                )
            })}
       
         
     </ul>
    </div>
     
    <div className='filter-item-wrapper'>
     <div className='filter-title'><h3>Product material</h3></div>
     <ul className='filter-content'>
     
        <li><Link  to={'#'}><span onClick={handleMaterialItem}  className={selectedMaterial==='all' ? 'material-item active': 'material-item' }>All</span></Link ></li>
        {productMaterial.map((item,i)=>{
                return(
          <li  key={i}><Link   to={'#'}><img src={item.img} alt={item.name} /><span onClick={handleMaterialItem} className={selectedMaterial===item.name.toLowerCase() ? 'material-item active': 'material-item' }>{item.name}</span></Link ></li>
                )})}
       </ul>
    </div>

    <div className='filter-item-wrapper'>
     <div className='filter-title'><h3>Product Size</h3></div>
     <ul className='filter-content'>
     
        <li><Link  to={'#'}><span onClick={handleSizeItem}  className={selectedSize==='all' ? 'selected-option active': 'selected-option' }>All</span></Link ></li>
        {sizeList.map((item,i)=>{
                return(
          <li  key={i}><Link   to={'#'}><span onClick={handleSizeItem} className={selectedSize===item.name.toLowerCase() ? 'selected-option active': 'selected-option' }>{item.name}</span></Link ></li>
                )})}
       </ul>
    </div>

    </div>
    <div className='shop-right'>
        <div className='filter-product-right-container'>

        </div>
        <div className='shop-products-container'>
           {layout==='list' && <div className='shop-product-list-container'>
           <ProductCard productList={productList} />
           </div>}
           {layout==='grid' && <div className='shop-product-grid-container'>
           <ProductCard productList={productList} />
           </div>}
        </div>
        </div>
    </div>
    </section>
  )
}

export default Shop