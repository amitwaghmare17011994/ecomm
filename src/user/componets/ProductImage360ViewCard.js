import React, { Component } from "react";
import ProductCard from "./ProductCard";
import ProductThumbNail from "./ProductThumbNail";

export default class ProductImage360ViewCard extends Component {
  state = { selectedImage: {} };

  componentDidMount() {
    const { product } = this.props;

    this.setState({ selectedImage: product.imgUrl });
  }

  render() {
    const { product, otherImages = [] } = this.props;
    const { selectedImage } = this.state;
    return (
      <div>
        <img src={selectedImage} style={{ width: 360, height: 360 }} />
        <hr />
        <div style={{ display: "flex" }}>
          {[...otherImages, product.imgUrl].map((imageUrl) => (
            <div style={{ margin: 10 }}>
              <ProductThumbNail
                isActive={imageUrl == selectedImage}
                imageUrl={imageUrl}
                onSelect={(img) => this.setState({ selectedImage: img })}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
