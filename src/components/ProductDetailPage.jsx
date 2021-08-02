import LoadingIndicator from "./LoadingIndicator";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import data from '../data/Data'

const ProductDetailPage = () => {
    const [loadingIndicator, setLoadingIndicator] = useState(true);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setLoadingIndicator(false);
        }, 1000);

    }, [loadingIndicator]);

    const backToProductsPage = ()=>{
        history.push('/');
    }

    return <>

        {loadingIndicator ? <LoadingIndicator /> :
            <div>
                <p>Product Detail</p>
                <h4><b>Product Name: {data[params.id].name}</b></h4>
                <h6>Category: {data[params.id].category}</h6>
                <h6>Description: {data[params.id].description}</h6>
                <h5>Price: {data[params.id].price}</h5>
                <button onClick={backToProductsPage}> Back To List </button>
            </div>
        }
    </>
}

export default ProductDetailPage;