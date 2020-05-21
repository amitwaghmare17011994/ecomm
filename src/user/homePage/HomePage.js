import React, { Component } from "react";
import Header from "../componets/Header";
import Body from "./Body";
import CategoriesCard from "../componets/CategoriesCard";
import Loader from "../componets/Loader";
import Drawer from "../componets/Drawer";

export default class HomePage extends Component {
  state = { products: [], loading: true };
  componentDidMount = async () => {
    try {
      const res = await fetch("https://www.businessstories.sparksoftwares.in/")
        .then((res) => res.json())
        .then((res) => res);
      this.setState({ products: res.products, loading: false });
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  };

  onProductSelect = (selectedProduct) => {
    this.props.history.push(`/product/${selectedProduct.id}`);
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <div className="container-fluid">
          {loading ? (
            <Loader />
          ) : (
            <div className="row ">
              <Drawer/>
              <div className="col-lg-3 col-md-4">
                <CategoriesCard />
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12">
                <Body
                  products={products}
                  onProductSelect={this.onProductSelect}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
