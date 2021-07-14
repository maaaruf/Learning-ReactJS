import React, { Component } from 'react';

class ProductDetail extends Component {

    componentDidMount(){
        //this.props.hideLoader("Product Detail Page");
        var s = setInterval(this.props.hideLoader("Product Detail Page"),3000);
        console.log("Component Mounted (Loading ProductDetail): " + new Date());
        
      }
    
      componentWillUnmount(){
        this.props.showLoader("Product Detail Page");
        console.log("componentWillUnmount (Loading ProductDetail): " + new Date());
      }
    
      componentDidUpdate(){
        console.log("componentDidUpdate (Loading ProductDetail): " + new Date());
      }

    render() {
        return <div>
            <p>Product Detail</p>
            <h4><b>Product Name: {this.props.currentProduct.name}</b></h4>
            <h6>Category: {this.props.currentProduct.category}</h6>
            <h6>Description: {this.props.currentProduct.description}</h6>
            <h5>Price: {this.props.currentProduct.price}</h5>
            <button onClick = {this.props.backToList} >Back To List</button>
        </div>
    }
}

export default ProductDetail;