import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  

}
:root {
  --font-family: 'Roboto', sans-serif;

  --font-size-title-big: 60px;
  --font-size-title-medium: 46px;
  --font-size-title-small: 35px;
  --font-size-body-big: 27px;
  --font-size-body-medium: 18px;
  --font-size-body-small: 16px;
  --font-size-body-smaller: 12px;

  --font-weight-400: 400;
  --font-weight-300: 300;

  --line-height-title-big: 70px;
  --line-height-title-medium: 54px;
  --line-height-title-small: 41px;
  --line-height-body-big: 32px;
  --line-height-body-medium: 21px;
  --line-height-body-small: 19px;
  --line-height-body-smaller: 14px;


  --color-primary:#2A7AE4;
  //FONT COLOR
  --font-color: #f5f5f5;
  //ERRORS
  --color-error-dark: #c62828;
  --color-error-medium: #e53935;
  --color-error-light: #fce7e7;
  //GRAY
  --color-gray-dark: #c2c2c2;
  --color-gray-medium: #e5e5e5;
  --color-gray-light: #f5f5f5;
  //BLACK
  --color-black-dark: rgba(0, 0, 0, 0.9);
  --color-black-medium: rgba(0, 0, 0, 0.6);
  --color-black-light: rgba(0, 0, 0, 0.5);
  --color-black-lighter: #9E9E9E;
  //COLOR CURSOS
  --color-frontend: #6bd1ff;
  --color-backend: #00c86f;
  --color-infra: #9cd33b;
  --color-mobile: #ffba05;
  --color-marketing: #6b5be2;
  --color-inovation: #ff8c2a;
  --color-ux: #dc6ebe;
  --color-data-science: #9cd33b;
}
`





export default GlobalStyle

