import "./App.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Flip } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage";
import ShopPage from "./components/shop/shopPage";
import SingleProduct from "./components/singleProduct/singleProduct";
import NotFound from "./components/notFound/notFound";
import CartPage from "./components/cartPage/cartPage";

function App() {
  return (
    <div className="App">
       <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop
        transition={Flip}
      ></ToastContainer>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/product/:id" component={SingleProduct} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={""} />
        <Route path="/not-found" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
