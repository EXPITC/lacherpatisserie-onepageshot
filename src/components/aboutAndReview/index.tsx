import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style/aboutAndReview.style.module.css';
import {
  aboutAndReviewVariant,
  cardVariant,
  textIVariant,
  textIIVariant,
  buttonVariant,
  textIIIVariant,
  textIVVariant,
  textVVariant,
  controllerVariant,
  controllerBtnVariant,
  h1Variant,
  reviewVariant,
  userContentVariant,
  contentVariant,
} from './style/variant/aboutAndReview.variant';
// data
const data = [
  {
    id: 0,
    content:
      '"Lacher Patisserie is my go to place when i need a reliable birthday cake provider. I ordered the jivarra mousse cake twice and hazelnut praline twice over the span of 8 months (so many birthdays during MCO period!). The cakes look good, simple and classy. Perfect for a small and intimate bday celebration. Well done!"',
    user: 'Julie Lee (Google Review)',
  },
  {
    id: 1,
    content:
      '"Great service & selection, perfect for last minute gifts as well with their same-day delivery! The lemon tart is always a hit!"',
    user: 'Rebecca Jo-Rushdy (Google reviews)',
  },
  {
    id: 2,
    content:
      '"Delicate and scrumptious. Definitely top-notch dessert in Msia. Will order again for future occasions!"',
    user: 'Siaujuen Chin (Google Review)',
  },
  {
    id: 3,
    content:
      '"Lacher Patisserie is my go to place when i need a reliable birthday cake provider. I ordered the jivarra mousse cake twice and hazelnut praline twice over the span of 8 months (so many birthdays during MCO period!). The cakes look good, simple and classy. Perfect for a small and intimate bday celebration. Well done!"',
    user: 'Dirk WD (Google Review)',
  },
  {
    id: 4,
    content:
      '"I trust them with the quality of patisseries (HALAL & REAL FINEST INGREDIENT) and delivery. Definitely if you are looking for a true gourmand, they know how to be creative with their desserts and understand how they travel to your doorstop. Whatever you see on their website THAT is exactly what you will get and more."',
    user: 'Thara Liyana Abdul Aziz (Google Review)',
  },
  {
    id: 5,
    content:
      '"the cake was delivered to me as a gift and when I had my first bite on it I was OMG how come I never heard of this shop!! the pastry is superb and being a fussy dessert eater, their pastry is one of the best in kl. better than those 5 star dining places. really amazing"',
    user: 'Adeline Soo (Google Review)',
  },
];
function AboutAndReview() {
  // scroll
  const { scrollYProgress } = useViewportScroll();
  const [y, setY] = useState<any>(0);
  const yInput = [0, 1];
  const maxMovement = ['250px', '-800px'];
  const yRange = useTransform(scrollYProgress, yInput, maxMovement);
  useEffect(() => {
    yRange.onChange(() => setY(yRange));
    return () => yRange.destroy();
  }, [scrollYProgress, yRange]);

  // animation when viewport
  const controls = useAnimation();

  // index for review content
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (index === data.length - 1) return setIndex(0);
      setIndex(index + 1);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [index]);

  // swipe manual review
  const swipe = ({ info }: { info: any }) => {
    console.log(info)
    const up = () => {
      if (index === data.length - 1) return setIndex(0);
      setIndex(index + 1);
    };
    const down = () => {
      if (index === 0) return setIndex(data.length - 1);
      setIndex(index - 1);
    };
    // main
    if (info.movementX >= 3) return down();
    if (info.movementX <= -3) return up();
    setIndex(0); //default
  };
  
  // responsive effect
  const [width, setWidth] = useState<boolean>(false);
  useEffect(() => {
    setWidth(window.screen.width <= 600);
    window.addEventListener('resize', () => {
      setWidth(window.screen.width <= 600);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.screen.width <= 600);
      });
  }, []);
  return (
    <>
      <motion.section
        className={style.aboutAndReview}
        variants={aboutAndReviewVariant}
        animate={controls}
        initial='rest'
        onViewportEnter={() => {
          controls.start('view');
        }}
      >
        <div className={style.wrapImg}>
          <motion.img
            src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/storefront_65175bc7-c865-4345-aaf3-7159a050bfce_2100x.jpg'
            alt='lacherpatisserie'
            style={{ maxWidth: width? '800px': 'unset', width: width ? '140%' : '100vw', height: width ? '800px':'1000px', objectFit: 'cover', y, translateX: width ? -150 : 0}}
          />
        </div>
        <motion.div
          className={style.card}
          variants={cardVariant}
          initial='rest'
          animate={controls}
          onViewportEnter={() => {
            controls.start('card');
          }}
        >
          <motion.h1
            variants={textIVariant}
            onViewportEnter={() => controls.start('I')}
          >
            Our Location
          </motion.h1>
          <motion.h2
            variants={textIIVariant}
            onViewportEnter={() => controls.start('II')}
          >
            Lachér Patisserie
          </motion.h2>
          <motion.p
            variants={textIIIVariant}
            onViewportEnter={() => controls.start('III')}
          >
            A-1-11, Eve Suite,
            <br /> Jalan PJU 1A/41, Ara Damansara,
            <br /> 47301,
            <br /> Petaling Jaya, Selangor.
          </motion.p>
          <motion.h2
            variants={textIVVariant}
            onViewportEnter={() => controls.start('IV')}
          >
            Delivery & Pickup ONLY
          </motion.h2>
          <motion.p
            variants={textVVariant}
            onViewportEnter={() => controls.start('V')}
          >
            (No dine-in/walk-in)
            <br /> Mon - Sun, 11am - 6pm
          </motion.p>
          <Link to='/'>
            <motion.button
              variants={buttonVariant}
              onViewportEnter={() => controls.start('button')}
              className={style.btnPickup}
            >
              Pickup Location
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Review */}

      <section className={style.Testimonials}>
        <div className={style.reviewSection}>
          <motion.h1
            variants={h1Variant}
            initial='rest'
            animate={controls}
            onViewportEnter={() => controls.start(['viewH1', 'viewReview'])}
          >
            Testimonials
          </motion.h1>
          {data
            .filter(({ id }) => id === index)
            .map(({ content, user, id }) => {
              controls.start('review').then(() => controls.start('viewReview'));
              return (
                <motion.div
                  onDragStart={(info: any) => swipe({ info })}
                  className={style.review}
                  variants={reviewVariant}
                  initial='review'
                  animate={controls}
                  key={id}
                  drag='x'
                  dragConstraints={{ left: 20, top: 0, right: 20, bottom: 0 }}
                  dragElastic={0.2}
                >
                  <motion.p variants={contentVariant}>{content}</motion.p>
                  <motion.p variants={userContentVariant}>{user}</motion.p>
                </motion.div>
              );
            })}
        </div>
        <motion.ul
          className={style.controller}
          variants={controllerVariant}
          initial='rest'
          animate={controls}
          onViewportEnter={() => controls.start('viewController')}
        >
          {data.map(({ id }) => {
            return (
              <motion.li key={id} variants={controllerBtnVariant}>
                <motion.button
                  onClick={() => setIndex(id)}
                  animate={{
                    background: index === id ? '#88694e' : '#aeb1b0',
                    transition: {
                      ease: 'anticipate',
                      duration: 0.5,
                    },
                  }}
                  whileHover={{ background: '#666666' }}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
    </>
  );
}

export default AboutAndReview;
