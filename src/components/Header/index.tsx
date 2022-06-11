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

function Header() {
  // delivery dropdown animation variant
  const deliveryVariant = {
    rest: {
      y: -410,
      borderRadius: '0 0 0 0',
    },
    hover: {
      borderRadius: '0 0 10px 10px',
      y: -65,
      transition: {
        type: 'spring',
        else: 'anticipate',
        stiffness: 70,
        velocity: 2,
      },
    },
  };
  // all product dropdown animation variant
  const allProductVariant = {
    rest: {
      y: -350,
      borderRadius: '0 0 0 0',
      width:'135px'
    },
    hover: {
      borderRadius: '0 0 5px 5px',
      y: -65,
      transition: {
        type: 'spring',
        else: 'anticipate',
        stiffness: 70,
        velocity: 2,
      },
    },
  };
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
      <List>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='/'>Same Day Delivery</a>
        </li>
        <li>
          <a href='/'>1 Day Preorder</a>
        </li>
        <li>
          <motion.div initial='rest' whileHover='hover' animate='rest'>
            <p>All Products</p>
            <FontAwesomeIcon icon={faAngleDown} />
            <DropDown variants={allProductVariant}>
              <li>
                <a href='/'>Whole Cake</a>
              </li>
              <li>
                <a href='/'>Individual Dessert</a>
              </li>
              <li>
                <a href='/'>Limited Edition</a>
              </li>
              <li>
                <a href='/'>Add-Ons</a>
              </li>
            </DropDown>
          </motion.div>
        </li>
        <li>
          <motion.div initial='rest' whileHover='hover' animate='rest'>
            <p>Delivery Fee & FAQs</p>
            <FontAwesomeIcon icon={faAngleDown} />
            <DropDown variants={deliveryVariant}>
              <li>
                <a href='/'>Delivery Fee</a>
              </li>
              <li>
                <a href='/'>FAQs</a>
              </li>
              <li>
                <a href='/'>How To Choose The Flavour</a>
              </li>
              <li>
                <a href='/'>Allergen and Diet Information</a>
              </li>
              <li>
                <a href='/'>Our Store (For Pickup Only)</a>
              </li>
            </DropDown>
          </motion.div>
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
      </List>
    </header>
  );
}

export default Header;
