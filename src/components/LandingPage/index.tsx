import React from 'react';
import Slideshow from '../Slideshow';
import Products from '../Products';
import AboutAndReview from '../AboutAndReview';
import Blog from '../Blog';

function LandingPage({open}:{open:Boolean}) {
  return (
      <div>
        <Slideshow open={open} />
        <Products />
        <AboutAndReview />
        <Blog />
      </div>
  );
}

export default LandingPage;
