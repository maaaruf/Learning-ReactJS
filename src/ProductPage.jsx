import React, { Component } from 'react';
import './ProductPage.css'
import image from './mask.jpg';

class ProductList extends Component {

    componentDidMount(){
        this.props.hideLoader("Product Page");

        // setTimeout(() => {
        //     this.props.hideLoader("Product Page");
        // },1000);

        console.log("Component Mounted (Loading ProductPage with delay): " + new Date());
      }
    
      componentWillUnmount(){
        this.props.showLoader("Product Page");
        console.log("componentWillUnmount (Loading ProductPage): " + new Date());
      }
    
      componentDidUpdate(){
        console.log("componentDidUpdate (Loading ProductPage): " + new Date());
      }

    render() {
        return (
            <>
                {this.props.products.map((product) => {
                    return (
                        <div className="card" onClick= {() => this.props.selectProduct(product)}>
                            <img className='image' src= {image} alt="Avatar"></img>
                            <div className="container">
                                <h4><b>{product.name}</b></h4>
                                <h6>{product.category}</h6>
                                <h6>{product.description}</h6>
                                <h5>Price: {product.price}</h5>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
}

export default ProductList;