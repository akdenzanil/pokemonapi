import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
 
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: black;
  background: linear-gradient(90deg, #A22728 0%, #F1B5B4 35%, #E74F4F 100%);
}

a {
  color: inherit;
  text-decoration: none;
}
li{
  list-style-type:none;
}
 
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
`;

export default GlobalStyle;
