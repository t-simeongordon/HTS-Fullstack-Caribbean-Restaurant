import Carousel from './carousel';

const Footer = () => {
  const items = [
    { image: 'https://ideogram.ai/g/le6hqZ4tSF2scPMMjj-djw/1', title: 'Item 1', description: 'Description 1' },
    { image: 'https://ideogram.ai/g/le6hqZ4tSF2scPMMjj-djw/2', title: 'Item 2', description: 'Description 2' },
  ];

  return (
    <footer>
      {/* Other footer content */}
      <Carousel items={items} interval={5000} /> {/* Autoplay every 5 seconds */}
    </footer>
  );
};

export default Footer