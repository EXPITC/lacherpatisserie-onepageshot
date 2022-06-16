export const aboutAndReviewVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

// about variant
// card
export const cardVariant = {
  rest: {
    height: 'fit-content',
    opacity: 0,
    y: 100,
  },
  card: {
    opacity: 1,
    y: 0,
  },
  I: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
  II: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
  III: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
  IV: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
  V: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
  button: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .1,
      delayChildren: .1,
    },
  },
};
export const textIVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  I: {
    opacity: 1,
    scale: 1,
  },
};
export const textIIVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  II: {
    opacity: 1,
    scale: 1,
  },
};
export const textIIIVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },

  III: {
    opacity: 1,
    scale: 1,
  },
};

export const textIVVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  III: {
    opacity: 1,
    scale: 1,
  },
};
export const textVVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  V: {
    opacity: 1,
    scale: 1,
  },
};
export const buttonVariant = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  button: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    opacity: 0.6,
    textDecoration:'underline'
  }
};

// ----Review Section
export const reviewVariant = {
  viewReview: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const h1Variant = {
  rest: {
    opacity: 0,
    y: -100,
  },
  viewH1: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
    },
  },
};

export const contentVariant = {
  review: {
    opacity: 0,
    scale: 0.5,
    lineHeight: '20px',
    margin:0
  },
  viewReview: {
    opacity: 1,
    scale: 1,
    margin:10,
    lineHeight: '30px'
  },
};

export const userContentVariant = {
  review: {
    opacity: 0,
    x: -200,
  },
  viewReview: {
    opacity: 1,
    x: 0,
  },
};

export const controllerVariant = {
  viewController: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const controllerBtnVariant = {
  rest: {
    opacity: 0,
    x: 100,
  },
  viewController: {
    opacity: 1,
    x: 0,
  },
};
