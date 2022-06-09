import React from 'react';
import Info from '../Info';
import Header from '../Header';
import Slideshow from '../Slideshow';
import Products from '../Products';

function LandingPage() {
  return (
    <>
      <Info />
      <Header />
      <Slideshow />
      <Products/>
      <div>LandingPage</div>
    </>
  );
}

export default LandingPage;
