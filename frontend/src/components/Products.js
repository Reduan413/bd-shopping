import React, {useState, useEffect} from 'react'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productsActions';


function Products (props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        
    }, [])
    
    return( loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="container">
            <Banner/>
        <div className="products">
            { products.map(product => 
                <div className="product" key={product.id}>
                    <div className="product-image">
                    <Link to={'/products/' + product.id}>
                        <img src={product.image} alt="not found"/>
                    </Link>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            <Link to={'/products/' + product.id}>{product.name}</Link>
                        </div>
                        <div className="product-price">
                            ${product.price}
                        </div>
                    </div>
                    <div className="add-to-cart">add to cart</div>
                    {product.Status === 'hot' ? <div className="hot">Hot</div> : ''}
                    {product.Status === 'new' ? <div className="new">New</div> : ''}
                </div>
            )}
        </div>
        </div>
    )
}

export default Products;