import {useEffect} from 'react'
import './Home.css'
import AOS from 'aos';
import TypedComponent from './Typed.js'; // adjust the path as necessary
import 'aos/dist/aos.css';  // Import the AOS styles
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Set the duration of the animation (in ms)
          once: true,     // Whether the animation should happen only once - while scrolling down
          easing: 'ease-in-out',
        });
      }, []);

      
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

    <div className='home'>
      <div className="home-text" data-aos='fade-up' delay='100'>
        <h1>Hi, I'm</h1>
        <h1><span>Arin Gawande</span></h1>
        <h2><TypedComponent/></h2>
        <span id="element"></span>
        <p>I'm a passionate <span>front-end developer</span>. I'm dedicated to honing my akills in creating visually appealing user interfaces. My journey in web development has fueled my curiosity and determination to stay updated with the <span>latest tech</span> and best practices in the field.</p>
        <div className="home-btn">
            <AnchorLink href='#contact'><button className='home-btn-1'>Hire me</button></AnchorLink>
            <AnchorLink href='#projects'><button className='home-btn-2'>See Projects</button></AnchorLink>
        </div>
      </div>

      <div className="home-video" data-aos='zoom-in' delay="200">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AnWAKHh0sHM?si=5WMPx9xuisEhjIf3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </motion.div>
  )
}

export default Home
