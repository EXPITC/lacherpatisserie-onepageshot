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
    y: [0, -100],
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: 'none',
    },
  },
  leaveDown: {
    opacity: 0,
    y: [0,100],
    transition: {
      //   delay: 1,
      duration: .2,
    },

    transitionEnd: {
      display: 'none',
    },
  },
  enterBottom: {
    transition: {
      //   delay: 1,
      //   delay: 5,
    },
    opacity: 1,
    y: [100, 0],
    display: 'flex',
  },
  enterTop: {
    transition: {
      //   delay: 1,
    },
    opacity: 1,
    y: [-100, 0],
    display: 'flex',
  },
  leave: {
    transitionEnd: {
      display: 'none',
    },
  },
};
