import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import style from './style/header.style.module.css';
import { WrapperTop, PersonChart } from './style/header.styled.components';
import { NavigationDefault } from './navigation';

function Header() {
  return (
    <header className={style.header}>
      <WrapperTop>
        <a href='/'>
          <img
            src={
              'https://cdn.shopify.com/s/files/1/0040/2305/8561/files/header-logo_0d72dc14-6acd-4a74-b2d7-a61300319c07_300x.png'
            }
            alt='logo'
          />
        </a>
        <PersonChart>
          <a href='https://www.lacherpatisserie.com/account/login'>
          <FontAwesomeIcon icon={faUser} />
          </a>
          <a href='https://www.lacherpatisserie.com/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>0</p>
          </a>
        </PersonChart>
      </WrapperTop>

      {/* bottom */}
      <NavigationDefault />
    </header>
  );
}

export default Header;
