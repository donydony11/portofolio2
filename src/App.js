import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
  <Header />
  <Banner />
  <Nav />
  <About />
  <Work />
  <div className='overflow-hidden'>
    <Contact />
  </div>
  <div className='max-h-screen'></div>
</div>

  )
}

export default App;
