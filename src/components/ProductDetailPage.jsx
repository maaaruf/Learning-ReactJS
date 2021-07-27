import LoadingIndicator from "./LoadingIndicator";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetailPage = (props) => {
    const [loadingIndicator, setLoadingIndicator] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingIndicator(false);
        }, 1000);

    }, [loadingIndicator]);

    return <>

        {loadingIndicator ? <LoadingIndicator /> :
            <div>
                <p>Product Detail</p>
                <h4><b>Product Name: {props.product.name}</b></h4>
                <h6>Category: {props.product.category}</h6>
                <h6>Description: {props.product.description}</h6>
                <h5>Price: {props.product.price}</h5>
                <button onClick={props.backToProductList}> Back To List </button>
            </div>
        }
    </>
}

export default ProductDetailPage;