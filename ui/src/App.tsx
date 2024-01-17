import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


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
     
            {/* Footer, etc. */}
    </div>
  );
};

export default App;