import Navbar from '../../Components/NavBar/Navbar'
import './Contact.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (
    <div className='contactInformation'>
        <Navbar/>
        <div className="heroImage">
            <div className="title">
                <h1>Contact</h1>
            </div>
        </div>
        <div className="getInTouch">
          <h1>Get In Touch With Us</h1>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="holder">
        <form action="" className="theForm">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Abc' className='input1' />

            <label htmlFor="">Email address</label>
            <input type="email" placeholder='abc@email.com' className='input1' />

            <label htmlFor="">Subject</label>
            <input type="text" placeholder='this is opetional' className='input1'/>

            <label htmlFor="">Message</label>
            <input type="text" placeholder="Hi i'll like to ask about" className='input2'/>

            <button>Submit</button>
          </form>
          {/* form */}
     
          <div className="holder1">

<div className="address">
  <LocationOnOutlinedIcon className='icon'/>
  <div className="add">
    <h2>Address</h2>
    <p>236 5th SE Avenue, New <br />York NY10000, United <br />States</p>
  </div>
</div>

<div className="address">
  <LocalPhoneOutlinedIcon className='icon'/>
  <div className="add">
    <h2>Phone</h2>
    <p>Mobile: +(84) 546-6789 <br />
    Hotline: +(84) 456-6789</p>
  </div>
</div>

<div className="address">
  <WatchLaterOutlinedIcon className='icon'/>
  <div className="add">
    <h2>Working Time</h2>
    <p>Monday-Friday: 9:00 - 22:00 <br />
    Saturday-Sunday: 9:00 - 21:00</p>
  </div>
</div>


</div>
        </div>

        <div className="frame">
            <div className="highQuality">
                <EmojiEventsOutlinedIcon className='icon'/>
                <div className='det'>
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
                </div>
                
            </div>

            <div className="highQuality">
                <GppGoodOutlinedIcon className='icon'/>
                <div className='det'>
                <h3>Warranty Protection</h3>
                <p>over 2 years</p>
                </div>
              
            </div>

            
            <div className="highQuality">
                <LocalShippingOutlinedIcon className='icon'/>
                <div className='det'>
                <h3>Free Shipping</h3>
                <p>order over $150</p>
                </div>
                
            </div>

            <div className="highQuality">
                <SupportAgentOutlinedIcon className='icon'/>
                <div className='det'>
                <h3>24 / 7 Support</h3>
                <p>Dedicated support</p>
                </div>
                
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Contact