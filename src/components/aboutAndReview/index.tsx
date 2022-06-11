import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './style/aboutAndReview.style.module.css';
function AboutAndReview() {
  return (
    <>
      <section className={style.aboutAndReview}>
        <div className={style.wrapImg}>
          <img
            src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/storefront_65175bc7-c865-4345-aaf3-7159a050bfce_2100x.jpg'
            alt='lacherpatisserie'
            style={{ width: '100vw', height: 'inherit', objectFit: 'cover' }}
          />
        </div>
        <div className={style.card}>
          <h1>Our Location</h1>
          <h2>Lachér Patisserie</h2>
          <p>
            A-1-11, Eve Suite,
            <br /> Jalan PJU 1A/41, Ara Damansara,
            <br /> 47301,
            <br /> Petaling Jaya, Selangor.
          </p>
          <h2>Delivery & Pickup ONLY</h2>
          <p>
            (No dine-in/walk-in)
            <br /> Mon - Sun, 11am - 6pm
          </p>
          <Link to='/'>
            <button className={style.btnPickup}>Pickup Location</button>
          </Link>
        </div>
      </section>
      <section className={style.Testimonials}>
        <div className={style.reviewSection}>
          <h1>Testimonials</h1>
          <motion.div className={style.review}>
            <p>
              "Lacher Patisserie is my go to place when i need a reliable
              birthday cake provider. I ordered the jivarra mousse cake twice
              and hazelnut praline twice over the span of 8 months (so many
              birthdays during MCO period!). The cakes look good, simple and
              classy. Perfect for a small and intimate bday celebration. Well
              done!"
            </p>
            <p>Julie Lee (Google Review)</p>
          </motion.div>
        </div>
        <ul className={style.controller}>
          <li>
            <button />
          </li>
          <li>
            <button />
          </li>
          <li>
            <button />
          </li>
          <li>
            <button />
          </li>
          <li>
            <button />
          </li>
          <li>
            <button />
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutAndReview;
