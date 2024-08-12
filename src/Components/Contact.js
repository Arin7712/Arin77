import React, { useState, useEffect } from 'react';
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles

const Form = () => {

    const [result, setResult] = React.useState("");
    useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });

        const textarea = document.getElementById('auto-resizing-textarea');

      textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      });
      }, []);

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3d23dc08-f2aa-4289-8f0d-c2f9882982dc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert('Sent Successfully!')
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div id='contact' className="contact" data-aos='zoom-in'>
        <h1>Contact <span>Me</span></h1>
    <section className='container'>
        <form onSubmit={onSubmit} action="#" className='form'>
            <div className="input-box">
                <label htmlFor="">Name*</label>
                <input required type="text" placeholder='Enter your name'/>
            </div>
            <div className="input-box">
                <label htmlFor="">Email*</label>
                <input required type="text" placeholder='Name@example.com'/>
            </div>

            <div className="column">
            <div className="input-box">
                <label htmlFor="">Phone number*</label>
                <input type="text" placeholder='Enter your name'/>
            </div>
            <div className="input-box">
                <label htmlFor="">Country code*</label>
                <input type="text" placeholder='+00'/>
            </div>
            </div>
            
            <div className="column">
            <div className="input-box">
                <label htmlFor="text">Organization*</label>
                <input required type="text" placeholder='Your organization'/>
            </div>

            <div className="input-box">
                <label htmlFor="text">Role*</label>
                <input required type="text" placeholder='Role'/>
            </div>
            </div>

            <div className="input-box">
                <label htmlFor="text">Tell us more*</label>
                <textarea id="auto-resizing-textarea"></textarea>
            </div>

            <button>Submit</button>
        </form>
    </section>
    </div>
  )
}

export default Form
