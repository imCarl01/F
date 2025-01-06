import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      
      <div className="footer-brand">
        <h2>Funiro.</h2>
        <address>
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </address>
      </div>
  
      
      <div className="footer-links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
  
      
      <div className="footer-help">
        <h3>Help</h3>
        <ul>
          <li><a href="#">Payment Options</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policies</a></li>
        </ul>
      </div>
  
      
      <div className="footer-newsletter">
        <h3>Newsletter</h3>
        <form>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>2023 Funiro. All rights reserved</p>
    </div>
  </footer>
  
  )
}

export default Footer