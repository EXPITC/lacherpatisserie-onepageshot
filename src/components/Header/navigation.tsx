import {
  faTwitter,
  faInstagramSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  DropDown,
  NavMobile,
  Panel,
  BarMobile,
  ListNavMobile,
  DropLeft,
  Brand,
} from './style/header.styled.components';
import {
  listVariant,
  navVariant,
  allProductVariant,
  listEntryVariant,
  deliveryVariant,
  barVariant,
  panelVariant,
  dropLeftVariant,
  brandVariant,
} from './style/variant/header.variant';

const allProduct = 'All Product';
const delivery = 'Delivery Fee & FAQs';
const data = [
  {
    products: {
      header: allProduct,
      option: [
        {
          name: 'Whole Cake',
          url: 'https://www.lacherpatisserie.com/collections/cakes-gateaux',
        },
        {
          name: 'Individual Desert',
          url: 'https://www.lacherpatisserie.com/collections/individual-dessert',
        },
        {
          name: 'Limited Edition',
          url: 'https://www.lacherpatisserie.com/collections/limited-edition',
        },
        {
          name: 'Add-Ons',
          url: 'https://www.lacherpatisserie.com/collections/add-ons',
        },
      ],
    },
  },
  {
    products: {
      header: delivery,
      option: [
        {
          name: 'Delivery Fee',
          url: 'https://www.lacherpatisserie.com/pages/delivery',
        },
        {
          name: 'FAQs',
          url: 'https://www.lacherpatisserie.com/pages/frequently-asked-questions',
        },
        {
          name: 'How To Choose The Flavour',
          url: 'https://www.lacherpatisserie.com/pages/how-to-choose-the-flavour',
        },
        {
          name: 'Allergen and Diet Information',
          url: 'https://www.lacherpatisserie.com/pages/allergen-and-diet-information',
        },
        {
          name: 'Our Store (For Pickup Only',
          url: 'https://www.lacherpatisserie.com/pages/how-to-find-our-store',
        },
      ],
    },
  },
];

export function NavigationMini({
  setOpen,
  open = false,
}: {
  setOpen: VoidFunction;
  open: Boolean;
}) {
  const controls = useAnimation();
  const [dropLeft, setDropLeft] = useState<typeof allProduct | typeof delivery>(
    allProduct,
  );
  const [subNav, setSubNav] = useState<boolean>(false);
  useEffect(() => {
    controls.start('close').then(() => controls.start('rest'));
  }, []);
  useEffect(() => {
    controls
      .start(open === true ? 'open' : 'close')
      .then(() => controls.start('flip'));
  }, [controls, open]);
  useEffect(() => {
    controls.start(subNav ? 'view' : 'def');
  }, [controls, subNav]);

  // responsive effect
  const [width, setWidth] = useState<'tablet' | 'phone' | 'phoneS' | false>(
    'phoneS',
  );
  useEffect(() => {
    const deft = () => {
      const tablet = window.screen.width <= 633;
      const phone = window.screen.width < 413;
      const phoneS = window.screen.width <= 320;
      if (phone && phoneS) return 'phoneS';
      if (tablet && phone) return 'phone';
      if (tablet) return 'tablet';
      return false;
    };
    setWidth(deft());
    let timeout: ReturnType<typeof setTimeout>;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWidth(deft());
        console.log(deft());
        open
          ? controls.stop()
          : controls.start('close').then(() => controls.start('flip'));
      }, 500);
    });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', () => {
        deft();
      });
    };
  }, [controls, open, setOpen, width]);
  useEffect(() => {
    controls.start('close');
  }, [controls, width]);
  // end of responsive

  return (
    <NavMobile>
      <BarMobile
        onClick={setOpen}
        animate={controls}
        initial='rest'
        transition={{
          top: width === 'tablet' ? '10px' : '20px',
        }}
        variants={barVariant(width)}
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </BarMobile>

      <Panel variants={panelVariant} animate={controls} initial='rest'>
        <ListNavMobile layoutScroll>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/collections/same-day-delivery'>
              Same Day Delivery
            </a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/collections/1-day-preorder'>
              1 Day Preorder
            </a>
          </li>
          <li
            onClick={() => {
              setDropLeft(allProduct);
              setSubNav(true);
            }}
          >
            <p>All Products</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li
            onClick={() => {
              setDropLeft(delivery);
              setSubNav(true);
            }}
          >
            <p>Delivery Fee & FAQs</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/blogs/news'>Blogs</a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/pages/about-us'>
              About Us
            </a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/pages/contact-us'>
              Contact Us
            </a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/account/login'>Log in</a>
          </li>
          <li>
            <a href='https://www.lacherpatisserie.com/account/register'>
              Create Account
            </a>
          </li>
        </ListNavMobile>

        <DropLeft variants={dropLeftVariant} initial='rest' animate={controls}>
          {data
            .filter(({ products: { header } }) => header === dropLeft)
            .map(({ products: { header, option } }) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setSubNav(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p>{header}</p>
                  </li>
                  {option.map(({ url, name }) => {
                    return (
                      <li>
                        <a href={url}>{name}</a>
                      </li>
                    );
                  })}
                </>
              );
            })}
        </DropLeft>
      </Panel>

      <Brand variants={brandVariant} animate={controls} initial='rest'>
        <div>
          <motion.a href='https://twitter.com/LookItsMeTc'>
            <FontAwesomeIcon icon={faTwitter} fontSize='22' />
          </motion.a>
          <motion.a href='https://www.instagram.com/lacherpatisserie'>
            <FontAwesomeIcon icon={faInstagramSquare} fontSize='22' />
          </motion.a>
          <motion.a href='https://github.com/EXPITC'>
            <FontAwesomeIcon icon={faGithub} fontSize='22' />
          </motion.a>
        </div>
      </Brand>
    </NavMobile>
  );
}

