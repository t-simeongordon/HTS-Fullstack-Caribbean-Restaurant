import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/footer';


const App = () => {
  const navigate = useNavigate();

  // Handle back/forward navigation
  const handleHistory = (direction: 'back' | 'forward') => {
    navigate(direction);
  };

  return (
    // <div>hello ************</div>
    <div>
      <p>header</p>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;