import React from 'react';
import Slideshow from '../slideshow';
import Products from '../products';
import AboutAndReview from '../aboutAndReview';
import Blog from '../blog';

function LandingPage() {
  return (
      <div>
        <Slideshow />
        <Products />
        <AboutAndReview />
        <Blog />
        {/* <div>LandingPage</div> */}
      </div>
  );
}

export default LandingPage;
