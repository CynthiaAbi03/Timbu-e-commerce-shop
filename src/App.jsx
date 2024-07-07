import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import ShopCategorySub from './pages/ShopCategorySub';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import PageNotFoundError from './pages/PageNotFoundError';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Shop />} errorElement={<ErrorPage />} />

        <Route
          path="/allproducts/:mainCategory"
          element={<ShopCategory />}
          errorElement={<ErrorPage />}
        />

        <Route
          path="/allproducts/:mainCategory/:subCategory"
          element={<ShopCategorySub />}
          errorElement={<ErrorPage />}
        />

        <Route
          path="/product"
          element={<Product />}
          errorElement={<ErrorPage />}
        >
          <Route
            path=":productid"
            element={<Product />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route path="/cart" element={<Cart />} errorElement={<ErrorPage />} />
        <Route
          path="/checkout"
          element={<Checkout />}
          errorElement={<ErrorPage />}
        />
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
