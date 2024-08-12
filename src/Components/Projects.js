import {useEffect} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles


const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the duration of the animation (in ms)
      once: true,     // Whether the animation should happen only once - while scrolling down
      easing: 'ease-in-out',
    });
  }, []);
  
   return (
    <div id='projects' className='slide projects'>
      <h1>My Projects</h1>
      <div className="card" data-aos='fade-left'>
        <div className="card-img">
          <img width='100%' height="100%" src="project1.png" alt="" />
        </div>
        <div className="card-text">
          <h1>Story<span>selling</span></h1>
          <p>Storyselling is a landing page for a business with the best UX and animations. It is a fully functional website and perfect for impressing potential clients. It is a page dedicated for the persentation of the services vibe and book clients.</p>
        </div>
      </div>

      <div className="card card-2" data-aos='fade-right'>
        <div className="card-img">
          <img width='100%' height="100%" src="project2.png" alt="" />
        </div>
        <div className="card-text">
          <h1>News<span>Nexus</span></h1>
          <p>NewsNexus is a realtime news application which gives you the latest news related to various categories, you can read the official articles written on the real time fetched news. The functionality of the app is maintained along with an appealing UI.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects
