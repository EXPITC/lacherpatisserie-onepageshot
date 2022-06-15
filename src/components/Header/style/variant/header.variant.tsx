

// nav list bottom
export const listVariant = {
  rest: {
    height: 0,
    opacity: 0,
    y: -100,
  },
  active: {
    opacity: 1,
    y: 0,
    height: 80,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
  enter: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0,
    },
  },
};
export const navVariant = {
  text: {
    x: 50,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: [50, 0],
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
};

// delivery dropdown animation variant
export const deliveryVariant = {
  rest: {
    y: -500,
    borderRadius: '0 0 0 0',
  },
  hover: {
    borderRadius: '0 0 10px 10px',
    y: -85,
    transition: {
      type: 'spring',
      else: 'anticipate',
      stiffness: 70,
      velocity: 2,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

// all product dropdown animation variant
export const allProductVariant = {
  rest: {
    y: -450,
    borderRadius: '0 0 0 0',
  },
  hover: {
    borderRadius: '0 0 5px 5px',
    y: -85,
    transition: {
      type: 'spring',
      else: 'anticipate',
      stiffness: 70,
      velocity: 2,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

// slide in and show the option
// default from x
export const listEntryVariant = (y: boolean = false) => {
  return {
    hidden: {
      x: y ? 400 : -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        else: 'anticipate',
        stiffness: 97,
        velocity: 1,
      },
    },
  };
};

export const barVariant = (screen: 'tablet' | 'phone' | 'phoneS' | false) => {
  const top = () => {
    if (screen === 'tablet') return '140px';
    if (screen === 'phone') return '160px';
    if (screen === 'phoneS') return '180px';
    return '120px'
  };
  return {
    rest: {
      rotate: 0,
      left: 30,
      top: top(),
    },
    open: {
      rotate: 180,
      left: '20px',
      top: '55px',
    },
    close: {
      rotate: -360,
      left: screen ? '40px' : '30px',
      top: top(),
    },
    flip: {
      rotateX: [0, 180],
      duration: 0.1
    },
  };
};

export const panelVariant = {
  rest: {
    width: 0,
    opacity: 0,
  },
  open: {
    opacity: 1,
    width: '100vw',
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  close: {
    width: 0,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.2,
    },
    TransitionEnd: {
      opacity: 0,
      width:0,
      display: 'none'
    }
  },
};

export const dropLeftVariant = {
  def: {
    x: '100vw',
    transition: {
      duration: 0.3,
    }
  },
  view: {
    x: '0',
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const brandVariant = {
  rest: {
    opacity: 0,
    y: 100,
    width: 0,
  },
  open: {
    display:'inherit',
    opacity: 1,
    width: '100%',
    y: 0,
  },
  close: {
    y: 100,
    opacity: 0,
    width: '0px',
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.22,
    },
  },
};
