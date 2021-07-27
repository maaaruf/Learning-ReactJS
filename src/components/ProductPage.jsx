import './ProductPage.css'
import image from '../images/mask.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';

const ProductsPage = (props) => {
    const [loadingIndicator, setLoadingIndicator] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoadingIndicator(false);
      }, 1000);
      
    }, [loadingIndicator]);

    return (
        <>
            {loadingIndicator? <LoadingIndicator /> :
                props.products.map(product =>
                    <div className="card" onClick = {() => props.selectProduct(product)} >
                        <img className='image' src={image} alt="Avatar"></img>
                        <div className="container">
                            <h4><b>{product.name}</b></h4>
                            <h6>{product.category}</h6>
                            <h6>{product.description}</h6>
                            <h5>Price: {product.price}</h5>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ProductsPage;