import {useState} from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }
  return (
    <div className='navbar'>
      <i className="open-menu fa-solid fa-bars fa-xl" onClick={toggleMenu}></i>
        <div className="navbar-text">
            <h1><span>A</span>rin.</h1>
            <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
              <ul>
                    <li><AnchorLink href='#'>Home</AnchorLink></li>
                    <li><AnchorLink href='#about'>About</AnchorLink></li>
                    <li><AnchorLink href='#projects'>Projects</AnchorLink></li>
                    <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
                    <div className="social-links">
        <a href="https://www.instagram.com/arin.gawande?igsh=bnhsOGo0cXNqNjNq"><i className="fa-brands fa-instagram fa-2xl"></i></a>
        <a href='https://www.linkedin.com/in/arin-gawande-134182316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
        <a href='https://youtube.com/@aringawande?si=-yQ85RxaSvC6e7Uj'><i className="fa-brands fa-youtube fa-2xl"></i></a>
        </div>
                </ul>


            </div>
        </div>

        <div className="navbar-button">
            <AnchorLink href='#contact'><button>Let's Talk</button></AnchorLink>
        </div>
        
    </div>
  )
}

export default Navbar