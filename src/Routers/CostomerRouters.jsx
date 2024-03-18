import React from "react";

import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/component/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "../customer/component/product/Product";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Navigation from "../customer/component/Navigation/Navigation";
import Footer from "../customer/component/Footer/Footer";
import CheckOut from "../customer/component/Check-out/CheckOut";
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'


const CostomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkOut" element={<CheckOut/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>




        


       
       
        {/* {<Order />}  */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CostomerRouters;
