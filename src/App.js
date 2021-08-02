import './App.css';
import ProductsPage from './components/ProductPage'
import ProductDetailPage from './components/ProductDetailPage'
import LoadingIndicator from './components/LoadingIndicator';
import { useEffect, useState } from 'react';
import { Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import data from './data/Data'

function App() {
  const [productsList] = useState(data);
  const history = useHistory();
  const location = useLocation();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loadingIndicator, setLoadingIndicator] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingIndicator(false);
    }, 1000);
    
  }, [loadingIndicator]);

  const selectProduct = (index) => {
    history.push('product-detail/' + index);
  };

  return <>
  <Switch>
    <Route exact path='/'> 
      <ProductsPage products = {productsList} selectProduct = {selectProduct} />
    </Route>
    <Route exact path='/product-detail/:id'> 
      < ProductDetailPage />
    </Route>
    {/* <Route exact path='/detail' render = {() => <Redirect to='/product-detail' />} /> */}
    <Route path='*'> 
      <p>404</p>
    </Route>

  </Switch>

  {/* {loadingIndicator? <LoadingIndicator />: 
      currentProduct? < ProductDetailPage product = {currentProduct} backToProductList = {backToProductList}/> : 
        <ProductsPage products = {productsList} selectProduct = {selectProduct} backToList = {backToProductList}/> 
  } */}

  </>
}

export default App;
