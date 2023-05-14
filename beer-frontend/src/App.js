import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./components/Main";
import AllBeers from "./components/AllBeers";
import Background from "./components/Background";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Background />
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/allbeers" element={<AllBeers />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;
