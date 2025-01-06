import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import  "./Cart.scss"

const Cart = () => {
    const { cartItem } = useCart();

    const totalPayout = cartItem.reduce(
        (total, item) => total + item.Price * item.quantity,
        0
      );
    return (
      <div className='cart-container'>
      <header>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </header>
      <h1>Cart</h1>
      {cartItem.length === 0 ? (
        <p className='empty-cart'>Your cart is empty</p>
      ) : (
        <div className='cart-items'>
          {cartItem.map((item) => (
            <div className='cart-item'key={item.id}>
              <img src={item.image} alt={item.Title} />
              <div className='details'>
            <h2>{item.Title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.quantity * item.Price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2 className='total-payout'>
        Total Payout: ${totalPayout.toFixed(2)}
      </h2>
    </div>

       
      );
    };

export default Cart