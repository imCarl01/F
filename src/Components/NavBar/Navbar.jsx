import './NavBar.scss';
import logo from './image/Meubel House_Logos-05.png'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../../Context/CartContext';
import LoginIcon from '@mui/icons-material/Login';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cartCount} = useCart()

  const toggleMenu = () => {
    console.log('Menu Toggled')
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Nav">
      <div className="portfolio">
        <img src={logo} alt="" />
        <h1>Funiro.<span style={{ color: "#25a9df" }}></span></h1>
      </div>

      <nav className="navB">
        <li className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon/> : <MenuIcon/>}
        </li>

        {/* Navigation Links */}
        <li className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <li>Home</li>
            </Link>

            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              <li>Shop</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
              <li>Contact</li>
            </Link>

          </ul>

          <div className="icons">
              <ul>
                <Link to="/profile">
                  <li><Person2OutlinedIcon /></li>
                </Link>
             
              <Link to="/signup"><li><LoginIcon/></li></Link>
              <Link to='/cart'><li><ShoppingCartOutlinedIcon />{cartCount} </li></Link>
              </ul>
            </div>
        </li>
       

 
      </nav>
    </div>
  );
};

export default NavBar;
