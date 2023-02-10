import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from '../components/Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Reupholstery from './Reupholstery'
import TermsAndCondition from './TermsAndCondition'
import Cart from './Cart'
import Faq from './Faq'
import SingleProduct from "./SingleProduct"
import Footer from '../components/Footer'
import Shop from "./Shop"
import Checkout from "./Checkout"
import Order from "./Order"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
       
          <Route  path='/' element={<Home/>} exact />
          <Route  path='/about' element={<About/>} />
          <Route  path='/products/:id' element={<SingleProduct/>} />
          <Route  path='/orders/:id' element={<Order/>} />
          <Route  path='/reuphostery' element={<Reupholstery/>} />
          <Route  path='/terms-and-condition' element={<TermsAndCondition/>} />
          <Route  path='/cart' element={<Cart/>} />
          <Route  path='/checkout' element={<Checkout/>} />
          <Route  path='/faq' element={<Faq/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/shop' element={<Shop/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages