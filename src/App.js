import './App.css';
import ProductsPage from './components/ProductPage'
import ProductDetailPage from './components/ProductDetailPage'
import LoadingIndicator from './components/LoadingIndicator';
import { useEffect, useState } from 'react';

function App() {
  const [productsList] = useState([
    {
      name: 'Mask 1',
      description: 'Product Description',
      image: '../images/mask.jpg',
      price: 'price',
      category: 'Product Category',
    },
    {
      name: 'Mask 2',
      description: 'Product Description',
      image: '../images/mask.jpg',
      price: 'price',
      category: 'Product Category',
    },
    {
      name: 'Mask 3',
      description: 'Product Description',
      image: '../images/mask.jpg',
      price: 'price',
      category: 'Product Category',
    }
  ]);

  const [currentProduct, setCurrentProduct] = useState(null);
  const [loadingIndicator, setLoadingIndicator] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingIndicator(false);
    }, 1000);
    
  }, [loadingIndicator]);

  const selectProduct = (product) => {
    setCurrentProduct({ ...currentProduct, currentProduct: product });
  };

  const backToProductList = () => {
    setCurrentProduct(null);
  };

  return <>
  {/* {currentProduct? < ProductDetailPage product = {currentProduct} backToProductList = {backToProductList}/> : 
     <ProductsPage products = {productsList} selectProduct = {selectProduct} backToList = {backToProductList}/> 
  } */}

  {loadingIndicator? <LoadingIndicator />: 
      currentProduct? < ProductDetailPage product = {currentProduct} backToProductList = {backToProductList}/> : 
        <ProductsPage products = {productsList} selectProduct = {selectProduct} backToList = {backToProductList}/> 
  }

  </>
}

export default App;
