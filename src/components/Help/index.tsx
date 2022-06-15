import { useState } from 'react';
import {
  BoxContent,
  Header,
  HelpBtn,
  ListContent,
  Panel,
  PanelOption,
  Trigger,
  WordBullet,
  Wrapper,
} from './style/help.styled.components';
import { AnimatePresence, motion } from 'framer-motion';
import { Wave } from './asset/svg';
import question from './asset/question.svg';
import {
  boxChildVariant,
  boxParentVariant,
  exitParentVariant,
  exitVariant,
  hoverVariant,
  listChildVariant,
  listVariant,
  panelVariant,
  triggerVariant,
} from './style/variant/help.variant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLink,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const List = [
  {
    color: '#fcc9ce',
    title: 'How does the same-day delivery/pickup work?',
    type: 'Ordering',
  },
  {
    color: '#fcc9ce',
    title: 'How does the same-day delivery/pickup work?',
    type: 'Ordering',
  },
  {
    color: '#fcc9ce',
    title: 'What are your bestsellers?',
    type: 'Ordering',
  },
  {
    color: '#fcc9ce',
    title:
      'Can I order the petit gateaux on a day other than Tuesday and Sunday? Can you make an exception for me?',
    type: 'Ordering',
  },
  {
    color: '#fcc9ce',
    title: "Why can't I choose the date/time?",
    type: 'Ordering',
  },
  {
    color: '#fcc9ce',
    title: 'Can I amend/cancel my order?',
    type: 'Ordering',
  },
  {
    color: '#90dfd6',
    title: 'How much is the delivery fee?',
    type: 'Delivery',
  },
  {
    color: '#90dfd6',
    title: 'Can I request for a specific delivery time?',
    type: 'Delivery',
  },
  {
    color: '#90dfd6',
    title: 'What if the receiver is not present at the time of delivery?',
    type: 'Delivery',
  },
  {
    color: '#90dfd6',
    title: 'How do I find your store?',
    type: 'In Store Pick Up',
  },
  {
    color: '#90dfd6',
    title: 'Can I come pickup earlier/later/anytime?',
    type: 'In Store Pick Up',
  },
  {
    color: '#ffc86e',
    title: 'Do you write messages on the cake?',
    type: 'Products',
  },
  {
    color: '#ffc86e',
    title: 'How long can the cake last in a car ride?',
    type: 'Products',
  },
  {
    color: '#ffc86e',
    title: 'Do you use halal ingredients? Does your cake contain alcohol?',
    type: 'Products',
  },
];
function Help() {
  const [greet, setGreet] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  return (
    <AnimatePresence>
      {show ? (
        <Panel
          key='panel'
          variants={panelVariant}
          initial='rest'
          animate='view'
          exit='exit'
        >
          <Header>
            <div>
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faLink} />
              </div>
              <motion.span
                variants={exitParentVariant}
                animate='view'
                whileHover='hover'
                onClick={() => setShow(false)}
              >
                <motion.div>
                  <motion.span variants={exitVariant} />
                  <FontAwesomeIcon icon={faXmark} />
                </motion.div>
              </motion.span>
            </div>
            <Wave />
          </Header>
          <PanelOption>
            <Wrapper>
              <h1>FAQ Category</h1>
              <BoxContent
                variants={boxParentVariant}
                initial='rest'
                animate='view'
              >
                <motion.div variants={boxChildVariant}>
                  <motion.div variants={hoverVariant} whileHover='hover'>
                    <span>
                      <WordBullet color='#fcc9ce'>Or</WordBullet>
                    </span>
                    <p>Ordering</p>
                  </motion.div>
                </motion.div>
                <motion.div variants={boxChildVariant}>
                  <motion.div variants={hoverVariant} whileHover='hover'>
                    <span>
                      <WordBullet color='#90e0d4'>De</WordBullet>
                    </span>
                    <p>Delivery</p>
                  </motion.div>
                </motion.div>
                <motion.div variants={boxChildVariant}>
                  <motion.div variants={hoverVariant} whileHover='hover'>
                    <span>
                      <WordBullet color='#90e0d4'>In</WordBullet>
                    </span>
                    <p>In Store Pick Up</p>
                  </motion.div>
                </motion.div>
                <motion.div variants={boxChildVariant}>
                  <motion.div variants={hoverVariant} whileHover='hover'>
                    <span>
                      <WordBullet color='#ffc86e'>Pr</WordBullet>
                    </span>
                    <p>Products</p>
                  </motion.div>
                </motion.div>
              </BoxContent>

              <h1>Popular Questions</h1>
              <ListContent variants={listVariant} initial='rest' animate='view'>
                {List.map(({ color, title, type }) => {
                  return (
                    <motion.li variants={listChildVariant}>
                      <motion.div variants={hoverVariant} whileHover='hover'>
                        <span>
                          <WordBullet color={color}>
                            {type.slice(0, 2)}
                          </WordBullet>
                        </span>
                        <div>
                          <p>{title}</p>
                          <p>{type}</p>
                        </div>
                      </motion.div>
                    </motion.li>
                  );
                })}
              </ListContent>
            </Wrapper>
          </PanelOption>
        </Panel>
      ) : (
        <>
            {greet ? <Trigger variants={triggerVariant} initial='rest' animate='view'>
              <span
                onClick={() => { setShow(true); setGreet(false) }}
              >Click me for help :)</span>
              <FontAwesomeIcon icon={faXmark} onClick={() => setGreet(false)} />
            </Trigger>: null}
            <HelpBtn onClick={() => { setShow(true); setGreet(false) }}>
            <img src={question} alt='help button' />
          </HelpBtn>
        </>
      )}
    </AnimatePresence>
  );
}

export default Help;
