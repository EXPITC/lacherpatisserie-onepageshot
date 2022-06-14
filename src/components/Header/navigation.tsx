import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../products';
import {
  List,
  DropDown,
  NavMobile,
  Panel,
  BarMobile,
  ListNavMobile,
  DropLeft,
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
          url: '/',
        },
        {
          name: 'Individual Desert',
          url: '/',
        },
        {
          name: 'Limited Edition',
          url: '/',
        },
        {
          name: 'Add-Ons',
          url: '/',
        },
      ],
    },
  }, {
    products: {
      header: delivery,
      option: [
        {
          name: 'Delivery Fee',
          url: '/',
        },
        {
          name: 'FAQs',
          url: '/',
        },
        {
          name: 'How To Choose The Flavour',
          url: '/',
        },
        {
          name: 'Allergen and Diet Information',
          url: '/',
        },
        {
          name: 'Our Store (For Pickup Only',
          url: '/',
        }
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
    controls.start(open ? 'open' : 'close').then(() => controls.start('flip'));
  }, [controls, open]);
  useEffect(() => {
    controls.start(subNav ? 'view' : 'def');
  }, [controls, subNav]);
  return (
    <NavMobile>
      <BarMobile
        onClick={setOpen}
        animate={controls}
        initial='rest'
        variants={barVariant}
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </BarMobile>
      <Panel variants={panelVariant} animate={controls} initial='rest'>
        <ListNavMobile layoutScroll>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Same Day Delivery</a>
          </li>
          <li>
            <p>1 Day Preorder</p>
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
            <a href='/'>Blogs</a>
          </li>
          <li>
            <a href='/'>About Us</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
          <li>
            <a href='/'>Log in</a>
          </li>
          <li>
            <a href='/'>Create Account</a>
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
                  <li>
                    <a href='/'>Whole Cake</a>
                  </li>
                  <li>
                    <a href='/'>Individual Desert</a>
                  </li>
                  <li>
                    <a href='/'>Limited Edition</a>
                  </li>
                  <li>
                    <a href='/'>Add-Ons</a>
                  </li>
                </>
              );
            })}
        </DropLeft>

        {/* <Logo/> */}
      </Panel>
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
        <a href='/'>
          <motion.p variants={navVariant}>Same Day Delivery</motion.p>
        </a>
      </li>
      <li>
        <a href='/'>
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
                  <a href='/'>Whole Cake</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant(y)}>
                  <a href='/'>
                    Individual <br /> Dessert
                  </a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='/'>Limited Edition</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant(y)}>
                  <a href='/'>Add-Ons</a>
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
                  <a href='/'>Delivery Fee</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='/'>FAQs</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='/'>How To Choose The Flavour</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='/'>Allergen and Diet Information</a>
                </motion.span>
              </li>
              <li>
                <motion.span variants={listEntryVariant()}>
                  <a href='/'>Our Store (For Pickup Only)</a>
                </motion.span>
              </li>
            </DropDown>
          </motion.div>
        </motion.span>
      </li>
      <li>
        <a href='/'>
          <motion.p variants={navVariant}>Blogs</motion.p>
        </a>
      </li>
      <li>
        <a href='/'>
          <motion.p variants={navVariant}>About Us</motion.p>
        </a>
      </li>
      <li>
        <a href='/'>
          <motion.p variants={navVariant}>Contact Us</motion.p>
        </a>
      </li>
    </List>
  );
}
