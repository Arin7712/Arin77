import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['FRONTEND DEVELOPER', 'CREATOR', 'UX DESIGNER'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Initialize Typed.js on the typedElement reference
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance during cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span style={{color:'white'}} ref={typedElement} />
    </div>
  );
};

export default TypedComponent;
