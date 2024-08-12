import React,  {useState, useEffect} from 'react'
import './LandingPage.css'
import Navbar from './Navbar'
import Home from './Home'

const images = [
  "./final4.jpg",
    "./final6.jpg",
  ];

const LandingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 2 seconds
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);
  return (
    <div className='slideshow-container'>
        {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${
            index === currentImageIndex ? "visible" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
        <Navbar/>
        <Home/>
    </div>
  )
}

export default LandingPage
