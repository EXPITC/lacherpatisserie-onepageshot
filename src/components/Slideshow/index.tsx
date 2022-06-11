import {
  faAward,
  faFaceSmile,
  faHeart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import style from './style/slideshow.style.module.css';
import { MoreInfo, ProductInfo } from './style/slideshow.styled.components';

function Slideshow() {
  return (
    <section className={style.slideshow}>
      <div className={style.card}>
        <img
          src='https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_2100x.jpg'
          alt='cake'
          style={{ maxWidth:'100%',maxHeight:'100%',width:'100%'}}
        />
        <ProductInfo>
          <p>New Limited Edition</p>
          <h1>2022 Father's Day Edition - Black Forest</h1>
          <button>1Day Preorder, by 2pm</button>
        </ProductInfo>
      </div>
      <MoreInfo>
        <li>
        <Link to='/'>
          <FontAwesomeIcon icon={faTruck} fontSize={'20px'} />
          <div>
            <h4>Delivery to PJ/KL (within 50km)</h4>
            <p>Free delivery available*</p>
          </div>
        </Link>
        </li>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faFaceSmile} fontSize={'20px'} />
            <div>
              <h4>Preorder Basis</h4>
              <p>Freshness Guaranteed</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faHeart} fontSize={'20px'} />
            <div>
              <h4>Finest Ingredients</h4>
              <p>100% Halal, No Alcohol</p>
            </div>
          </Link>
        </li>
        <li>
        <Link to='/'>
          <FontAwesomeIcon icon={faAward} fontSize={'20px'} />
          <div>
            <h4>Award Winning Chef</h4>
            <p>Champion of 2016 Asian Pastry Cup</p>
            </div>
            </Link>
        </li>
      </MoreInfo>
    </section>
  );
}

export default Slideshow;
