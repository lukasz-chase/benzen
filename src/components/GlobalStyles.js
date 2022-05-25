import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
}
.App{
    font-family: 'Raleway', sans-serif;
}
.link{
    color:black;
    &:hover{
        color: black;
        text-decoration:none;
    }
}
.pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 1rem;
    }
`;

export default GlobalStyles;
