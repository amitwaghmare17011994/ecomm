import React from "react";
import componentQueries from "react-component-queries";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./user/homePage/HomePage";
import UserDashboard from "./user/userDashboarPage/UserDashboard";
import Header from "./user/componets/Header";
import ProductPage from "./user/productPage/ProductPage";

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <HashRouter basename={getBasename()}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user" component={UserDashboard} />
            <Route exact path="/product/:id?" component={ProductPage} />

            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
