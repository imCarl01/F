import Navbar from '../../Components/NavBar/Navbar'
import './Home.scss'
import { Link } from 'react-router-dom'
import img1 from './image/Image-living room.png'
import img2 from './image/Mask Group-1.png'
import img3 from './image/Mask Group.png'
import groupImage from './image/grouped.png'
import Card from '../../Components/Card/Card'

import Footer from '../../Components/Footer/Footer'



const Home = () => {

  return (
    <div className='homeMenu'>
      <Navbar/>
      <div className="heroSection">
        <div className="secondContainer">
          <div className="newArrival">
            <div className="new">
              <p>New Arrival</p>
            </div>
            
            <div className="discover">
              <h1>Discover Our New Collection</h1>
            </div>
            <div className="message">
             Personalized Recommendations, and Early Access to New Arrivals!
            </div>

            <div className='button'>
              <Link>
               <p>Buy Now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="browes">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="filter">
        <div className="room">
            <img src={img1} alt="" />
            <h3>Bedrooms</h3>
        </div>
        <div className="room">
         <img src={img2} alt="" />
         <h3>Living</h3>
        </div>
        <div className="room">
        <img src={img3} alt="" />
        <h3>Dinning</h3>
        </div>
        
      </div>

      <div className="ourProduct">
        <h1>Our Products</h1>
    
          <div className="product">

              <Card/>
              
          </div>
      </div>

      

      <div className="shareSetup">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <div className="ima">
          <img src={groupImage} alt="" />
        </div>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Home