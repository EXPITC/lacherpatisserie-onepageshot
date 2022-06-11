import {
  faAward,
  faFaceSmile,
  faHeart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import { relative } from 'path';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style/slideshow.style.module.css';
import { MoreInfo, ProductInfo } from './style/slideshow.styled.components';
import { productInfoVariant, textVariant } from './style/variant/slideshow.variant';

function Slideshow() {
  // scroll
  const { scrollYProgress } = useViewportScroll();
  const [y, setY] = useState<any>(0);
  const yInput = [0, 0.3];
  const maxMovement = [-20, 150];
  const yRange = useTransform(scrollYProgress, yInput, maxMovement);
  useEffect(() => {
    yRange.onChange(() => setY(yRange));
    return () => yRange.destroy();
  }, [scrollYProgress, yRange]);

  // animation when viewport
  const controls = useAnimation();
  return (
    <motion.section className={style.slideshow} animate={{
      opacity: [0, 1],
      transition: {
        duration: 1.5
      }
    }}>
      <div className={style.card} >
        <motion.img
          initial={{y:-20}}
          src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_2100x.jpg'
          alt='cake'
          style={{ height: '100%', width: '100%', y: y, scaleY: 1.1 }}
        />
        <ProductInfo variants={productInfoVariant} onViewportEnter={() => controls.start("view")} animate={controls} initial='rest'>
          <motion.p variants={textVariant}>New Limited Edition</motion.p>
          <motion.h1 variants={textVariant}>2022 Father's Day Edition - Black Forest</motion.h1>
          <button>1Day Preorder, by 2pm</button>
        </ProductInfo>
      </div>
      <MoreInfo>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faTruck} fontSize={'20px'} />
            <div>
              <h4>Delivery to PJ/KL (within 50km)</h4>
              <p>Free delivery available*</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faFaceSmile} fontSize={'20px'} />
            <div>
              <h4>Preorder Basis</h4>
              <p>Freshness Guaranteed</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faHeart} fontSize={'20px'} />
            <div>
              <h4>Finest Ingredients</h4>
              <p>100% Halal, No Alcohol</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faAward} fontSize={'20px'} />
            <div>
              <h4>Award Winning Chef</h4>
              <p>Champion of 2016 Asian Pastry Cup</p>
            </div>
          </Link>
        </li>
      </MoreInfo>
    </motion.section>
  );
}

export default Slideshow;
