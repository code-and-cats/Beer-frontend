import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}

  h1 {
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 42px;
    margin-bottom: 0;
  }

  h2, h3, h4
  {
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 12px;
    margin-bottom: 0;
  }

  p, li {
    font-family: 'Istok Web', sans-serif;
  }

  h2 {
    font-size: 12px;
  }

  h3 {
    font-size: 18px;
  }

  a {
    color: #006335;
    text-decoration: none;
    font-family: 'Biryani', sans-serif;
    font-size: 16px;
    font-weight: 800;
  }
`

export default GlobalStyles
