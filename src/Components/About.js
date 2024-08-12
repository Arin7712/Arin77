import {useEffect} from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles
import { motion } from 'framer-motion';


const About = () => {

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
    <div id='about' className='about' data-aos='fade-right'>
      <div className="about-text">
        <h1>About <span>Me</span></h1>
        <p>Aspiring entrepreneur and passionate developer at 15, with a keen interest in building innovative SaaS solutions. Currently exploring the dynamic world of startups and committed to leveraging technology to solve real-world problems. I thrive on learning and constantly seek opportunities to expand my knowledge in software development, business strategies, and startup growth.

Eager to connect with like-minded individuals, mentors, and industry experts to share insights, learn, and grow together. Let's connect and explore how we can innovate and create impactful solutions.</p>
      </div>

      <div className="about-image">
        <img src="arinportfolio1.jpg" width="100%" height="100%" alt="none" style={{borderRadius:'10px'}}/>
      </div>
    </div>
    </motion.div>
  )
}

export default About