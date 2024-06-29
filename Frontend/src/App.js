
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop.js'
import ShopCategory from './Pages/ShopCategory.js'
import Product from './Pages/Product.js'
import Cart from './Pages/Cart.js'                   
import Login from './Pages/Login.js'                   
import Footer from './Components/Footer/Footer.js';
import menBanner from './Assets/banner_mens.png'
import womenBanner from './Assets/banner_women.png'
import kidsBanner from './Assets/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory  banner ={menBanner} category="men" />} />
          <Route path='/womens' element={<ShopCategory  banner ={womenBanner}category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner ={kidsBanner} category="kid" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />}>

            </Route>

          </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
