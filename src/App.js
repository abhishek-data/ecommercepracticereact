import React, {
  Fragment,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

import Login from "./components/pages/Auth/Login";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import CartContext from "./store/cart-context";
const Cart = React.lazy(() => import("./components/Cart/Cart"))
const About = React.lazy(() => import("./components/pages/About"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Home = React.lazy(() => import("./components/pages/Home"));
const ProductDetail = React.lazy(() =>
  import("./components/pages/ProductDetail")
);
const ProductList = React.lazy(() =>
  import("./components/Product/ProductList")
);
const App = () => {
  const [openCart, setOpenCart] = useState(false);
  const history = useHistory();
  const { isLoggedIn, cartAccess } = useContext(CartContext);
  

  const openCartHandler = useCallback(() => {
    if (isLoggedIn) {
      cartAccess();
      setOpenCart(true);
    }
  }, [cartAccess, isLoggedIn]);

  const closeCartHandler = () => {
    setOpenCart(false);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      setOpenCart(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      history.replace("/store");
    }
  }, [isLoggedIn, history]);

  return (
    <Fragment>
      <Header onOpenCart={openCartHandler} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/store">
            {isLoggedIn && <ProductList />}
            {openCart && <Cart onCloseCart={closeCartHandler} />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
          {!isLoggedIn && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          <Route path="*" exact>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default App;
