import React from 'react';
import Slideshow from '../slideshow/index';
import Products from '../products/index';
import AboutAndReview from '../aboutAndReview/index';
import Blog from '../blog/index';

function LandingPage({open}:{open:Boolean}) {
  return (
      <div>
        <Slideshow open={open} />
        <Products />
        <AboutAndReview />
        <Blog />
        {/* <div>LandingPage</div> */}
      </div>
  );
}

export default LandingPage;
