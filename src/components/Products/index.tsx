import { motion } from 'framer-motion';
import React from 'react';
import style from './styles/products.style.module.css';
import {
  GridContainer,
  GridItem,
  Link,
} from './styles/Products.styled.components';
function Products() {
  return (
    <section className={style.product}>
      <GridContainer>
        <GridItem>
          <motion.div>
            <Link to='/ww'>
              <div className={style.layer}>
                <h1>Whole Cake</h1>
              </div>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_600x.jpg'
                width='100%'
              />
            </Link>
          </motion.div>
        </GridItem>
        <GridItem>
          <motion.div>
            <Link to='/ww'>
              <div className={style.layer}>
                <h1>Individual Desert</h1>
              </div>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/individual-dessert_600x.jpg'
                width='100%'
              />
            </Link>
          </motion.div>
        </GridItem>
        <GridItem>
          <motion.div>
            <Link to='/ww'>
              <div className={style.layer}>
                <h1>Limited Edition</h1>
              </div>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/limited-edition_600x.jpg'
                width='100%'
              />
            </Link>
          </motion.div>
        </GridItem>
        <GridItem>
          <motion.div>
            <Link to='/ww'>
              <div className={style.layer}>
                <h1>Add-Ons</h1>
              </div>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/add-ons_600x.jpg'
                width='100%'
              />
            </Link>
          </motion.div>
        </GridItem>
          </GridContainer>
          
          <h1>Monthly Bestsellers</h1>
          
      <GridContainer>
        <GridItem products={true}>
          <motion.div>
            <Link to='/ww'>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/valrhona-caraibe-hazelnut-praline-01_3646be8b-1afe-4aec-8b90-5824445c1d9c_1200x.jpg'
                width='100%'
              />
              <p>
                Valrhona Caraibe Hazelnut Praline
                <br /> from RM115.00
              </p>
            </Link>
          </motion.div>
        </GridItem>
        <GridItem products={true}>
          <motion.div>
            <Link to='/ww'>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/uji-matcha-tart-01_600x.jpg'
                width='100%'
              />
              <p>
                Uji Matcha Tart
                <br /> RM105.00
              </p>
            </Link>
          </motion.div>
        </GridItem>
        <GridItem products={true}>
          <motion.div>
            <Link to='/ww'>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/citron-tart-01_1200x.jpg'
                width='100%'
              />
              <p>
                Citron Tart
                <br /> RM82.00
              </p>
            </Link>
          </motion.div>
        </GridItem>
        <GridItem products={true}>
          <motion.div>
            <Link to='/ww'>
              <motion.img
                src='https://cdn.shopify.com/s/files/1/0040/2305/8561/products/kochi-yuzu-mango-tart-01_a44ff425-3b2a-4a41-b22c-92c7badc8310_600x.jpg'
                width='100%'
              />
              <p>
                Kochi Yuzu Mango Tart
                <br /> RM120.00
              </p>
            </Link>
          </motion.div>
        </GridItem>
      </GridContainer>
    </section>
  );
}

export default Products;
