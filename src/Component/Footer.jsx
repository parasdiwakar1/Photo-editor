import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="https://i.ibb.co/RHLjm3Y/P-1-removebg-preview-1.png" alt="PhotoSnap Logo" className="logo" />
          <p>Edit, Enhance, and Create Stunning Photos with PhotoSnap</p>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#pixlr-suite">Pixlr Suite</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h4>PRODUCTS</h4>
          <ul>
            <li><a href="#pixlr-editor">Photo Editor</a></li>
            <li><a href="#pixlr-express">AI Background Remover</a></li>
            <li><a href="#batch-editor">Batch Editor</a></li>
            <li><a href="#templates">Design Templates</a></li>
            <li><a href="#filters">Photo Filters</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support Center</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#developer">API & Developers</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 PhotoSnap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
