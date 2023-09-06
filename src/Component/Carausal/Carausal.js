import React, { useState, useEffect, useRef } from 'react';
import './Carausal.css'; // Import your CSS file
import CarausalBox from '../CarausalBox/CarausalBox';

function Carausal() {
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Get the width of the container and set it in the state
    const container = containerRef.current;
    if (container) {
      const newContainerWidth = container.clientWidth;
      setContainerWidth(newContainerWidth);
    }
  }, []);

  const goNext = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = scrollPosition + containerWidth;
      setScrollPosition(scrollPosition + containerWidth);
    }
  };

  const goPrevious = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = scrollPosition - containerWidth;
      setScrollPosition(scrollPosition - containerWidth);
    }
  };


  return (
    <div className="Carausal_container" ref={containerRef}>
      {/* Add your box elements here */}
      <div className="box">
 
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>
        <CarausalBox/>

      </div>
      
      {/* Add your "❮" and "❯" links with onClick handlers */}
      <a className="prev" onClick={goPrevious}>
        ❮
      </a>
      
      <a className="next" onClick={goNext}>
        ❯
      </a>
      
    </div>
  );
}

export default Carausal;
