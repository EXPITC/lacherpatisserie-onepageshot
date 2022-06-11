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
  view: {
    transition: {
        duration: 1,
        delayChildren: 0.1,
        staggerChildren: 0.2,
    },
  },
};
export const gridContentVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
  },
};
