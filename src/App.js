import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import Layout from './pages/Layout';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'RobotoSlab'],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
