import logo from './logo.svg';
import './App.css';
import ProductList from './ProductPage'
import ProductDetail from './ProductDetail';
import { Component } from 'react';
import LoadingIndicator from  './LoadingIndicator';

class App extends Component {
  state = {
    productsList: [
      {
        name: 'Mask 1',
        description: 'Product Description',
        image: './mask.jpg',
        price: 'price',
        category: 'Product Category',
      },
      {
        name: 'Mask 2',
        description: 'Product Description',
        image: './mask.jpg',
        price: 'price',
        category: 'Product Category',
      },
      {
        name: 'Mask 3',
        description: 'Product Description',
        image: './mask.jpg',
        price: 'price',
        category: 'Product Category',
      }
    ],
    currentProduct: null,
    loadingIndicator: false
  };

  componentDidMount(){
    this.showLoader(" App.js");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount : " + new Date());
  }

  componentDidUpdate(){
    console.log("componentDidUpdate : " + new Date());
  }

  showLoader = (callFrom) => {
    this.setState({...this.state, loadingIndicator: true});
    console.log("Show Loader from: "+ callFrom);
  }

  hideLoader = (callFrom) => {
    setTimeout(() => {
      console.log("Hide Loader from: "+ callFrom);
      this.setState({...this.state, loadingIndicator: false});
    }, 1000);

    // return () => clearTimeout(interval);
  }

  selectProduct = (product) => {
    this.setState({ ...this.state, currentProduct: product });
  };

  backToList = () => {
    this.setState({...this.state, currentProduct:null})
  }

  render() {
    console.log("App.js Render calling. ==============");
    return (
      <div>
        {(!this.state.currentProduct && !this.state.loadingIndicator) && 
            <ProductList products={this.state.productsList} 
              selectProduct={this.selectProduct} showLoader = {this.showLoader} hideLoader = {this.hideLoader}/>}
       
        {(this.state.currentProduct && !this.state.loadingIndicator) && 
            <ProductDetail currentProduct={this.state.currentProduct} 
              backToList={this.backToList} showLoader = {this.showLoader} hideLoader = {this.hideLoader}/>}
        
        {this.state.loadingIndicator && <LoadingIndicator />}
      </div>
    );
  }
}

export default App;
