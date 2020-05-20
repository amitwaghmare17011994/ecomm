import React, { Component } from 'react'
import ProductCard from '../componets/ProductCard';

export default class Body extends Component {
    render() {
      const { products } = this.props;
        return (
          <div>
            <div className="row">
              {products.map((product) => (
                <div
                  className="col-lg-4 col-sm-12 col-md-3 "
                  style={{ marginTop: 10 }}
                >
                  <ProductCard onProductSelect={this.props.onProductSelect} product={product} />
                </div>
              ))}
            </div>
          </div>
        );
    }
}
