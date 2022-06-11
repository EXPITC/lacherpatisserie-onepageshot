import React from 'react';
import Info from '../info';
import Header from '../Header';
import Slideshow from '../slideshow';
import Products from '../products';
import AboutAndReview from '../aboutAndReview';
import Blog from '../blog';
import Footer from '../Footer';

function LandingPage() {
  return (
    <div>
      <Info />
      <Header />
      <Slideshow />
      <Products />
      <AboutAndReview />
      <Blog />
      <Footer />
      {/* <div>LandingPage</div> */}
    </div>
  );
}

export default LandingPage;
