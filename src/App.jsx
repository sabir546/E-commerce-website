import React from "react";
import Navigation from "./customer/component/Navigation/Navigation";
// import HomePage from './customer/pages/HomePage/HomePage'
import Footer from "./customer/component/Footer/Footer";
// import Cart from './customer/component/Cart/Cart'
// import CheckOut from "./customer/component/Check-out/CheckOut";
// import Order from "./customer/component/Order/Order";
import OrderDetails from "./customer/component/Order/OrderDetails";
// import Product from './customer/component/product/Product'
// import ProductDetails from './customer/component/ProductDetails/ProductDetails'
// import Checkout from './customer/component/Checkout-Cart/Checkout'
const App = () => {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Checkout></Checkout> */}
        {/* <Product/> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart/> */}
        {/* <CheckOut /> */}
        {/* <Order /> */}
        <OrderDetails/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
