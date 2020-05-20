import React, { Component } from "react";
import { getParamsFromRoute } from "../../utils/index";
import Loader from "../componets/Loader";
import ProductCard from "../componets/ProductCard";
import ProductImage360ViewCard from "../componets/ProductImage360ViewCard";

export default class ProductPage extends Component {
  state = { selectedProduct: "", loading: true };
  componentDidMount = async () => {
    const params = getParamsFromRoute(this.props);
    const res = await fetch("https://www.businessstories.sparksoftwares.in/")
      .then((res) => res.json())
      .then((res) => res);
    this.setState({
      selectedProduct: res.products.find((i) => i.id == params.id),
      loading: false,
    });
  };
  render() {
    const { loading, selectedProduct } = this.state;
    return (
      <div className="container-fluid">
        {loading ? (
          <Loader />
        ) : (
          <div className="row justify-content-around" style={{ marginTop: 20 }}>
            <div className="col-lg-8 col-sm-12 card" style={{ padding: 10 }}>
              <div className="col-md-12">
                <ProductImage360ViewCard
                  product={selectedProduct}
                  otherImages={[
                    "https://images-na.ssl-images-amazon.com/images/I/71gdBQP%2BqGL._UL1500_.jpg",
                    "https://n1.sdlcdn.com/imgs/i/5/v/Dwiti-001-Rubber-Analog-Men-SDL941262473-1-fe23d.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/81ZKNYBwYlL._AC_SL1500_.jpg",
                  ]}
                />
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 card" style={{ padding: 10 }}>
              <div className="col-md-12">
                <div>Description</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
