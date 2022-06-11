import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import style from './style/header.style.module.css';
import {
  WrapperTop,
  List,
  PersonChart,
  DropDown,
} from './style/header.styled.components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  allProductVariant,
  deliveryVariant,
  listEntryVariant,
  listVariant,
  navVariant,
} from './style/variant/variant';

// move props for animation
let y = true;

function Header() {
  return (
    <header className={style.header}>
      <WrapperTop>
        <img
          src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/header-logo_0d72dc14-6acd-4a74-b2d7-a61300319c07_300x.png'
          alt='logo'
        />
        <PersonChart>
          <FontAwesomeIcon icon={faUser} />
          <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>0</p>
          </div>
        </PersonChart>
      </WrapperTop>

      {/* bottom */}

      <List
        variants={listVariant}
        initial={['rest', 'text']}
        animate={['active', 'enter']}
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
    </header>
  );
}

export default Header;
