export const productInfoVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const textVariant = {
  rest: {
    opacity: 0,
    x: -100,
  },
  view: {
    opacity: 1,
    x: 0,
  },
};
export const buttonVariant = {
  rest: {
    opacity: 0,
    x: -100,
  },
  button: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const moreInfoVariant = {
  viewMoreI: {
    transition: {
      delayChildren: 0.2,
    },
  },
  viewMoreII: {
    transition: {
      delay: 0.2,
    },
  },
};

export const moreContentIVariant = {
  rest: {
    opacity: 0,
    scale: 0,
  },
  restTablet: {
    opacity: 1,
  },
  viewMoreI: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const moreContentIIVariant = ({ y }: { y?: Boolean }) => {
  return {
    rest: {
      opacity: 0,
      x: y ? -100 : 100,
    },
    viewMoreII: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
};

export const moreContentTabletVariant = {
  leaveUp: {
    opacity: 0,
    y: 100,
    // display: 'hidden',
    transitionEnd: {
      display: 'none',
    },
  },
  leaveDown: {
    opacity: 0,
    y: -100,
    // display: 'hidden',
    transitionEnd: {
      display: 'none',
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    display: 'flex',
  },
  leave: {
    display: 'none',
  },
};
