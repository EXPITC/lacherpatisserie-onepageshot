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
} from './style/header.styled.components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className={style.header}>
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
          <Link to='/'>Same Day Delivery</Link>
        </li>
        <li>
          <Link to='/'>1 Day Preorder</Link>
        </li>
        <li>
          <Link to='/'>All Products</Link>
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
        <Link to='/'>Delivery Fee & FAQs</Link>
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li><Link to='/'>Blogs</Link></li>
        <li><Link to='/'>About Us</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
      </List>
    </section>
  );
}

export default Header;