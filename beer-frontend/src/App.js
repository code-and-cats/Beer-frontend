import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import { styled } from 'styled-components'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import Background from './components/Background'
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Maindiv>
        <Background />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:id" element={<SingleBeer />} />
        </Routes>
      </Maindiv>
    </BrowserRouter>
  )
}

const Maindiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
overflow hidden;
`
export default App
