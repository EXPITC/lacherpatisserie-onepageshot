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
import Navigation from './navigation';



function Header() {

  const tablet = window.screen.width <= 700
  return (
    <header className={style.header}>
      <WrapperTop>
        <img
          src={'https://cdn.shopify.com/s/files/1/0040/2305/8561/files/header-logo_0d72dc14-6acd-4a74-b2d7-a61300319c07_300x.png'}
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
      <Navigation tablet={tablet}/>
    
    </header>
  );
}

export default Header;
