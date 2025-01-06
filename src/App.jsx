import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Shop from './Pages/Shop/Shop';
import Single from './Pages/Single/Single';
import Contact from './Pages/Contact/Contact';
import { CartProvider } from './Context/CartContext';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';
import ForgetPassword from './Pages/Forgetpassword/ForgetPassword';
function App() {

  return (

    <CartProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="forgetPassword" element={<ForgetPassword/>}/>
          

          <Route path="product">
            <Route path="single" element={<Single/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
 
  )
}

export default App
