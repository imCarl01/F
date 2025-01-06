import { useLocation } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import "./single.scss";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Single = () => {
  const location = useLocation();
  const { image, title, desc, price } = location.state;
  const [order, setOders] = useState(1)

  const increase =()=> setOders(order + 1)
  const decrease =()=> {
    if(order>1){
        setOders(order-1)
    }
  }
  return (
    <div className="singleSection">
      <Navbar />
      <div className="product">
        {/* Product Images Section */}
        <div className="images">
          <div className="thumbnailImages">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </div>
          <div className="mainImage">
            <img src={image} alt="Main Product" />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="productDetails">
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{desc}</p>


          {/* Quantity and Buttons */}
          <div className="actions">
            <div className="quantity">
              <button onClick={decrease}>-</button>
              <span>{order}</span>
              <button onClick={increase}>+</button>
            </div>
            <div className="buttons">
              <button className="addToCart">Add To Cart</button>
              <button className="compare">Compare</button>
            </div>
          </div>

          {/* Additional Details */}
          <div className="extraDetails">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Single;
