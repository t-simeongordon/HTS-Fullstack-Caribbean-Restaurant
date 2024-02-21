import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';


const App = () => {

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;