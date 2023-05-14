import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  h1 {
    font-family: 'Sigmar', cursive;
    font-size: 42px;
  }

  p, h2
  {
    font-family: 'Biryani', sans-serif;
    font-size: 12px;
  }

  a {
    color: #006335;
    text-decoration: none;
    font-family: 'Biryani', sans-serif;
    font-size: 12px;
    font-weight: 800;
  }

`

export default GlobalStyles
