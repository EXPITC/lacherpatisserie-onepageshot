import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style/aboutAndReview.style.module.css';
import { aboutAndReviewVariant, cardVariant ,textIVariant,textIIVariant, buttonVariant, textIIIVariant, textIVVariant, textVVariant } from './style/variant/variant';
function AboutAndReview() {
  // scroll
  const { scrollYProgress } = useViewportScroll()
  const [y, setY] = useState<any>(0)
  const yInput = [0, 1];
  const maxMovement = ['250px', '-800px'];
  const yRange = useTransform(scrollYProgress, yInput, maxMovement);
  useEffect(() => {
    yRange.onChange(() => setY(yRange));
    return () => yRange.destroy();
  }, [scrollYProgress, yRange]);

  // animation when viewport
  const controls = useAnimation();
  return (
    <>
      <motion.section className={style.aboutAndReview} variants={aboutAndReviewVariant} animate={controls} initial='rest' onViewportEnter={()=>{ controls.start('view') }} >
        <div className={style.wrapImg}>
          <motion.img
            src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/storefront_65175bc7-c865-4345-aaf3-7159a050bfce_2100x.jpg'
            alt='lacherpatisserie'
            style={{ width: '100vw', height: '1000px', objectFit: 'cover' ,y}}
          />
        </div>
        <motion.div className={style.card} variants={cardVariant} initial='rest' animate={controls} onViewportEnter={() => {controls.start('card')}} >
          <motion.h1 variants={textIVariant} onViewportEnter={()=>controls.start('I')}>Our Location</motion.h1>
          <motion.h2 variants={textIIVariant} onViewportEnter={()=>controls.start('II')}>Lachér Patisserie</motion.h2>
          <motion.p variants={textIIIVariant} onViewportEnter={() => controls.start('III')}>
            A-1-11, Eve Suite,
            <br /> Jalan PJU 1A/41, Ara Damansara,
            <br /> 47301,
            <br /> Petaling Jaya, Selangor.
          </motion.p>
          <motion.h2 variants={textIVVariant} onViewportEnter={() => controls.start('IV')}>Delivery & Pickup ONLY</motion.h2>
          <motion.p variants={textVVariant} onViewportEnter={() => controls.start('V')}>
            (No dine-in/walk-in)
            <br /> Mon - Sun, 11am - 6pm
          </motion.p>
          <Link to='/'>
            <motion.button variants={buttonVariant} onViewportEnter={() => controls.start('button')} className={style.btnPickup}>Pickup Location</motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Review */}

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
