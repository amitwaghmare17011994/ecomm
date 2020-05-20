import React, { Component } from 'react'

export default class CategoriesCard extends Component {
    render() {
        return (
             <div
              style={{ height: 300, marginTop: 10 }}
             >
              <div className="card">
                <div className="card-header">Categories</div>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>Category 1</span>
                  <span>Category 1</span>
                  <span>Category 1</span>
                  <span>Category 1</span>
                </div>
              </div>
            </div>
           
        );
    }
}
