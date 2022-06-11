import {
  faFacebookSquare,
  faGit,
  faGithub,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './style/footer.style.module.css';
import {
  Container,
  Content,
  ContentWrapper,
  Copyright,
  Form,
} from './style/footer.styled.components';

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <ContentWrapper>
          <Content>
            <h1>Lachér Patisserie</h1>
            <p>
              We serve quality French desserts in Malaysia. All our cakes are
              professionally made from scratch using only the finest halal
              ingredients. We provide same-day delivery to KL and Selangor (T&Cs
              apply).
            </p>
          </Content>
          <Content>
            <h1>Follow Our Socials</h1>
            <ContentWrapper content row gap='15px'>
              <a href='https://twitter.com/LookItsMeTc'>
                <FontAwesomeIcon icon={faTwitter} fontSize='22' />
              </a>
              <a href='https://www.instagram.com/lacherpatisserie'>
                <FontAwesomeIcon icon={faInstagramSquare} fontSize='22' />
              </a>
              <a href='https://github.com/EXPITC'>
                <FontAwesomeIcon icon={faGithub} fontSize='22' />
              </a>
            </ContentWrapper>
          </Content>
          <Content>
            <h1>Quick Links</h1>
            <ContentWrapper col content gap='15px'>
              <a href='https://www.lacherpatisserie.com/collections/same-day-delivery'><p>Same Day Cake & Dessert Delivery</p></a>
              <a href='https://www.lacherpatisserie.com/pages/delivery'><p>Free Delivery to KL & Selangor (Min Amount Spend)</p></a>
              <a href='https://www.lacherpatisserie.com/pages/how-to-find-our-store'>
              <p>Our Store Location (For Pickup Only)</p></a>
              <a href='Allergen and Diet Information'><p>Allergen and Diet Information</p></a>
              <a href='https://www.lacherpatisserie.com/pages/frequently-asked-questions'><p>FAQs</p></a>
              <a href='https://www.lacherpatisserie.com/blogs/news'><p>Blogs</p></a>
              <a href='https://www.lacherpatisserie.com/pages/join-our-team'><p>Join Our Team</p></a>
              <a href='https://www.lacherpatisserie.com/pages/contact-us  '><p>Contact Us</p></a>
              <a href='https://www.lacherpatisserie.com/policies/refund-policy'><p>Delivery/Refund/Cancellation Policy</p></a>
              <a href='https://www.lacherpatisserie.com/policies/terms-of-service'><p>Terms of Service</p></a>
              <a href='https://www.lacherpatisserie.com/policies/privacy-policy'><p>Privacy Policy</p></a>
            </ContentWrapper>
          </Content>
          <Content textMidTablet>
            <h1>Be In The Know</h1>
            <p>Join our mailing list for updates on new product launches and seasonal specials!</p>
            <Form>
              <input type='email' placeholder='Enter email' required/>
              <button type='submit'>
                <FontAwesomeIcon icon={faAngleRight} fontSize={20}/>
              </button>
            </Form>
          </Content>
        </ContentWrapper>
        <span>
          <Copyright />
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
