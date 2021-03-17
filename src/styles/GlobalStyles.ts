import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family:  "Helvetica Neue", Arial, sans-serif;
}

html,body,#root{
  height: 100%;
}

html{
  @media(max-width: 1080px){
    font-size:93.75% //15px
  }
  @media(max-width: 720px){
    font-size:87.5% //15px
  }
}

*, button, input {
  border:0;
  outline:0;
}

`;
