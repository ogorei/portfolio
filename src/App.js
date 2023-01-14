import React from 'react';
import About from './container/about/About';
import Footer from './container/footer/Footer';
import Header from './container/header/Header';
import Skills from './container/skills/Skills';
import Work from './container/work/Work';
import Navbar from './components/navbar/Navbar';
import "./App.scss"

const App = () => {
	return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
};

export default App;
