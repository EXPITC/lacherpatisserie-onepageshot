import {
  faTruck,
  faFaceSmile,
  faHeart,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { MoreInfo } from './style/slideshow.styled.components';
import {
  moreContentIIVariant,
  moreContentIVariant,
  moreContentTabletVariant,
  moreInfoVariant,
} from './style/variant/slideshow.variant';

function MoreInfoTablet() {
  // index
  const [current, setCurrent] = useState<number>(0);
  const [leave, setLeave] = useState<string>('leaveDown');
  // autoSwap
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      if (current === 3) return setCurrent(0);
      setCurrent(current +1 )
    }, 2000)
    return () => clearTimeout(timeout);
  }, [current]);

  // manualSwap
  const swipe = ({ info }: any) => {
    console.log(info.movementY);

    const up = () => {
      const goBack = () => {
        setCurrent(0);
        setLeave('leaveDown');
      };
      if (current === 3) return goBack()

      setCurrent(current + 1);
      setLeave('leaveUp');
    };
    const down = () => {
      const goBack = () => {
        setCurrent(3);
        setLeave('leaveUp');
      };
      if (current === 0) return goBack();

      setCurrent(current - 1);
      setLeave('leaveDown')
    };

    if (info.movementY >= 3) return up();
    if (info.movementY <= -3) return down();
    setCurrent(0); //default
  };

  return (
    <MoreInfo initial={leave}>
      <motion.li
        drag='y'
        onDragStart={(info: any) => swipe({ info })}
        dragConstraints={{ left: 0, top: 10, right: 0, bottom: 10 }}
        dragElastic={0.2}
        variants={moreContentTabletVariant}
        animate={current === 0 ? 'enter' : "leave"}
      >
        <a href='/'>
          <FontAwesomeIcon icon={faTruck} fontSize={'20px'} />
          <div>
            <h4>Delivery to PJ/KL (within 50km)</h4>
            <p>Free delivery available*</p>
          </div>
        </a>
      </motion.li>
      <motion.li
        drag='y'
        onDragStart={(info: any) => swipe({ info })}
        dragConstraints={{ left: 0, top: 10, right: 0, bottom: 10 }}
        dragElastic={0.2}
        variants={moreContentTabletVariant}
        animate={current === 1 ? 'enter' : 'leave'}
      >
        <a href='/'>
          <FontAwesomeIcon icon={faFaceSmile} fontSize={'20px'} />
          <div>
            <h4>Preorder Basis</h4>
            <p>Freshness Guaranteed</p>
          </div>
        </a>
      </motion.li>
      <motion.li
        drag='y'
        onDragStart={(info: any) => swipe({ info })}
        dragConstraints={{ left: 0, top: 10, right: 0, bottom: 10 }}
        dragElastic={0.2}
        variants={moreContentTabletVariant}
        animate={current === 2 ? 'enter' : "leave"}
      >
        <a href='www.google.com'>
          <FontAwesomeIcon icon={faHeart} fontSize={'20px'} />
          <div>
            <h4>Finest Ingredients</h4>
            <p>100% Halal, No Alcohol</p>
          </div>
        </a>
      </motion.li>
      <motion.li
        drag='y'
        onDragStart={(info: any) => swipe({ info })}
        dragConstraints={{ left: 0, top: 10, right: 0, bottom: 10 }}
        dragElastic={0.2}
        variants={moreContentTabletVariant}
        animate={current === 3 ? 'enter' : "leave"}
      >
        <a href='/'>
          <FontAwesomeIcon icon={faAward} fontSize={'20px'} />
          <div>
            <h4>Award Winning Chef</h4>
            <p>Champion of 2016 Asian Pastry Cup</p>
          </div>
        </a>
      </motion.li>
    </MoreInfo>
  );
}
function MoreInfoDefault() {
  const controls = useAnimation();
  return (
    <MoreInfo
      variants={moreInfoVariant}
      initial='rest'
      animate={controls}
      onViewportEnter={() => controls.start(['viewMoreI', 'viewMoreII'])}
    >
      <motion.li variants={moreContentIIVariant({ y: true })}>
        <a href='/'>
          <FontAwesomeIcon icon={faTruck} fontSize={'20px'} />
          <div>
            <h4>Delivery to PJ/KL (within 50km)</h4>
            <p>Free delivery available*</p>
          </div>
        </a>
      </motion.li>
      <motion.li variants={moreContentIVariant}>
        <a href='/'>
          <FontAwesomeIcon icon={faFaceSmile} fontSize={'20px'} />
          <div>
            <h4>Preorder Basis</h4>
            <p>Freshness Guaranteed</p>
          </div>
        </a>
      </motion.li>
      <motion.li variants={moreContentIVariant}>
        <a href='www.google.com'>
          <FontAwesomeIcon icon={faHeart} fontSize={'20px'} />
          <div>
            <h4>Finest Ingredients</h4>
            <p>100% Halal, No Alcohol</p>
          </div>
        </a>
      </motion.li>
      <motion.li variants={moreContentIIVariant({})}>
        <a href='/'>
          <FontAwesomeIcon icon={faAward} fontSize={'20px'} />
          <div>
            <h4>Award Winning Chef</h4>
            <p>Champion of 2016 Asian Pastry Cup</p>
          </div>
        </a>
      </motion.li>
    </MoreInfo>
  );
}
const MoreInfoElement = ({ tablet }: { tablet?: boolean }): JSX.Element => {
  return tablet ? <MoreInfoTablet /> : <MoreInfoDefault />;
};
export default MoreInfoElement;
