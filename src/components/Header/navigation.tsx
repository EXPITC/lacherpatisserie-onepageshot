import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { List, DropDown } from './style/header.styled.components'
import { listVariant, navVariant, allProductVariant, listEntryVariant, deliveryVariant } from './style/variant/variant'

function NavigationTablet() {
    return (
     <></>
 )   
}
// move props for animation
const y = true;

function NavigationDefault() {
  return (
    
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
  )
}

function Navigation({tablet}:{tablet?:Boolean}):JSX.Element {
    return tablet ? <NavigationTablet/> : <NavigationDefault/>
}
export default Navigation