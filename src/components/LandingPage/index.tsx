import React from 'react';
import Slideshow from '../slideshow';
import Products from '../products';
import AboutAndReview from '../aboutAndReview';
import Blog from '../blog';

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
