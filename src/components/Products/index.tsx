import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import style from './styles/products.style.module.css';
import {
  GridContainer,
  GridItem,
} from './styles/Products.styled.components';
import {
  cardVariant,
  coverVariant,
  gridContainerVariant,
  gridContentIIIVariant,
  gridContentIIVariant,
  gridContentIVariant,
  gridContentIVVariant,
  h1MonthlyVariant,
  imageIIVariant,
  imageVariant,
  textVariant,
} from './styles/variant/product.variant';

const data = [{
  id:1,
  url: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_600x.jpg',
  h1: 'Whole Cake',
  variant: gridContentIVariant,
  gridStart: 'viewGridI'
},{
  id:2,
  url: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/individual-dessert_600x.jpg',
  h1: 'Individual Desert',
  variant: gridContentIVariant,
  gridStart: 'viewGridI'
},{
  id:3,
  url: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/limited-edition_600x.jpg',
  h1: 'Limited Edition',
  variant: gridContentIIVariant,
  gridStart: 'viewGridII'
},{
  id:4,
  url: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/add-ons_600x.jpg',
  h1: 'Add-Ons',
  variant: gridContentIIVariant,
  gridStart: 'viewGridII'
}]

function Products() {
  const grid = useAnimation();
  return (
    <section className={style.product}>
      <GridContainer
        initial='rest'
        animate={grid}
        variants={gridContainerVariant}
      >
        {data.map(({id, url, h1, variant, gridStart}) => {
        return <GridItem
          variants={variant}
          onViewportEnter={() => grid.start(gridStart)}
          key={id}
        >
          <motion.div whileHover='hover' initial='rest'>
            <a href='/ww'>
              <div className={style.layer}>
                <motion.img
                  variants={imageVariant}
                  src={url}
                  width='100%'
                  loading='eager'
                />
                <motion.span variants={coverVariant} className={style.layer} />
                <motion.h1 variants={textVariant}>{h1}</motion.h1>
              </div>
            </a>
          </motion.div>
        </GridItem>  
        })}
        
      </GridContainer>

      <motion.h1 variants={h1MonthlyVariant} initial='rest' animate={grid} onViewportEnter={() => grid.start('viewH1')}>Monthly Bestsellers</motion.h1>

      <GridContainer
        initial='rest'
        animate={grid}
        variants={gridContainerVariant}
      >
        <GridItem
          products='true'
          variants={gridContentIIIVariant}
          onViewportEnter={() => grid.start('viewGridIII')}
        >
          <motion.div whileHover='hover' initial='rest' variants={cardVariant}>
            <a href='/ww'>
              <motion.img
                variants={imageIIVariant}
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/valrhona-caraibe-hazelnut-praline-01_3646be8b-1afe-4aec-8b90-5824445c1d9c_1200x.jpg'
                width='100%'
                loading='eager'
              />
              <p>
                Valrhona Caraibe Hazelnut Praline
                <br /> from RM115.00
              </p>
            </a>
          </motion.div>
        </GridItem>
        <GridItem products='true' variants={gridContentIIIVariant}>
          <motion.div whileHover='hover' initial='rest' variants={cardVariant}>
            <a href='/ww'>
              <motion.img
                variants={imageIIVariant}
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/uji-matcha-tart-01_600x.jpg'
                width='100%'
                loading='eager'
              />
              <p>
                Uji Matcha Tart
                <br /> RM105.00
              </p>
            </a>
          </motion.div>
        </GridItem>
        <GridItem
          products='true'
          variants={gridContentIVVariant}
          onViewportEnter={() => grid.start('viewGridIV')}
        >
          <motion.div whileHover='hover' initial='rest' variants={cardVariant}>
            <a href='/ww'>
              <motion.img
                variants={imageIIVariant}
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/citron-tart-01_1200x.jpg'
                width='100%'
                loading='eager'
              />
              <p>
                Citron Tart
                <br /> RM82.00
              </p>
            </a>
          </motion.div>
        </GridItem>
        <GridItem products='true' variants={gridContentIVVariant}>
          <motion.div whileHover='hover' initial='rest' variants={cardVariant}>
            <a href='/ww'>
              <motion.img
                variants={imageIIVariant}
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/kochi-yuzu-mango-tart-01_a44ff425-3b2a-4a41-b22c-92c7badc8310_600x.jpg'
                width='100%'
                loading='eager'
              />
              <p>
                Kochi Yuzu Mango Tart
                <br /> RM120.00
              </p>
            </a>
          </motion.div>
        </GridItem>
      </GridContainer>
    </section>
  );
}

export default Products;
