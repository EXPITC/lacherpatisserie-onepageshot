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
        x:-100,
    },
    view: {
        opacity: 1,
        x:0
    }
}
