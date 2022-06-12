export const imageVariant = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 2,
  },
};

export const coverVariant = {
  rest: {
    backgroundColor: '#000000',
    opacity: 0.2,
    scale: 1,
  },
  hover: {
    scale: 2,
    opacity: 0,
  },
};

export const textVariant = {
  rest: {
    scale: 1,
    letterSpacing: '.2vw',
  },
  hover: {
    scale: 1.2,
    letterSpacing: '.5vw',
  },
};

export const gridContainerVariant = {
  viewGridI: {
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  viewGridII: {
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  viewGridIII: {
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  viewGridIV: {
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};
export const gridContentIVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  viewGridI: {
    opacity: 1,
    y: 0,
  },
};
export const gridContentIIVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  viewGridII: {
    opacity: 1,
    y: 0,
  },
};
export const gridContentIIIVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  viewGridIII: {
    opacity: 1,
    y: 0,
  },
};
export const gridContentIVVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  viewGridIV: {
    opacity: 1,
    y: 0,
  },
};
export const imageIIVariant = {
  rest: {
    x: -5,
    y: 0,
    // border:'2px solid var(--page-background)'
    border: '1px solid var(--page-background)',
  },
  hover: {
    x: 8,
    y: 12,
    border: '2px solid var(--color-scheme-dark-background)',
    transition: {
      // delay: 0.2,
      duration: 0.2,
    },
  },
};
export const cardVariant = {
  rest: {
    boxShadow:
      'var(--color-primary-opacity) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
    // border: '1px solid var(--button-background-color)',
    border: '1px solid var(--page-background)',
  },
  hover: {
    boxShadow:
      'var(--color-scheme-dark-background) 0px 1px 1px, var(--color-scheme-dark-background) 0px 0px 1px 1px',
    border: '1px solid var(--button-background-hover-color-lighten)',
    transition: {
      duration: 0.1,
    },
  },
};
