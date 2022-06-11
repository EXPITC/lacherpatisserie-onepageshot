import { createGlobalStyle } from 'styled-components';
const size = {
  mobileS: '320px',
  mobileM: '375px',
  tabletS: '600px',
  tablet: '768px',
  laptop: '1000px',
  laptopM: '1200px',
};
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopM: `(max-width: ${size.laptopM})`,
}
const GlobalStyle = createGlobalStyle`
 :root {
  --transition-default: 1s  cubic-bezier(0.19, 1, 0.22, 1);
  --page-background: #ffffff;
  --color-primary: #242424;
  --disabled-color-primary: rgba(36, 36, 36, 0.5);
  --color-primary-opacity: rgba(36, 36, 36, 0.03);
  --link-color: #88694e;
  --active-link-color: #242424;
  --button-background-color: #88694e;
  --button-background-hover-color: #88694e;
  --button-background-hover-color-lighten: #987657;
  --button-text-color: #ffffff;
  --sale-color: #fff7b2;
  --sale-text-color: #000000;
  --sale-color-faint: rgba(255, 247, 178, 0.1);
  --sold-out-color: #b22222;
  --sold-out-text-color: #ffffff;
  --header-background: #ffffff;
  --header-text: #242424;
  --header-border-color: rgba(36, 36, 36, 0.1);
  --slideshow-border-color:#d9d9d9;
  --header-hover-background-color: rgba(36, 36, 36, 0.1);
  --header-overlay-text: #ffffff;
  --sticky-header-background: rgba(0, 0, 0, 0);
  --sticky-header-text: #000000;
  --sticky-header-border: rgba(0, 0, 0, 0.1);
  --mobile-menu-text: #000000;
  --mobile-menu-background: #fff7b2;
  --mobile-menu-border-color: rgba(0, 0, 0, 0.5);
  --footer-background: #fff7b2;
  --footer-text: #88694e;
  --footer-hover-background-color: rgba(136, 105, 78, 0.1);
  --pop-up-text: #242424;
  --pop-up-background: #fff;
  --secondary-color: rgba(0, 0, 0, 1) default!;
  --select-padding: 5px;
  --select-radius: 2px default!;
  --border-color: rgba(36, 36, 36, 0.5);
  --border-search: rgba(36, 36, 36, 0.1);
  --border-color-subtle: rgba(36, 36, 36, 0.1);
  --border-color-subtle-darken: #171717;
  --color-scheme-light-background: #f3f3f3;
  --color-scheme-light-background-hover: rgba(243, 243, 243, 0.1);
  --color-scheme-light-text: #414141;
  --color-scheme-light-text-hover: rgba(65, 65, 65, 0.7);
  --color-scheme-light-input-hover: rgba(65, 65, 65, 0.1);
  --color-scheme-accent-background: #fff7b2;
  --color-scheme-accent-background-hover: rgba(255, 247, 178, 0.1);
  --color-scheme-accent-text: #ffffff;
  --color-scheme-accent-text-hover: rgba(255, 255, 255, 0.7);
  --color-scheme-accent-input-hover: rgba(255, 255, 255, 0.1);
  --color-scheme-dark-background: #88694e;
  --color-scheme-dark-background-hover: rgba(136, 105, 78, 0.1);
  --color-scheme-dark-text: #ffffff;
  --color-scheme-dark-text-hover: rgba(255, 255, 255, 0.7);
  --color-scheme-dark-input-hover: rgba(255, 255, 255, 0.1);
  --header-font-stack: Garamond, Baskerville, Caslon, serif;
  --header-font-weight: 400;
  --header-font-style: italic;
  --header-font-transform: none;
  --header-letter-spacing: normal;
  --body-font-stack: Madera, sans-serif;
  --body-font-weight: 400;
  --body-font-style: normal;
  --body-font-size-int: 15;
  --body-font-size: 15px;
  --subheading-font-stack: Madera, sans-serif;
  --subheading-font-weight: 600;
  --subheading-font-style: normal;
  --subheading-font-transform: none;
  --subheading-case: none;
  --heading-base: 34;
  --subheading-base: 14;
  --subheading-2-font-size: 16px;
  --subheading-2-line-height: 20px;
  --product-titles: 24;
  --subpage-header: 24;
  --subpage-header-px: 24px;
  --subpage-header-line-height: 34px;
  --heading-font-size: 34px;
  --heading-line-height: 44px;
  --subheading-font-size: 14px;
  --subheading-line-height: 18px;
  --color-image-overlay: #ffffff;
  --color-image-overlay-text: #fff;
  --image-overlay-opacity: calc(10 / 100);
  --flexslider-icon-eot: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/flexslider-icon.eot?v=70838442330258149421651508706;;
  --flexslider-icon-eot-ie: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/flexslider-icon.eot%23iefix?8128;;
  --flexslider-icon-woff: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/flexslider-icon.eot?v=70838442330258149421651508706;;
  --flexslider-icon-ttf: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/flexslider-icon.eot?v=70838442330258149421651508706;;
  --flexslider-icon-svg: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/flexslider-icon.eot?v=70838442330258149421651508706;;
  --delete-button-png: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/delete.png?8128;;
  --loader-svg: //cdn.shopify.com/s/files/1/0040/2305/8561/t/13/assets/loader.svg?v=119822953187440061741651508709;;
  --mobile-menu-link-transform: none;
  --mobile-menu-link-letter-spacing: 0;
  --buttons-transform: none;
  --buttons-letter-spacing: 0;
  --button-font-family: var(--body-font-stack);
  --button-font-weight: var(--body-font-weight);
  --button-font-style: var(--body-font-style);
  --button-font-size: var(--body-font-size);
  --button-font-size-int: var(--body-font-size-int);
  --subheading-letter-spacing: normal;
  --nav-font-family: var(--body-font-stack);
  --nav-font-weight: var(--body-font-weight);
  --nav-font-style: var(--body-font-style);
  --nav-text-transform: none;
  --nav-letter-spacing: 0;
  --nav-font-size-int: var(--body-font-size-int);
  --password-text-color: #000000;
  --password-error-background: #feebeb;
  --password-error-text: #7e1412;
  --password-login-background: #111111;
  --password-login-text: #b8b8b8;
  --password-btn-text: #ffffff;
  --password-btn-background: #000000;
  --password-btn-background-success: #4caf50;
  --success-color: #28a745;
  --error-color: #b94a48;
 }
`;
export default GlobalStyle;
