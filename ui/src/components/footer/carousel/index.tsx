import React, { useState, useEffect } from 'react';
import "./carousel.css"
interface CarouselItem {
  image: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number; // Autoplay interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [interval, items.length]);

  const handleChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div key={index} className={index === activeIndex ? 'active' : ''}>
            <img src={item.image} alt={item.title} />
            {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
      <button onClick={() => handleChange((activeIndex - 1 + items.length) % items.length)}>
        Previous
      </button>
      <button onClick={() => handleChange((activeIndex + 1) % items.length)}>Next</button>
    </div>
  );
};

export default Carousel;
