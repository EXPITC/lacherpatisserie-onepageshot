import { motion } from 'framer-motion';
import React from 'react';

import style from './style/blog.style.module.css';
import { BlogContent, Btn, ViewAll} from './style/blog.styled.components';

function Blog() {
    return <section className={style.blog}>
        <h1>
        From the blog
        </h1>
        <BlogContent>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/cny-wishes_1500x.jpg" alt='25 Chinese New Year Wishes in Chinese & English for CNY 2022!' />
                <h4>25 Chinese New Year Wishes in Chinese & English for CNY 2022!</h4>
                <p>through words of encouragement, love, and well wishes. However, coming up with Chinese New Year wishes can be a struggle especially if you're not familiar with them. Living in a multi racial society, I'm sure we've got Chinese friends and family</p>
                <Btn to="https://www.lacherpatisserie.com/blogs/news/25-chinese-new-year-wishes-in-chinese-english-for-cny-2022">Read more</Btn>
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/2021-christmas-edition-slider_1500x.jpg" alt="2 captivating 2021 Christmas cakes that will WOW your friends and family!"/>
                <h4>2 captivating 2021 Christmas cakes that will WOW your friends and family!</h4>
                <p>Don't you think it's time to spice up your Christmas dessert table with something new, fresh, and jaw-dropping all at the same time? We do! Each important season, we introduce exciting desserts with unique flavour profiles that stand out in terms of taste and design. This Christmas, after weeks of brainstorming and getting</p>
                <Btn to="https://www.lacherpatisserie.com/blogs/news/25-chinese-new-year-wishes-in-chinese-english-for-cny-2022">Read more</Btn>
            </div>
        </BlogContent>
        <ViewAll to="/">
            View all
        </ViewAll>
  </section>;
}

export default Blog;
