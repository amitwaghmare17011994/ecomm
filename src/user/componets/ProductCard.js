import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    const { product , onProductSelect } = this.props;
    const {name,price,imgUrl}=product
    return (
      <div
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() => onProductSelect(product)}
      >
        <div className="card-header">
          {name}
          <span style={{ float: "right", fontWeight: "bold" }}>Rs {price}</span>
        </div>

        <div className="card-body">
          <img style={{ width: "100%", height: 200 }} src={imgUrl} />
        </div>
        <div className="card-footer">
          <button
            style={{ width: "100%" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="cardButton"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
