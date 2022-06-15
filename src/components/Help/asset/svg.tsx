import { motion } from 'framer-motion';
import React from 'react';
import style from '../style/help.style.module.css';

const Wave = () => {
  return (
    <svg
      className={style.wave}
      style={{
        fill: '#87694f',
          transform: 'rotate(180deg)',
        backgroundColor:'transparent'
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 24 150 28'
    >
      <motion.path
        id='gentle-wave'
        d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
      />
    </svg>
  );
};

export { Wave };
