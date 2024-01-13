import React from 'react';
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Location from './routes/Location'; 
import FAQ from './routes/FAQ'; 

const App = () => {
  const navigate = useNavigate();

  // Handle back/forward navigation
  const handleHistory = (direction: 'back' | 'forward') => {
    navigate(direction);
  };

  return (
    // <div>hello ************</div>
    <div>
      {/* Header, navigation, etc. */}
      <button onClick={() => handleHistory('back')}>Back</button>
      <button onClick={() => handleHistory('forward')}>Forward</button>
      <Outlet/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
            {/* Footer, etc. */}
    </div>
  );
};

export default App;