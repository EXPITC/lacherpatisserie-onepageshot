import { motion, useAnimation } from 'framer-motion';
import style from './styles/products.style.module.css';
import { GridContainer, GridItem } from './styles/Products.styled.components';
import {
  cardVariant,
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

const data = [
  {
    id: 1,
    url: 'https://www.lacherpatisserie.com/collections/cakes-gateaux',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_600x.jpg',
    h1: 'Whole Cake',
    variant: gridContentIVariant,
    gridStart: 'viewGridI',
  },
  {
    id: 2,
    url: '',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/individual-dessert_600x.jpg',
    h1: 'Individual Desert',
    variant: gridContentIVariant,
    gridStart: 'viewGridI',
  },
  {
    id: 3,
    url: '',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/limited-edition_600x.jpg',
    h1: 'Limited Edition',
    variant: gridContentIIVariant,
    gridStart: 'viewGridII',
  },
  {
    id: 4,
    url: '',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/add-ons_600x.jpg',
    h1: 'Add-Ons',
    variant: gridContentIIVariant,
    gridStart: 'viewGridII',
  },
];

const monthlyData = [
  {
    start: 'viewGridIII',
    title: 'Valrhona Caraibe Hazelnut Praline',
    price: 'from RM115.00',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/products/valrhona-caraibe-hazelnut-praline-01_3646be8b-1afe-4aec-8b90-5824445c1d9c_1200x.jpg',
    url: 'https://www.lacherpatisserie.com/products/valrhona-caraibe-hazelnut-praline',
    variantContent: gridContentIIIVariant,
    variantImg:imageIIVariant
  },
  {
    start: 'viewGridIII',
    title: 'Uji Matcha Tart',
    price: 'RM105.00',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/products/uji-matcha-tart-01_600x.jpg',
    url: 'https://www.lacherpatisserie.com/products/uji-matcha-tart',
    variantContent: gridContentIIIVariant,
    variantImg:imageIIVariant
  },
  {
    start: 'viewGridIV',
    title: 'Citron Tart',
    price: 'RM82.00',
    img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/products/citron-tart-01_1200x.jpg',
    url: 'https://www.lacherpatisserie.com/products/citron-tart',
    variantContent: gridContentIVVariant,
    variantImg:imageIIVariant
  },
  {
      start: 'viewGridIV',
      title: ' Kochi Yuzu Mango Tart',
      price: 'RM120.00',
      img: 'https://cdn.shopify.com/s/files/1/0040/2305/8561/products/kochi-yuzu-mango-tart-01_a44ff425-3b2a-4a41-b22c-92c7badc8310_600x.jpg',
      url: 'https://www.lacherpatisserie.com/products/kochi-yuzu-mango-tart',
      variantContent: gridContentIVVariant,
      variantImg: imageIIVariant,
 
  },
];
function Products() {
  const grid = useAnimation();

  const mobile = window.screen.width <= 400;
  return (
    <section className={style.product}>
      <GridContainer
        initial='rest'
        animate={grid}
        variants={gridContainerVariant}
      >
        {data.map(({ id, url, h1, variant, gridStart, img }) => {
          return (
            <GridItem
              variants={variant}
              onViewportEnter={() => grid.start(gridStart)}
              key={id}
            >
              <motion.div whileHover='hover' initial={mobile ? '' : 'rest'}>
                <a href={url}>
                  <div className={style.layer}>
                    <motion.img
                      variants={imageVariant}
                      src={img}
                      width='100%'
                      loading='eager'
                    />
                    <motion.h1 variants={textVariant}>{h1}</motion.h1>
                  </div>
                </a>
              </motion.div>
            </GridItem>
          );
        })}
      </GridContainer>

      <motion.h1
        variants={h1MonthlyVariant}
        initial='rest'
        animate={grid}
        onViewportEnter={() => grid.start('viewH1')}
      >
        Monthly Bestsellers
      </motion.h1>

      <GridContainer
        initial='rest'
        animate={grid}
        variants={gridContainerVariant}
      >
        
        {monthlyData.map(({variantContent,variantImg,start,title,price,url,img}) => {
          return (
            <GridItem
              products='true'
              variants={variantContent}
              onViewportEnter={() => grid.start(start)}
            >
              <motion.div
                whileHover='hover'
                initial='rest'
                variants={cardVariant}
              >
                <a href={url}>
                  <motion.img
                    animate={{
                      x: mobile ? -2.5 : 0,
                      y: mobile ? -3 : 0,
                    }}
                    variants={variantImg}
                    src={img}
                    width='100%'
                    loading='eager'
                  />
                  <p>
                    {title}
                    <br /> {price}
                  </p>
                </a>
              </motion.div>
            </GridItem>
          );
        })}
      </GridContainer>
    </section>
  );
}

export default Products;
