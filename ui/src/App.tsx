import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';


const App = () => {
  const navigate = useNavigate();

  // Handle back/forward navigation
  const handleHistory = (direction: 'back' | 'forward') => {
    navigate(direction);
  };

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;