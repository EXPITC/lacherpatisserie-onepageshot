import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import MoreInfoElement from './moreInfo';
// import { Link } from 'react-router-dom';
import style from './style/slideshow.style.module.css';
import { ProductInfo } from './style/slideshow.styled.components';
import {
  buttonVariant,
  productInfoVariant,
  textVariant,
} from './style/variant/slideshow.variant';

function Slideshow() {
  // scroll
  const { scrollYProgress } = useViewportScroll();
  const [y, setY] = useState<any>(0);
  const yInput = [0, 0.3];
  const maxMovement = [-30, 250];
  const yRange = useTransform(scrollYProgress, yInput, maxMovement);
  useEffect(() => {
    yRange.onChange(() => setY(yRange));
    return () => yRange.destroy();
  }, [scrollYProgress, yRange]);

  // animation when viewport
  const controls = useAnimation();

  // responsive effect
  const [width, setWidth] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.screen.width <= 700);
    });
    console.log(width)
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.screen.width <= 700);
      });
  }, [width]);

  return (
    <motion.section
      className={style.slideshow}
      animate={{
        opacity: [0, 1],
        transition: {
          duration: 1.5,
        },
      }}
    >
      <div className={style.card}>
        <motion.img
          className={style.cardImg}
          initial={{ y: -30 }}
          src={
            width
              ? 'https://cdn.shopify.com/s/files/1/0040/2305/8561/products/2022-fathers-day-edition-black-forest-03.jpg'
              : 'https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_2100x.jpg'
          }
          alt='cake'
          style={{ y: y, scaleY: 1.1 }}
        />
        <ProductInfo
          variants={productInfoVariant}
          onViewportEnter={() => controls.start(['view', 'button'])}
          animate={controls}
          initial='rest'
        >
          <motion.p variants={textVariant}>New Limited Edition</motion.p>
          <motion.h1 variants={textVariant}>
            2022 Father's Day Edition - Black Forest
          </motion.h1>
          <a href='/'>
            <motion.button variants={buttonVariant}>
              1Day Preorder, by 2pm
            </motion.button>
          </a>
        </ProductInfo>
      </div>

      {/* bottom */}
      <MoreInfoElement tablet={width} />
    </motion.section>
  );
}

export default Slideshow;
