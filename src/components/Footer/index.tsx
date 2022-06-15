import {
  faGithub,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import style from './style/footer.style.module.css';
import {
  Container,
  Content,
  ContentWrapper,
  Copyright,
  Form,
} from './style/footer.styled.components';
import { contentVariant, copyrightVariant, footerVariant, formVariant, h1Variant } from './style/variant/footer.variant';

function Footer() {
  const controls = useAnimation()

  return (
    <motion.footer className={style.footer} variants={footerVariant} initial='rest'  animate={controls} onViewportEnter={() => controls.start(['view','content'])}>
      <Container>
        <ContentWrapper>
          <Content>
            <motion.h1 variants={h1Variant}>Lachér Patisserie</motion.h1>
            <motion.p variants={contentVariant}>
              We serve quality French desserts in Malaysia. All our cakes are
              professionally made from scratch using only the finest halal
              ingredients. We provide same-day delivery to KL and Selangor (T&Cs
              apply).
            </motion.p>
          </Content>
          <Content>
            <motion.h1 variants={h1Variant}>Follow Our Socials</motion.h1>
            <ContentWrapper content='true' row={true.toString()} gap='15px' >
              <motion.a href='https://twitter.com/LookItsMeTc' variants={contentVariant} >
                <FontAwesomeIcon icon={faTwitter} fontSize='22' />
              </motion.a>
              <motion.a href='https://www.instagram.com/lacherpatisserie' variants={contentVariant}>
                <FontAwesomeIcon icon={faInstagramSquare} fontSize='22' />
              </motion.a>
              <motion.a href='https://github.com/EXPITC' variants={contentVariant}>
                <FontAwesomeIcon icon={faGithub} fontSize='22' />
              </motion.a>
            </ContentWrapper>
          </Content>
          <Content>
            <motion.h1 variants={h1Variant} >Quick Links</motion.h1>
            <ContentWrapper col='true' content='true' gap='15px'>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/collections/same-day-delivery'><p>Same Day Cake & Dessert Delivery</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/pages/delivery'><p>Free Delivery to KL & Selangor (Min Amount Spend)</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/pages/how-to-find-our-store'>
              <p>Our Store Location (For Pickup Only)</p></motion.a>
              <motion.a variants={contentVariant} href='Allergen and Diet Information'><p>Allergen and Diet Information</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/pages/frequently-asked-questions'><p>FAQs</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/blogs/news'><p>Blogs</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/pages/join-our-team'><p>Join Our Team</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/pages/contact-us  '><p>Contact Us</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/policies/refund-policy'><p>Delivery/Refund/Cancellation Policy</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/policies/terms-of-service'><p>Terms of Service</p></motion.a>
              <motion.a variants={contentVariant} href='https://www.lacherpatisserie.com/policies/privacy-policy'><p>Privacy Policy</p></motion.a>
            </ContentWrapper>
          </Content>
          <Content textMidTablet>
            <motion.h1 variants={h1Variant}>Be In The Know</motion.h1>
            <motion.p variants={contentVariant}>Join our mailing list for updates on new product launches and seasonal specials!</motion.p>
            <Form>
              <motion.input variants={formVariant} type='email' placeholder='Enter email' required/>
              <motion.button type='submit' variants={formVariant}>
                <FontAwesomeIcon icon={faAngleRight} fontSize={20}/>
              </motion.button>
            </Form>
          </Content>
        </ContentWrapper>
        <span>
          <Copyright variants={copyrightVariant} initial='rest' animate={controls} onViewportEnter={() => controls.start('copyright')} />
          <p style={{fontSize:10,opacity:0.2}}>adjustment by tc / 2022</p>
        </span>
      </Container>
    </motion.footer>
  );
}

export default Footer;
