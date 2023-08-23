import "./footer.scss";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">VIJAY KARTHIK</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vijay-karthik"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://github.com/vijaykarthikpro"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://twitter.com/vijay_karthik_b"><FontAwesomeIcon icon={faTwitter}/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; vijaykarthikbethapudi. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;
