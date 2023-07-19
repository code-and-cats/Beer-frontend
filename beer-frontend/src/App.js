import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import Background from './components/Background'
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Background />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
