import React, { Component } from "react";

export default class ProductThumbNail extends Component {
  render() {
    const { imageUrl = "", onSelect, isActive } = this.props;
    return (
      <div
        className={`productThumbNail ${isActive ? "selectedThumbNail" : ""}`}
        onClick={() => onSelect(imageUrl)}
        onMouseOver={() => onSelect(imageUrl)}
      >
        <div style={{ padding: 20 }}>
          <img style={{ width: 100, height: 100 }} src={imageUrl} />
        </div>
      </div>
    );
  }
}