// move props animation
const y = true;
export function NavigationDefault() {
  return (
    <List
      variants={listVariant}
      initial={['rest', 'text']}
      animate={['active', 'enter']}
      laptop='true'
    >
      <li>
        <Link to='/'>
          <motion.p variants={navVariant}>Home</motion.p>
        </Link>
      </li>
      <li>
        <a href='https://www.lacherpatisserie.com/collections/same-day-delivery'>
          <motion.p variants={navVariant}>Same Day Delivery</motion.p>
        </a>
      </li>
      <li>
        <a href='https://www.lacherpatisserie.com/collections/1-day-preorder'>
          <motion.p variants={navVariant}>1 Day Preorder </motion.p>
        </a>
      </li>
      <li>
        <motion.span variants={navVariant}>
          <motion.div
            initial={['rest', 'hidden']}
            whileHover={['hover', 'visible']}
          >
            <p>All Products</p>
            <FontAwesomeIcon icon={faAngleDown} />
            <DropDown variants={allProductVariant} textcenter='true'>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/collections/cakes-gateaux'>
                    Whole Cake
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant(y)}>
                  <a href='https://www.lacherpatisserie.com/collections/individual-dessert'>
                    Individual <br /> Dessert
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/collections/limited-edition'>
                    Limited Edition
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant(y)}>
                  <a href='https://www.lacherpatisserie.com/collections/add-ons'>
                    Add-Ons
                  </a>
                </motion.span>
              </li>
            </DropDown>
          </motion.div>
        </motion.span>
      </li>
      <li>
        <motion.span variants={navVariant}>
          <motion.div
            initial={['rest', 'hidden']}
            whileHover={['hover', 'visible']}
          >
            <p>Delivery Fee & FAQs</p>
            <FontAwesomeIcon icon={faAngleDown} />
            <DropDown variants={deliveryVariant}>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/pages/delivery'>
                    Delivery Fee
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/pages/frequently-asked-questions'>
                    FAQs
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/pages/how-to-choose-the-flavour'>
                    How To Choose The Flavour
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/pages/allergen-and-diet-information'>
                    Allergen and Diet Information
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='https://www.lacherpatisserie.com/pages/how-to-find-our-store'>
                    Our Store (For Pickup Only)
                  </a>
                </motion.span>
              </li>
            </DropDown>
          </motion.div>
        </motion.span>
      </li>
      <li>
        <a href='https://www.lacherpatisserie.com/blogs/news'>
          <motion.p variants={navVariant}>Blogs</motion.p>
        </a>
      </li>
      <li>
        <a href='https://www.lacherpatisserie.com/pages/about-us'>
          <motion.p variants={navVariant}>About Us</motion.p>
        </a>
      </li>
      <li>
        <a href='https://www.lacherpatisserie.com/pages/contact-us'>
          <motion.p variants={navVariant}>Contact Us</motion.p>
        </a>
      </li>
    </List>
  );
}
