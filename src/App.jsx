import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import ShopCategorySub from './pages/ShopCategorySub';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ErrorPage from './pages/ErrorPage';
import PageNotFoundError from './pages/PageNotFoundError';
import AllProducts from './pages/AllProducts';
import ProductsByPage from './pages/ProductsByPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} errorElement={<ErrorPage />} />

        <Route
          path="/allproducts/:mainCategory"
          element={<ShopCategory />}
          errorElement={<ErrorPage />}
        />
         <Route
          path="/allproducts/display/:page"
          element={<ProductsByPage />}
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
