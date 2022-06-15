export const blogVariant = {
  view: {
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
  view: {
    opacity: 1,
    y: 0,
  },
};

export const contentLeftVariant = {
  rest: {
    opacity: 0,
    x: -200,
  },
  contentLeft: {
    opacity: 1,
    x: 0,
  },
};
export const contentRightVariant = {
  rest: {
    opacity: 0,
    x: 200,
  },
  contentRight: {
    opacity: 1,
    x: 0,
  },
};
export const buttonVariant = {
  rest: {
    opacity: 0,
    y: 100,
  },
  button: {
    opacity: 1,
    y: 0,
  },
  hover: {
    backgroundColor:'var(--color-primary)'
  }
};

export const imgVariant = {
  hover: {
    filter:'brightness(70%)'
  }
}