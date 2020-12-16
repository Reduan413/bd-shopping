import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import { detailsProduct } from '../actions/productsActions';

function ProductScreen(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { products, loading, error } = productDetails;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, [])
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }


    return <div className="productscreen">
                <div className="back-to">
                    <Link to="/">Back to Home</Link>
                </div>
                {loading ? <div>Loading...</div> : 
                error ? <div>{error}</div> : (
                    <div className="productscreen-details">
                        <div className="productscreen-image">
                            <img src={products.image} alt="product"></img>
                        </div>
                        <div className="productscreen-info">
                            <ul>
                                <li>
                                    <h4>{products.name}</h4>
                                </li>
                                <li>
                                    {products.rating} stars ({products.numReviews} Reviews)
                                </li>
                                <li>
                                Price:  <b>{products.price}</b>
                                </li>
                                <li>
                                    Description:
                                    <div>
                                        {products.description}

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="productscreen-action">
                            <ul>
                                <li>
                                Price: {products.price}
                                    
                                </li>
                                <li>
                                Status:  {products.countInStock > 0 ? "In Stock": "Out 0f Stock"}
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value)}} >
                                        {[...Array(products.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )} 
                                    </select>
                                </li>
                                <li>
                                    {products.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>
                                        }
                                </li>
                            </ul>
                        </div>
                    </div>   
                )}
    </div>
}

export default ProductScreen;