import { motion, useAnimation } from 'framer-motion';
import React from 'react';

import style from './style/blog.style.module.css';
import { BlogContent, Btn, ViewAll } from './style/blog.styled.components';
import {
  blogVariant,
  buttonVariant,
  contentLeftVariant,
  contentRightVariant,
  h1Variant,
} from './style/variant/blog.variant';

function Blog() {
  const controls = useAnimation();
  return (
    <motion.section
      className={style.blog}
      initial='rest'
      animate={controls}
      variants={blogVariant}
    >
      <motion.h1 variants={h1Variant}>From the blog</motion.h1>
      <BlogContent onViewportEnter={() => controls.start(['view', 'content'])}>
        <motion.div variants={contentLeftVariant} onViewportEnter={()=>controls.start('contentLeft')}>
          <img
            src='https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/cny-wishes_1500x.jpg'
            alt='25 Chinese New Year Wishes in Chinese & English for CNY 2022!'
          />
          <h4>25 Chinese New Year Wishes in Chinese & English for CNY 2022!</h4>
          <p>
            through words of encouragement, love, and well wishes. However,
            coming up with Chinese New Year wishes can be a struggle especially
            if you're not familiar with them. Living in a multi racial society,
            I'm sure we've got Chinese friends and family
          </p>
          <Btn href='https://www.lacherpatisserie.com/blogs/news/25-chinese-new-year-wishes-in-chinese-english-for-cny-2022'>
            Read more
          </Btn>
        </motion.div>
        <motion.div variants={contentRightVariant} onViewportEnter={()=> controls.start('contentRight')}>
          <img
            src='https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/2021-christmas-edition-slider_1500x.jpg'
            alt='2 captivating 2021 Christmas cakes that will WOW your friends and family!'
          />
          <h4>
            2 captivating 2021 Christmas cakes that will WOW your friends and
            family!
          </h4>
          <p>
            Don't you think it's time to spice up your Christmas dessert table
            with something new, fresh, and jaw-dropping all at the same time? We
            do! Each important season, we introduce exciting desserts with
            unique flavour profiles that stand out in terms of taste and design.
            This Christmas, after weeks of brainstorming and getting
          </p>
          <Btn href='https://www.lacherpatisserie.com/blogs/news/25-chinese-new-year-wishes-in-chinese-english-for-cny-2022'>
            Read more
          </Btn>
        </motion.div>
      </BlogContent>
      <ViewAll variants={buttonVariant} onViewportEnter={()=>controls.start('button')} href='https://www.lacherpatisserie.com/blogs/news'>View all</ViewAll>
    </motion.section>
  );
}

export default Blog;
