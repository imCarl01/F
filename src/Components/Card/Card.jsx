import { useState } from 'react';
import './Card.scss'
import Details from '../productdetails/ProductDetails';
import { useCart } from '../../Context/CartContext';

const Card = () => {
  const {addToCart} = useCart()

  console.log(Details)

  return (
    <div className="cardss">
      {
          Details.map((product)=>(
            <div className="picture" key={product.id}>
              <img src={product.image} alt={product.Title} />
              <div className="tile">
                <div className="info">
                    <p className='title'>{product.Title}</p>
                    <p className='date'>{product.description}</p>
                    <p className='event'>${product.Price}</p>
                </div>
                <div className="addtocart">
                  <button onClick={() => addToCart(product)} >Add to cart</button>
                </div>
            </div>
            
            </div>
          ))
      }
    </div>
  )
}

export default Card