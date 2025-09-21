import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & description */}
        <div className="footer-logo">
          <h2>
            <Link to="/"><span>Abdulrazak </span> Bello</Link>
          </h2>
          <p>Web Developer & Front-end Developer.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="contact-icon" /> Email: abulrazaqbello08@gmail.com</p>
          <p><FaPhone className="contact-icon" /> Phone: +234 8129 8165 99 </p>
          <p><FaMapMarkerAlt className="contact-icon" /> Address: Lagos.</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <p>© {currentYear} Abdulrazak Bello. All rights reserved.</p>
      </div>
    </footer>
  );
}
