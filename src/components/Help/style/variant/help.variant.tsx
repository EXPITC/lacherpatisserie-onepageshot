export const hoverVariant = {
  hover: {
    opacity: 1,
    border: '1.5px solid #191fc7',
    y: -4,
  },
};

export const exitVariant =  {
    rest: {
      width: '35px',
      height: '35px',
      scale: 0,
      border: '1px solid red',
    },
    hover: {
      width: '35px',
      height: '35px',
      scale: 1,
    },
};

export const exitParentVariant = {
  rest: {
    transition: {
      staggerChildren: 0,
    },
  },
};
export const boxParentVariant = {
  view: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const boxChildVariant = {
  rest: {
    y: -100,
    opacity: 0,
  },
  view: {
    opacity: 1,
    y: 0,
  },
};

export const panelVariant = {
  rest: {
    opacity: 0,
    y: '100vh',
    scale: 0.9,
  },
  view: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: '100vh',
  },
};

export const listVariant = {
  view: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const listChildVariant = {
  rest: {
    y: 100,
    opacity: 0,
  },
  view: {
    y: 0,
    opacity: 1,
  },
};

export const triggerVariant = {
  rest: {
    opacity: 0,
    x: 100,
  },
  view: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
    },
  },
};
