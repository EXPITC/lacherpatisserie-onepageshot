import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarsStaggered,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import style from './style/header.style.module.css';
import {
  WrapperTop,
  PersonChart,
} from './style/header.styled.components';
import {NavigationDefault } from './navigation';



function Header() {


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
      <NavigationDefault />
    
    </header>
  );
}

export default Header;
